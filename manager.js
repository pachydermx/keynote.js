// manager controls pages
function manager() {
    this.pages = [];
    this.objects = [];
    var lastPage;
    
    // add page to manager
    this.add = function (page) {
        this.pages.push(page);
    };
    
    // reset positions of all pages
    this.refresh = function () {
        // refresh objects which had already added to a page
        var i;
        for (i in this.pages) {
            var the_page = this.pages[i];
            the_page.refresh();
        }
        // refresh all objects in manager
        for (i in this.objects) {
            this.objects[i].refresh();
        }
    };
    
    // go to page
    this.goto_page = function(page) {
        if (typeof this.pages[page] !== "undefined") {
            // exit from last page
            if (typeof this.lastPage !== "undefined") {
                this.pages[this.lastPage].exit(this.pages[page].objects);
            }
            // enter a page
            this.pages[page].play();
            // remember last page
            this.lastPage = page;
        } else {
            console.log("Page " + page + " not defined");
        }
    };
}