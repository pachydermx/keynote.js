// manager controls pages
function manager() {
    this.pages = [];
    var lastPage;
    
    // add page to manager
    this.add = function (page) {
        this.pages.push(page);
    };
    
    // reset positions of all pages
    this.refresh = function () {
        var i;
        for (i in this.pages) {
            var the_page = this.pages[i];
            the_page.refresh();
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