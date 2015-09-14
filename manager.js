// manager controls pages
function manager() {
    this.pages = [];
    this.objects = [];
    this.lastPage = undefined;
	this.callbacks = [];
    
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
		// refresh submanagers
		if (typeof this.submanagers[this.lastPage] !== "undefined"){
			this.submanagers[this.lastPage].refresh();
		}
    };
    
	// add callback
	this.add_callback = function (func) {
		this.callbacks.push(func);
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
			// run callbacks
			for (var i in this.callbacks){
				this.callbacks[i](page);
			}
			
			return true;
        } else {
            console.log("Page " + page + " not defined");
			return false;
        }
    };
	
}