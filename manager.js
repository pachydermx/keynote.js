// manager controls pages
function manager() {
    this.pages = [];
    
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
}