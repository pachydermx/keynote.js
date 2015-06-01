// inspector is debugger of a page
function inspector(manager) {
    this.manager = manager;
    var dom_obj, page_viewer, page_viewer_list, object_viewer, object_viewer_list, object_position_list, object_info_list, moving;
    
    // init inspector window
    this.enable = function () {
        // basic frame
        $("body").append(getDiv('inspector', 'inspector_box inpector_frame', ''));
        this.dom_obj = $("#inspector");
        this.dom_obj.draggable();
        // title
        this.dom_obj.append("<div class='inspector_frame inspector_title'><label>Inspector</label></div>");
        // page viewer
        this.dom_obj.append(getDiv('page_viewer', 'inspector_frame', ''));
        this.page_viewer = $("#page_viewer");
        this.page_viewer.append(getUl('page_viewer_list', 'inspector_frame', ''));
        this.page_viewer_list = $("#page_viewer_list");
        this.refresh_page_viewer();
        // division space
        this.dom_obj.append("<hr>");
        // object viewer
        this.dom_obj.append(getUl('object_viewer_list', 'inspector_frame', ''));
        this.object_viewer_list = $("#object_viewer_list");
        // division space
        this.dom_obj.append("<hr>");
        // object location viewer
        this.dom_obj.append(getUl('object_position_list', 'inspector_frame', ''));
        this.object_position_list = $("#object_position_list");
        // division space
        this.dom_obj.append("<hr>");
        // object info viewer
        this.dom_obj.append(getUl('object_info_list', 'inspector_frame', ''));
        this.object_info_list = $("#object_info_list");
    };
    
    // refresh page list
    this.refresh_page_viewer = function () {
        // print page list
        var i, the_page;
        for (i in this.manager.pages) {
            // create dom element
            the_page = this.manager.pages[i];
            this.page_viewer_list.append(getLi("page_viewer_list_item_"+i, "page_viewer_list_item", the_page.name));
            // assign action
            $("#page_viewer_list_item_"+i).click(this.page_viewer_list_click_action);
        }
    };
    
    // refresh object list
    this.refresh_object_viewer_list = function (page) {
        // reset list
        this.object_viewer_list.html("");
        this.object_position_list.html("");
        this.object_info_list.html("");
        // print object list
        var i, the_object;
        for (i in this.manager.pages[page].objects){
            the_object = this.manager.pages[page].objects[i].object;
            this.object_viewer_list.append(getLi("object_viewer_list_item_" + i, "object_viewer_list_item", the_object.id));
            // assign action
            $("#object_viewer_list_item_"+i).click(this.object_viewer_list_click_action);
        }
    };
    
    // refresh object info
    this.refresh_object_info = function (object) {
        // reset list
        this.object_position_list.html("");
        // print position list
        var i, the_position;
        for (i in object.positions){
            the_position = object.positions[i];
            var display = "(" + the_position.x_percent + "%+" + the_position.x_delta + ", " + the_position.y_percent + "%+" + the_position.y_delta + ")";
            this.object_position_list.append(getLi("object_position_list_item_" + i, "object_position_list_item", display));
        }
        // highlight current position
        $("#object_position_list_item_" + object.state).addClass("selected");
    }
    
    // viewer_list_click_action
    // TODO
    // var inspector must exist
    this.page_viewer_list_click_action = function() {
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
    this.object_viewer_list_click_action = function() {
        var object_id = $(this).attr("id").split('_')[4];
        // set style
        $("#object_viewer_list li").removeClass("selected");
        $(this).addClass("selected");
        // show positions
        inspector.refresh_object_info(inspector.manager.pages[inspector.manager.lastPage].objects[object_id].object);
    };
}