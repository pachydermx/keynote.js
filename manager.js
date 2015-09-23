// manager controls pages
function manager() {
    this.pages = [];
	// for discrete objects
    this.objects = [];
    this.lastPage = undefined;
	/* flags
		gotopage - fires after entering a page
		modswitch - fires after switching a mod
	*/
	this.callbacks = [];
	// mod names
	this.mods = [];
	this.mod = undefined;
    
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
    
	// add callback
	this.add_callback = function (flag, func) {
		this.callbacks.push({"flag" : flag,
							 "func" : func});
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
				if (this.callbacks[i].flag == "gotopage") {
					this.callbacks[i].func(page);
				}
			}
			
			return true;
        } else {
            console.log("Page " + page + " not defined");
			return false;
        }
    };
	
	// switch mod
	this.mod = function(id) {
		// change all objects' mod value
		// object inside pages
		for (var i in this.pages) {
			for (var j in this.pages[i].objects) {
				var the_object = this.pages[i].objects[j].object;
				the_object.mod = id;
				//console.log("set "+the_object.id+" mod to "+the_object.id);
			}
		}
		// discrete objects
		for (var i in this.objects) {
			var the_object = this.objects[i];
			the_object.mod = id;
		}
		// refresh
		this.refresh();
		
		// run callbacks
		for (var i in this.callbacks){
			if (this.callbacks[i].flag == "modswitch") {
				this.callbacks[i].func(id);
			}
		}
	};
}