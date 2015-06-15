function editor_inspector (manager) {
    this.manager = manager;
    
    // init editor inspector
    this.enable_editor = function (objects) {
        // configure
        this.editor = true;
        // assign $objects
        this.page_list = $("#page_list");
        this.object_viewer_list = $("#object_viewer_list");
        this.object_state_list = $("#object_state_list");
        this.object_info_list = $("#object_info_list");
        this.object_list = $("#object_list");
        this.object_state_select = $("#object_state_select");
        this.objects = objects;
    }
    
    // refresh overall object list (editor)
    this.refresh_object_list = function () {
        // refresh object list
        this.refresh_list(this.object_list, this.objects, "object_list_item_", "object_list_item", "property", "id", this.start_edit_object);
        // refresh object selector
        this.refresh_list($("#object_selector"), this.objects, "", "", "object_select", "id");
    };
    
    // start editing object. 
    // this event occurs after clicking items in object list
    this.start_edit_object = function (e) {
        // get basic information
        var object_id = $(this).attr("id").split('_')[3];
        var the_object = inspector.objects[object_id];
        var object_name = the_object.id;
        // set style
        inspector.highlight_selection("object_list", this);
        
        // print values to form
        // print id
        $("#object_id").val(object_id);
        preview.selected_object_index = object_id;
        // print name into input
        $("#object_name_input").val(object_name);
        // set auto reset
        $("#auto_reset_input").prop("checked", the_object.auto_reset); 
        // set z-index
        if (typeof the_object.z_index !== "undefined"){
            $("#z_index_input").val(the_object.z_index);
        }
        // get code
        $("#object_code_input").text(the_object.dom_obj.html());
        
        // highlight object
        inspector.highlight_object(inspector.objects[object_id]);
        // refresh states list
        inspector.refresh_state_list(object_id);
    };
    
    // refresh object states list (editor)
    this.refresh_state_list = function (object_id) {
        this.refresh_list(this.object_state_list, this.objects[object_id].states, "object_state_list_item_", "object_state_list_item", "index", "State", this.start_edit_state);
    };
    
    // refresh page states list
    this.refresh_page_states_list = function (page_id) {
        this.refresh_list($("#page_state_list"), this.manager.pages[page_id].objects, "page_state_item_", "page_state_item", "state", "id", this.start_edit_page_state);
    };
    
    // refresh page list (editor)
    this.refresh_page_list = function () {
        this.refresh_list(this.page_list, this.manager.pages, "page_list_item_", "page_list_item", "property", "name", this.start_edit_page);
    };
    
    // select an object and show its state list in page inspector
    this.select_page_object_item = function (index) {
        // activate the item
        $("#object_selector [value=" + index + "]").prop("selected", "selected");
        // refresh its state list
        this.refresh_list(this.object_state_select, this.objects[index].states, "", "", "page_state_select", "State");
    }
    
    // start editing page
    // this event occurs after clicking items in page list
    this.start_edit_page = function (e) {
        // gather basic information
        var page_id = $(this).attr("id").split('_')[3];
        var the_page = inspector.manager.pages[page_id];
        // move to selected page
        inspector.manager.goto_page(page_id);
        // set style
        inspector.highlight_selection("page_list", this);
        // print values to form
        $("#page_id").val(page_id);
        // print page name
        $("#page_name_input").val(the_page.name);
        // print states
        inspector.refresh_page_states_list(page_id);
    };
    
    // start editing page state
    // this event occurs after clicking items in states list in page panel
    this.start_edit_page_state = function (e) {
        // gather basic information
        var page_id = $("#page_id").val();
        var the_page = inspector.manager.pages[page_id];
        var state_id = $(this).attr("id").split('_')[3];
        $("#page_state_id").val(state_id);
        var the_state = the_page.objects[state_id];
        // set style
        inspector.highlight_selection("page_state_list", this);
        // set object 
        var object_index = inspector.objects.indexOf(the_state.object);
        inspector.select_page_object_item(object_index);
        // set state
        var object_state_index = the_state.state;
        $("#object_state_select [value=" + object_state_index + "]").prop("selected", "selected");
        // set interval
        var object_interval = the_state.interval;
        $("#object_interval_input").val(object_interval);
        // set duration
        var object_duration = the_state.duration;
        $("#object_duration_input").val(object_duration);
        
    };
    
    // start editing state
    // this event occurs after clicking items in state list
    this.start_edit_state = function (e) {
        // get basic information
        var object_id = $("#object_id").val();
        var the_object = inspector.objects[object_id];
        var state_id = $(this).attr("id").split('_')[4];
        var the_state = the_object.states[state_id];
        // move to current state
        inspector.switch_state(object_id, state_id);
        // set style
        inspector.highlight_selection("object_state_list", this);
        
        // print value to form
        $("#state_id").val(state_id);
        // print position
        $("#x_percent_input").val(the_state.x_percent);
        $("#x_delta_input").val(the_state.x_delta);
        $("#y_percent_input").val(the_state.y_percent);
        $("#y_delta_input").val(the_state.y_delta);
        // print alpha
        $("#alpha_input").val(the_state.alpha);
        // print size
        if (typeof the_state["width_percent"] !== "undefined") {
            // checkbox
            $("#size_enabled_input").prop("checked", true);
            // data
            $("#width_percent_input").val(the_state.width_percent);
            $("#width_delta_input").val(the_state.width_delta);
            $("#height_percent_input").val(the_state.height_percent);
            $("#height_delta_input").val(the_state.height_delta);
        } else {
            $("#size_enabled_input").prop("checked", false);
        }
        // print rotate
        if (typeof the_state.angle !== "undefined") {
            // checkbox
            $("#rotate_enabled_input").prop("checked", true);
            // data
            $("#angle_input").val(the_state.angle);
        } else {
            $("#rotate_enabled_input").prop("checked", false);
        }
        // print easing
        if (typeof the_state.easing !== "undefined") {
            // checkbox
            $("#easing_enabled_input").prop("checked", true);
            $("#easing_input [value=" + the_state.easing +"]").prop("selected", "selected");
        } else {
            $("#easing_enabled_input").prop("checked", false);
        }
    };
    
    // confirm changes on object name
    // this event occurs after clicking confirm button in object panel
    this.confirm_object_change = function (e) {
        // get object id
        var object_id = $("#object_id").val();
        // get new object info
        var new_name = $("#object_name_input").val();
        var new_auto_reset = $("#auto_reset_input").prop("checked")
        var new_z_index = $("#z_index_input").val();
        var new_code = $("#object_code_input").text();
        // assign object info
        this.objects[object_id].id = new_name;
        this.objects[object_id].auto_reset = new_auto_reset;
        if (!isNaN(parseInt($("#z_index_input").val()))){
            this.objects[object_id].set_z_index(parseInt($("#z_index_input").val()));
        }
        this.objects[object_id].set_content($("#object_code_input").val());
        // refresh object list
        this.refresh_object_list();
    };
    
    // confirm changes on state
    // this event occurs after clicking confirm button in state panel
    this.confirm_state_change = function (e) {
        // get basic info
        var object_id = $("#object_id").val();
        var state_id = $("#state_id").val();
        // get new state info
        var new_x_percent = parseInt($("#x_percent_input").val());
        var new_x_delta = parseInt($("#x_delta_input").val());
        var new_y_percent = parseInt($("#y_percent_input").val());
        var new_y_delta = parseInt($("#y_delta_input").val());
        var new_alpha = parseFloat($("#alpha_input").val());
        // assign object info
        // basic info
        var the_state = this.objects[object_id].states[state_id];
        the_state.x_percent = new_x_percent;
        the_state.x_delta = new_x_delta;
        the_state.y_percent = new_y_percent;
        the_state.y_delta = new_y_delta;
        the_state.alpha = new_alpha;
        // size info
        var new_width_percent, new_width_delta, new_height_percent, new_height_delta;
        if ($("#size_enabled_input").prop("checked")){
            new_width_percent = parseInt($("#width_percent_input").val());
            new_width_delta = parseInt($("#width_delta_input").val());
            new_height_percent = parseInt($("#height_percent_input").val());
            new_height_delta = parseInt($("#height_delta_input").val());
        }
        if (!(isNaN(new_width_percent) || isNaN(new_width_delta) || isNaN(new_height_percent) || isNaN(new_height_delta))){
            the_state.width_percent = new_width_percent;
            the_state.width_delta = new_width_delta;
            the_state.height_percent = new_height_percent;
            the_state.height_delta = new_height_delta;
        }
        // rotate info
        var new_angle;
        if ($("#rotate_enabled_input").prop("checked")){
            new_angle = parseInt($("#angle_input").val());
        }
        if (!isNaN(new_angle)){
            the_state.angle = new_angle;
        }
        // easing
        var new_easing;
        if ($("#easing_enabled_input").prop("checked")){
            new_easing = $("#easing_input").val();
            the_state.easing = new_easing;
        }
        // refresh object list
        this.refresh_state_list(object_id);
        // refresh state
        inspector.switch_state(object_id, state_id);
    };
    
    // confirm changes on page
    // this event occurs after clicking confirm button in page panel
    this.confirm_page_change = function (e) {
        // get new info from inputs
        var page_id = parseInt($("#page_id").val());
        var new_name = $("#page_name_input").val();
        // assign new info
        inspector.manager.pages[page_id].name = new_name;
        // refresh list
        inspector.refresh_page_list();
    };
    
    // confirm changes to page state
    this.confirm_page_state_change = function (e) {
        // get basic index
        var page_id = parseInt($("#page_id").val());
        var page_state_id = parseInt($("#page_state_id").val());
        // get new data
        var new_object_index = parseInt($("#object_selector").val());
        var new_object = inspector.objects[new_object_index];
        var new_state = parseInt($("#object_state_select").val());
        var new_interval = parseInt($("#object_interval_input").val());
        var new_duration = parseInt($("#object_duration_input").val());
        console.log(new_object_index, new_object, new_state, new_interval, new_duration);
        // assign data
        var the_state = inspector.manager.pages[page_id].objects[page_state_id];
        the_state.object = new_object;
        the_state.state = new_state
        the_state.interval = new_interval;
        the_state.duration = new_duration;
        // refresh
        inspector.refresh_page_states_list(page_id);
    }
}


editor_inspector.prototype = new inspector();