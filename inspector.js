// inspector is debugger of a page
function inspector(manager) {
    this.manager = manager;
    var dom_obj, page_viewer, object_viewer, moving;
    
    // init inspector window
    this.enable = function () {
        // basic frame
        $("body").append(getDiv('inspector', 'inspector_box inpector_frame', ''));
        this.dom_obj = $("#inspector");
        this.dom_obj.mousedown(function () {
            this.moving = true;
        });
        this.dom_obj.mouseup(function () {
            this.moveing = false;
        });
        this.dom_obj.mousemove(function (e) {
            this.css('top', e.pageY);
            this.css('left', e.pageX);
        });
        // title
        this.dom_obj.append("<div class='inpector_frame inspector_title'><label>Inspector</label></div>");
        // page viewer
        this.dom_obj.append(getDiv('page_viewer', 'inspector_frame', ''));
        this.page_viewer = $("#page_viewer");
        this.refresh_page_viewer();
        // object viewer
    };
    
    // refresh page list
    this.refresh_page_viewer = function () {
        // print page list
        var i, the_page;
        for (i in this.manager.pages) {
            the_page = this.manager.pages[i];
            this.page_viewer.append("<il>" + the_page.name + "</il>");
        }
    };
    
    // movable inspector
    
}