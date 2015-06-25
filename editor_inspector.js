function editor_inspector (manager) {
    this.manager = manager;
    
    /* Part 0 - Initial Function */
    
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
    
    
    
    
    /* Part I - General Library */
    
    // clear form
    // clear value in all input elements, disable these inputs
    this.clear_form = function (selector, disable) {
        $(selector).find("input[type=range]").val(0);
        $(selector).find("input[type=text]").val("");
        $(selector).find("input[type=number]").val("");
        $(selector).find("input[type=checkbox]").prop("checked", false);
        $(selector).find("textarea").text("");
        if (disable) {
            this.set_panel_enable(selector, false);
        }
    }
    
    // enable / disable form
    // enable or disable a form
    this.set_panel_enable = function (selector, enable){
        $(selector).find("input").prop("disabled", !enable);
        $(selector).find("textarea").prop("disabled", !enable);
    }
    
    // show message in state panel
    this.show_message = function (title, message, icon) {
        var target = $("#dialog_window");
        if (typeof icon !== "undefined") {
            var icon = "<span class='ui-icon ui-icon-" + icon + "'></span>";
        } else {
            var icon = "<span class='ui-icon ui-icon-info'></span>";
        }
        target.html(icon + message);
        target.dialog({
            resizable: false,
            modal: true,
            title: title,
            buttons: {
                "OK": function () {
                    $(this).dialog("close");
                }
            }
        });
    };
        
    
    /* Part II - Panel Action */
    
    /* Part II.A Objects Panel */
    
    // refresh overall object list
    this.refresh_object_list = function () {
        // clear objects form
        this.clear_form("#objects_form", true);
        this.clear_form("#state_panel", true);
        // clear selection
        preview.$(".selected_object").removeClass("selected_object");
        // refresh object list
        this.refresh_list(this.object_list, this.objects, "object_list_item_", "object_list_item", "property", "id", this.start_edit_object);
        // refresh object selector
        this.refresh_list($("#object_selector"), this.objects, "", "", "object_select", "id");
        // clear states list
        $("#object_state_list").html("");
        // reload state list
        this.reload_object_state_selector();
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
        // enable edit
        inspector.set_panel_enable("#objects_form", true);
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
        // check if object selected
        if (typeof this.objects[object_id] !== "undefined") {
            // assign object info
            this.objects[object_id].id = new_name;
            this.objects[object_id].auto_reset = new_auto_reset;
            if (!isNaN(parseInt($("#z_index_input").val()))){
                this.objects[object_id].set_z_index(parseInt($("#z_index_input").val()));
            }
            this.objects[object_id].set_content($("#object_code_input").val());
            // refresh object list
            this.refresh_object_list();
        } else {
            // show error
            this.show_message("Error", "Invaild Page", "alert");
        }
    };
    
    // delete a object
    this.delete_object = function (e) {
        // get object id
        var object_id = $("#object_id").val();
        if (typeof this.objects[object_id] !== "undefined") {
            // delete dom obj
            this.objects[object_id].dom_obj.remove();
            // delete item from object list
            this.objects.splice(object_id, 1);
            // refresh object list
            this.refresh_object_list();
        } else {
            // show error
            this.show_message("Error", "Invaild Page", "alert");
        }
        
    };
        
    
    
    /* Part II.B States Panel */
    
    // refresh object states list (editor)
    this.refresh_state_list = function (object_id) {
        if (typeof object_id === "undefined") {
            object_id = $("#object_id").val();
        }
        // reload list
        this.refresh_list(this.object_state_list, this.objects[object_id].states, "object_state_list_item_", "object_state_list_item", "index", "State", this.start_edit_state);
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
        // enable edit
        inspector.set_panel_enable("#state_panel", true);
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
        // error catch
        if (typeof this.objects[object_id].states[state_id] !== "undefined") {
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
        } else {
            // show error
            this.show_message("Error", "Invaild State", "alert");
        }
    };
    
    // delete state
    this.delete_state = function (e) {
        // get basic info
        var object_id = $("#object_id").val();
        var state_id = $("#state_id").val();
        // error catch
        if (typeof this.objects[object_id].states[state_id] !== "undefined") {
            this.objects[object_id].states.splice(state_id, 1);
            // refresh object list
            this.refresh_state_list(object_id);
            // refresh state
            inspector.switch_state(object_id, state_id);
        } else {
            // show error
            this.show_message("Error", "Invaild State", "alert");
        }
    };
        
    
    
    
    /* Part II.C Page Panel (Page List) */
    
    // refresh page list 
    this.refresh_page_list = function () {
        // refresh list
        this.refresh_list(this.page_list, this.manager.pages, "page_list_item_", "page_list_item", "property", "name", this.start_edit_page);
        // reset form
        this.clear_form("#pages_form", true);
    };
    
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
        // enable editing
        inspector.set_panel_enable("#pages_form", true);
    };
    
    // confirm changes on page
    // this event occurs after clicking confirm button in page panel
    this.confirm_page_change = function (e) {
        // get new info from inputs
        var page_id = parseInt($("#page_id").val());
        var new_name = $("#page_name_input").val();
        if (typeof inspector.manager.pages[page_id] !== "undefined") {
            // assign new info
            inspector.manager.pages[page_id].name = new_name;
            // refresh list
            inspector.refresh_page_list();
        } else {
            // show error
            this.show_message("Error", "Invaild Page", "alert");
        }
    };
    
    // override 
    this.highlight_object = function (object) {
        // highlight the object
        preview.$(".selected_object").removeClass("selected_object");
        if (typeof object !== "undefined") {
            object.dom_obj.addClass("selected_object");
        }
    };
    
    
    /* Part II.D Page Panel (Object List) */
    
    // refresh list
    this.refresh_page_states_list = function (page_id) {
        // refresh list
        this.refresh_list($("#page_state_list"), this.manager.pages[page_id].objects, "page_state_item_", "page_state_item", "state", "id", this.start_edit_page_state);
        // clear form
        this.clear_form("#pages_states_form", false);
    };
    
    // start edit
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
        // enable edit
        inspector.set_panel_enable("#pages_states_form", true);
        
    };
    
    // confirm changes
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
        if (typeof inspector.manager.pages[page_id] !== "undefined") {
            if (typeof inspector.manager.pages[page_id].objects[page_state_id] !== "undefined") {
                // assign data
                var the_state = inspector.manager.pages[page_id].objects[page_state_id];
                the_state.object = new_object;
                the_state.state = new_state
                the_state.interval = new_interval;
                the_state.duration = new_duration;
                // refresh
                inspector.refresh_page_states_list(page_id);
                // reset form
                inspector.clear_form("#pages_states_form", true);
            } else {
                // show error
                this.show_message("Error", "Invaild State", "alert");
            }
        } else {
            // show error
            this.show_message("Error", "Invaild Page", "alert");
        }
            
    }
    
    // insert object
    this.insert_page_state = function () {
        // get basic index
        var page_id = parseInt($("#page_id").val());
        // get new data
        var new_object_index = parseInt($("#object_selector").val());
        var new_object = inspector.objects[new_object_index];
        var new_state = parseInt($("#object_state_select").val());
        var new_interval = parseInt($("#object_interval_input").val());
        var new_duration = parseInt($("#object_duration_input").val());
        // assign data
        inspector.manager.pages[page_id].add(new_object, new_state, new_interval, new_duration);
        // refresh
        inspector.refresh_page_states_list(page_id);
        // reset form
        inspector.clear_form("#pages_states_form", true);
    }
    
    // select item in object selector
    this.select_page_object_item = function (index) {
        // activate the item
        $("#object_selector [value=" + index + "]").prop("selected", "selected");
        // refresh its state list
        try {
            this.refresh_list(this.object_state_select, this.objects[index].states, "", "", "page_state_select", "State");
        } catch (e) {}
    }
    
    // reload selector
    this.reload_object_state_selector = function () {
        var index = $("#object_selector").val();
        this.select_page_object_item(index);
    }
}


// set editor_inspector as a sub class of inspector
editor_inspector.prototype = new inspector();