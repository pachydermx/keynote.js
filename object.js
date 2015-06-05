// object is basic type of component
function object(id, meta, auto_reset) {
    // properties
    this.id = id;
    // check id
    if (id.indexOf(' ') >= 0){
        console.log("Error: Space in object ID");
    }
    this.states = [];
    this.meta = meta;
    if (typeof auto_reset !== "undefined") {
        this.auto_reset = auto_reset;
    } else {
        this.auto_reset = true;
    }
    var dom_obj, width, height, current_x_percent, current_x_delta, current_y_percent, current_y_delta, state, current_alpha, default_exit_location, content, width_percent, width_delta, height_percent, height_delta, z_index, image_scale_mode, angle;
    
    // init object
    this.init = function (selector, content, class_name) {
        if (typeof class_name === "undefined") {
            class_name = "object";
        }
        this.content = content;
        $(selector).append(getDiv('obj_' + id, class_name, content));
        // get info
        this.dom_obj = $("#obj_" + id);
        this.refresh();
        // reset to default position
        if (this.states.length > 0) {
            var pos = this.states[0];
            this.perform_animation(pos, 0);
        }
    };
    
    // init with image
    this.init_with_image = function (selector, image) {
        // init basic structures
        this.init(selector, 'image', "object image_object");
        // set background
        this.dom_obj.css('background-image', 'url(' + image + ')');
        // set size
        this.refresh();
    };
    
    // init from DOM object
    this.init_with_selector = function (object_selector, additional_class) {
        $(object_selector).addClass("object " + additional_class);
        this.dom_obj = $(object_selector);
        this.refresh();
        // reset to default position
        if (this.states.length > 0) {
            var pos = this.states[0];
            this.perform_animation(pos, 0);
        }
    };
    
    // set size
    this.set_size = function (width_percent, width_delta, height_percent, height_delta) {
        // add size
        this.width_percent = width_percent;
        this.width_delta = width_delta;
        this.height_percent = height_percent;
        this.height_delta = height_delta;
    };
        
    // set z-index
    this.set_z_index = function (index) {
        this.z_index = index;
    };
    
    // set image scale mode
    this.set_image_scale_mode = function (mode) {
        this.image_scale_mode = mode;
    };

    // reset size
    this.refresh = function () {
        // set size
        if (typeof this.width_percent !== "undefined") {
            // calc actual size
            var actual_width = this.meta.width * this.width_percent / 100 + this.width_delta, actual_height = this.meta.height * this.height_percent / 100 + this.height_delta;
            // css apply
            this.dom_obj.css('width', actual_width);
            this.dom_obj.css('height', actual_height);
        }
        // reset size
        this.width = this.dom_obj.width();
        this.height = this.dom_obj.height();
        // set location
        var actual_x = this.meta.width * (this.current_x_percent / 100) - this.width / 2 + this.current_x_delta;
        var actual_y = this.meta.height * (this.current_y_percent / 100) - this.height / 2 + this.current_y_delta;
        this.dom_obj.css('left', actual_x);
        this.dom_obj.css('top', actual_y);
        // set z-index
        if (typeof this.z_index !== "undefined") {
            this.dom_obj.css('z-index', this.z_index);
        }
        // set image scale mode
        if (typeof this.image_scale_mode !== "undefined") {
            this.dom_obj.css('background-size', this.image_scale_mode);
        }
        
    };

    // add position
    this.add_state = function (x_percent, x_delta, y_percent, y_delta, alpha) {
        this.states.push({'x_percent': x_percent,
                             'x_delta': x_delta,
                             'y_percent': y_percent,
                             'y_delta': y_delta,
                             'alpha': alpha});
    };
    
    // add optional info (sizes, rotations, etc)
    this.add_optional_info = function (state_id, optional_info) {
        var i;
        for (i in optional_info) {
            this.states[state_id][i] = optional_info[i];
        }
    };
    
    // add size transform
    this.add_size_transform = function (state_id, width_percent, width_delta, height_percent, height_delta) {
        this.add_optional_info(state_id, {'width_percent': width_percent, 'width_delta': width_delta, 'height_percent': height_percent, 'height_delta': height_delta});
    };
    
    // add rotate transform
    this.add_rotate_transform = function (state_id, angle) {
        this.add_optional_info(state_id, {'angle': angle});
    };
    
    // add easing
    this.add_easing = function (state_id, easing) {
        this.add_optional_info(state_id, {'easing': easing});
    };
    
    // move and scale
    this.perform_animation = function (target, duration) {
        // store state
        this.current_x_percent = target.x_percent;
        this.current_x_delta = target.x_delta;
        this.current_y_percent = target.y_percent;
        this.current_y_delta = target.y_delta;
        // size
        if (typeof target.width_percent !== "undefined") {
            this.width_percent = target.width_percent;
            this.width_delta = target.width_delta;
            this.height_percent = target.height_percent;
            this.height_delta = target.height_delta;
        }
        // rotate
        if (typeof target.angle !== "undefined") {
            this.angle = target.angle;
        }
        // check if optional data exist
        var target_size = {}, target_angle, easing;
        // check size
        if (typeof target.width_percent !== "undefined") {
            target_size.width = this.meta.width * target.width_percent / 100 + target.width_delta;
            target_size.height = this.meta.height * target.height_percent / 100 + target.height_delta;
        } else {
            target_size.width = this.width;
            target_size.height = this.height;
        }
        // check rotate
        if (typeof target.angle !== "undefined") {
            target_angle = target.angle;
        } else {
            target_angle = 0;
        }
        // check easing
        if (typeof target.easing !== "undefined") {
            easing = target.easing;
        } else {
            easing = "swing";
        }
        // calc correct position
        var destination_x = this.meta.width * (target.x_percent / 100) - target_size.width / 2 + target.x_delta;
        var destination_y = this.meta.height * (target.y_percent / 100) - target_size.height / 2 + target.y_delta;
        // perform with animation
        if (duration !== undefined || duration > 0) {
            this.dom_obj.animate({
                'left' : destination_x,
                'top' : destination_y,
                'width' : target_size.width,
                'height' : target_size.height,
                'opacity' : target.alpha,
                'rotate': target_angle
            }, {duration: duration,
                easing: easing,
                complete: function () {}
                });
        } else {
            // perform without animation
            this.dom_obj.css("left", destination_x);
            this.dom_obj.css("top", destination_y);
        }
    };
    
    // move to a state
    this.moveToState = function (state, duration) {
        this.state = state;
        // update state logger
        var the_state = this.states[state];
        // perform movement
        this.perform_animation(this.states[state], duration);
    };
    
    // exit
    this.exit = function (duration) {
        // determine destination
        var destination;
        
        if (typeof this.default_exit_location !== 'undefined') {
            destination = this.default_exit_location;
        } else {
            destination = 0;
        }
        // perform
        this.moveToState(destination, duration);
    };
}