// object is basic type of component
function object(id, meta, auto_reset) {
    // properties
    this.id = id;
    this.positions = [];
    this.meta = meta;
    if (typeof auto_reset !== "undefined") {
        this.auto_reset = auto_reset;
    } else {
        this.auto_reset = true;
    }
    var dom_obj, width, height, current_x_percent, current_x_delta, current_y_percent, current_y_delta, state, current_alpha, default_exit_location, content, width_percent, width_delta, height_percent, height_delta, z_index, image_scale_mode;
    
    // init object
    this.init = function (selector, content, class_name) {
        if (typeof class_name == "undefined") {
            class_name = "object";
        }
        this.content = content;
        $(selector).append(getDiv('obj_' + id, class_name, content));
        // get info
        this.dom_obj = $("#obj_" + id);
        this.refresh();
        
        if (this.positions.length > 0){
            var pos = this.positions[0];
            this.moveToPosition(pos.x_percent, pos.x_delta, pos.y_percent, pos.y_delta, pos.alpha, 0);
        }
    };
    
    // init with image
    this.init_with_image = function(selector, image) {
        // init basic structures
        this.init(selector, 'image', "object image_object");
        // set background
        this.dom_obj.css('background-image', 'url(' + image + ')');
        // set size
        this.refresh();
    };
    
    // set size
    this.set_size = function(width_percent, width_delta, height_percent, height_delta) {
        this.width_percent = width_percent;
        this.width_delta = width_delta;
        this.height_percent = height_percent;
        this.height_delta = height_delta;
    }
    
    // reset size
    this.refresh = function () {
        // set size
        if (typeof this.width_percent !== "undefined") {
            // calc actual size
            var actual_width = this.meta.width * this.width_percent / 100 + this.width_delta;
            var actual_height = this.meta.height * this.height_percent / 100 + this.height_delta;
            // css apply
            this.dom_obj.css('width', actual_width);
            this.dom_obj.css('height', actual_height);
        }
        // reset size
        this.width = this.dom_obj.width();
        this.height = this.dom_obj.height();
        // set z-index
        if (typeof this.z_index !== "undefined"){
            this.dom_obj.css('z-index', this.z_index);
        }
        // set image scale mode
        if (typeof this.image_scale_mode !== "undefined"){
            this.dom_obj.css('background-size', this.image_scale_mode);
        }
    }
    
    // set z-index
    this.set_z_index = function (index) {
        this.z_index = index;
    }
    
    // set image scale mode
    this.set_image_scale_mode = function (mode) {
        this.image_scale_mode = mode;
    }

    // add position
    this.addPosition = function (x_percent, x_delta, y_percent, y_delta, alpha) {
        this.positions.push({'x_percent': x_percent, 
                             'x_delta': x_delta, 
                             'y_percent': y_percent, 
                             'y_delta': y_delta, 
                             'alpha': alpha});
    };
    
    // move to a position
    this.moveToPosition = function (x_percent, x_delta, y_percent, y_delta, alpha, duration) {
        // store state
        this.current_x_percent = x_percent;
        this.current_x_delta = x_delta;
        this.current_y_percent = y_percent;
        this.current_y_delta = y_delta;
        // calc correct position
        var destination_x = this.meta.width * (x_percent / 100) - this.width / 2 + x_delta;
        var destination_y = this.meta.height * (y_percent / 100) - this.height / 2 + y_delta;
        // perform with animation
        if (duration !== undefined || duration > 0) {
            this.dom_obj.animate({
                'left' : destination_x,
                'top' : destination_y,
                'opacity' : alpha
            }, duration);
        } else {
            // perform without animation
            this.dom_obj.css("left", destination_x);
            this.dom_obj.css("top", destination_y);
        }
    };
    
    // move to a state
    this.moveToState = function (state, duration) {
        console.log('moving obj ' + this.id + ' to ' + state);
        // update state logger
        var the_state = this.positions[state];
        // perform movement
        this.moveToPosition(the_state.x_percent, the_state.x_delta, the_state.y_percent, the_state.y_delta, the_state.alpha, duration);
    };
    
    // exit
    this.exit = function (duration) {
        // determine destination
        var destination;
        
        if (typeof this.default_exit_location !== 'undefined'){
            destination = this.default_exit_location;
        } else {
            destination = 0;
        }
        // perform
        this.moveToState(destination, duration);
    };
}