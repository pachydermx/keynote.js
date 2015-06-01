// object is basic type of component
function object(id, content, meta) {
    // properties
    this.id = id;
    this.content = content;
    this.positions = [];
    this.meta = meta;
    var dom_obj, width, height, current_x_percent, current_x_delta, current_y_percent, current_y_delta, state, current_alpha;
    
    // init object
    this.init = function (position) {
        $(position).append(getDiv('obj_' + id, 'object', content));
        // get info
        this.dom_obj = $("#obj_" + id);
        this.width = this.dom_obj.width();
        this.height = this.dom_obj.height();
    };

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
        // update state logger
        var the_state = this.positions[state];
        // perform movement
        this.moveToPosition(the_state.x_percent, the_state.x_delta, the_state.y_percent, the_state.y_delta, the_state.alpha, duration);
    };
}