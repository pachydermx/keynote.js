// inspector is debugger of a page
function inspector(manager) {
    this.manager = manager;
    var dom_obj, object_list, page_viewer, page_viewer_list, object_viewer, object_viewer_list, object_state_list, object_info_list, moving, editor, objects;
    
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
        this.page_viewer_list = $("#page_viewer_list");
        this.object_viewer_list = $("#object_viewer_list");
        this.object_state_list = $("#object_state_list");
        this.object_info_list = $("#object_info_list");
        this.object_list = $("#object_list");
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
        // highlight the object
        $(".object").removeClass("selected_object");
        object.dom_obj.addClass("selected_object");
        
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
    
    // refresh overall object list (editor)
    this.refresh_object_list = function () {
        // reset list
        this.object_list.html("");
        // print object list
        var i, the_object;
        for (i in this.objects) {
            the_object = this.objects[i];
            this.object_list.append(getLi("object_list_item_" + i, "object_list_item", the_object.id));
            // assign action
            $("#object_list_item_" + i).click(this.start_edit_object);
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
    
    // start editing object
    this.start_edit_object = function (e) {
        var object_id = $(this).attr("id").split('_')[3];
        var object_name = $(this).text();
        // set style
        $("#object_list li").removeClass("selected");
        $(this).addClass("selected");
        // print name into input
        $("#object_name_input").val(object_name);
    };
}