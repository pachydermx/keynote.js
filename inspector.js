// inspector is debugger of a page
function inspector(manager) {
    this.manager = manager;
    var dom_obj, object_list, page_viewer, page_viewer_list, object_viewer, page_list, object_viewer_list, object_state_list, object_info_list, moving, editor, objects;
    
    // init inspector window
    this.enable = function (selector) {
        // configure
        this.editor = false;
        // basic frame
        $(selector).append(getDiv('inspector', 'inspector_box inpector_frame', ''));
        this.dom_obj = $("#inspector");
        this.dom_obj.draggable();
        // title
        this.dom_obj.append("<div class='inspector_frame inspector_title'><label>Inspector</label></div>");
        // page viewer
        this.dom_obj.append(getLabel('', 'section_title', 'Pages'));
        this.dom_obj.append(getDiv('page_viewer', 'inspector_frame', ''));
        this.page_viewer = $("#page_viewer");
        this.page_viewer.append(getUl('page_viewer_list', 'inspector_frame', ''));
        this.page_viewer_list = $("#page_viewer_list");
        this.refresh_page_viewer();
        // object viewer
        this.dom_obj.append(getLabel('', 'section_title', 'Objects'));
        this.dom_obj.append(getUl('object_viewer_list', 'inspector_frame', ''));
        this.object_viewer_list = $("#object_viewer_list");
        // object location viewer
        this.dom_obj.append(getLabel('', 'section_title', 'Positions'));
        this.dom_obj.append(getUl('object_state_list', 'inspector_frame', ''));
        this.object_state_list = $("#object_state_list");
        // object info viewer
        this.dom_obj.append(getLabel('', 'section_title', 'Info'));
        this.dom_obj.append(getUl('object_info_list', 'inspector_frame', ''));
        this.object_info_list = $("#object_info_list");
    };

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
    
    // refresh page list
    this.refresh_page_viewer = function () {
        // print page list
        var i, the_page;
        for (i in this.manager.pages) {
            // create dom element
            the_page = this.manager.pages[i];
            this.page_viewer_list.append(getLi("page_viewer_list_item_" + i, "page_viewer_list_item", the_page.name));
            // assign action
            $("#page_viewer_list_item_" + i).click(this.page_viewer_list_click_action);
        }
    };
    
    // refresh object list
    this.refresh_object_viewer_list = function (page) {
        // reset list
        this.object_viewer_list.html("");
        this.object_state_list.html("");
        this.object_info_list.html("");
        $(".object").removeClass("selected_object");
        // print object list
        var i, the_object;
        for (i in this.manager.pages[page].objects) {
            the_object = this.manager.pages[page].objects[i].object;
            this.object_viewer_list.append(getLi("object_viewer_list_item_" + i, "object_viewer_list_item", the_object.id));
            // assign action
            $("#object_viewer_list_item_" + i).click(this.object_viewer_list_click_action);
        }
    };
    
    // refresh object info
    this.refresh_object_info = function (object) {
        // reset list
        this.object_state_list.html("");
        this.object_info_list.html("");
        // print position list
        var i, the_state;
        for (i in object.states) {
            the_state = object.states[i];
            // normal info
            var display = "(" + the_state.x_percent + "%+" + the_state.x_delta + "px, " + the_state.y_percent + "%+" + the_state.y_delta + "px)";
            // additional info
            // size info
            if (typeof the_state.width_percent !== "undefined") {
                display += "\n Size: (" + the_state.width_percent + "%+" + the_state.width_delta + "px, " + the_state.height_percent + "%+" + the_state.height_delta + "px)";
            }
            // rotate info
            if (typeof the_state.angle !== "undefined") {
                display += "\n Angle: " + the_state.angle + "deg";
            }
            // easing info
            if (typeof the_state.easing !== "undefined") {
                display += "\n Easing: " + the_state.easing;
            }
            this.object_state_list.append(getLi("object_state_list_item_" + i, "object_state_list_item", display));
        }
        // highlight current position
        $("#object_state_list_item_" + object.state).addClass("selected");
        
        // highlight object
        this.highlight_object(object);
        
        // auto reset
        this.object_info_list.append(getLi("object_info_list_auto_reset", "object_info_list_item", "Auto Reset: " + object.auto_reset));
        
        // image mode
        if (typeof object.image_scale_mode !== "undefined") {
            this.object_info_list.append(getLi("object_info_list_auto_reset", "object_info_list_item", "Image Mode: " + object.image_scale_mode));
        }
        
        // z-index 
        if (typeof object.z_index !== "undefined") {
            this.object_info_list.append(getLi("object_info_list_auto_reset", "object_info_list_item", "Z-Index: " + object.z_index));
        }
        
        // Size
        if (typeof object.width_percent !== "undefined") {
            var width_display = object.width_percent + "%+" + object.width_delta + "px";
            var height_display = object.height_percent + "%+" + object.height_delta + "px";
            this.object_info_list.append(getLi("object_info_list_auto_reset", "object_info_list_item", "Width: " + width_display));
            this.object_info_list.append(getLi("object_info_list_auto_reset", "object_info_list_item", "Height: " + height_display));
        }
    };
    
    // viewer_list_click_action
    // var inspector must exist
    this.page_viewer_list_click_action = function () {
        var page_id = $(this).attr("id").split('_')[4];
        // move to page
        manager.goto_page(page_id);
        // set style
        $("#page_viewer_list li").removeClass("selected");
        $(this).addClass("selected");

        // refresh object list
        inspector.refresh_object_viewer_list(page_id);
    };
    
    // object viewer click action
    this.object_viewer_list_click_action = function () {
        var object_id = $(this).attr("id").split('_')[4];
        // set style
        $("#object_viewer_list li").removeClass("selected");
        $(this).addClass("selected");
        // show positions
        inspector.refresh_object_info(inspector.manager.pages[inspector.manager.lastPage].objects[object_id].object);
    };
    
    // general functions
    
    // highlight object
    this.highlight_object = function (object) {
        // highlight the object
        $(".object").removeClass("selected_object");
        object.dom_obj.addClass("selected_object");
    };
    
    // highlight selection
    this.highlight_selection = function (list_id, the_item) {
        $("#" + list_id +" li").removeClass("selected");
        $(the_item).addClass("selected");
    };
        
    // generalized list refresh function
    // object is jquery object of the list
    // list is data source
    // id_prefix, list_class is the id, class of li element to print
    // title is the index of printing
    // click function is the action after clicking the item
    this.refresh_list = function (object, list, id_prefix, list_class, title_type, title, click_function) {
        // reset list
        object.html("");
        // print object list
        var i, the_item, the_title;
        for (i in list) {
            the_item = list[i];
            if (title_type == "property" || title_type == "object_select"){
                the_title = the_item[title];
            } else if (title_type == "index" || title_type == "page_state_select"){
                the_title = title + " " + i;
            } else if (title_type == "state" || title_type == "state_select"){
                the_title = the_item.object[title] + " - " + the_item.state;
            } else {
                the_title = "Unknown " + i;
            }
            if (title_type == "object_select" || title_type == "page_state_select") {
                object.append(getOption(i, the_title));
            } else {
                object.append(getLi(id_prefix + i, list_class, the_title));
                // assign action
                $("#" + id_prefix + i).click(click_function);
            }
        }
    };
    
    // switch object state
    this.switch_state = function (object_id, state_id) {
        if ($("#animation_enabled_input").prop("checked")) {
            this.objects[object_id].moveToState(state_id, 1000);
        } else {
            this.objects[object_id].moveToState(state_id);
        }
    };
    
    // print object list
    this.get_object_list = function (prefix, middle, profix) {
        var i, the_item, output = "";
        for (i in this.objects) {
            the_item = this.objects[i];
            output = prefix + i + middle + the_item.id + profix;
        }
    };
        
    
    
    
    // functions above work with editor
    
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
        inspector.refresh_list($("#page_state_list"), the_page.objects, "page_state_item_", "page_state_item", "state", "id", inspector.start_edit_page_state);
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
        // set object name
        var object_index = inspector.objects.indexOf(the_state.object);
        inspector.select_page_object_item(object_index);
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
}