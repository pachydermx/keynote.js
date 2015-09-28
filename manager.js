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
	this.locked = false;
	this.jumplist = [];
	this.index;
    
    // add page to manager
    this.add = function (page, isRegular) {
        this.pages.push(page);
		if (isRegular) {
			this.jumplist.push(this.pages.length - 1);
		}
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
			if (this.jumplist.indexOf(this.lastPage) != -1) {
				this.index = this.jumplist.indexOf(this.lastPage);
			}
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
				the_object.dom_obj.attr("class", the_object.default_class + " " + this.mods[id]);
			}
		}
		// discrete objects
		for (var i in this.objects) {
			var the_object = this.objects[i];
			the_object.mod = id;
			the_object.dom_obj.attr("class", the_object.default_class + " " + this.mods[id]);
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
	
	// manual jump
	this.lock = function () {
		if (!this.locked) {
			this.locker = setTimeout(function() {
				this.locked = false;
			}, 3000);
			return true;
		} else {
			return false;
		}
	}
	
	// next/prev
	this.next = function() {
		if (this.index < this.jumplist.length - 2 && this.lock()) {
			this.index++;
			this.goto_page(this.jumplist[this.index]);
		}
	};
	
	this.prev = function () {
		if (this.index > 0 && this.lock()) {
			this.index--;
			this.goto_page(this.jumplist[this.index]);
		}
	};
}