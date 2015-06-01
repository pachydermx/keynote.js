// inspector is debugger of a page
function inspector(manager) {
    this.manager = manager;
    var dom_obj, page_viewer, page_viewer_list, object_viewer, moving;
    
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
        // object viewer
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
            $("#page_viewer_list_item_"+i).click(function () {
                // move to page
                manager.goto_page($(this).attr("id").split('_')[4]);
                // set style
                $("#page_viewer_list li").removeClass("selected");
                $(this).addClass("selected");
            });
        }
    };
    
    // movable inspector
    
}