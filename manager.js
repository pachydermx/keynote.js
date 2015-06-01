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
        if (this.pages[page] != undefined) {
            // check objects for exiting
            if (lastPage != undefined) {
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