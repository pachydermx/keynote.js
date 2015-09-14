// slider
function slider(manager){
	this.manager = manager;
	this.pages_id = [];
	this.current_page_id = undefined;
	this.playing = false;
}

// add slider page
slider.prototype.add = function (page_id){
	this.pages_id.push(page_id);
};

// start slider
slider.prototype.start = function () {
	if (this.pages_id.length <= 0){
		console.log("ERROR: No page in slider");
		return false;
	} else {
		// init properties
		this.playing = true;
		this.current_page_id = 0;
		this.manager.goto_page(this.pages_id[this.current_page_id]);
		// set callbacks
		for (var i in this.pages_id){
			var the_page = this.manager.pages[this.pages_id[i]];
			// assign callbacks
			var that = this;
			the_page.add_callback("animation_complete", function(){
				that.next();
			});
		}
		return true;
	}
};

// next slider
slider.prototype.next = function () {
	if (this.playing) {
		// set next id
		if (this.current_page_id < this.pages_id.length - 1) {
			this.current_page_id++;
		} else {
			this.current_page_id = 0;
		}
		// perform	
		this.manager.goto_page(this.pages_id[this.current_page_id]);
		return true;
	} else {
		console.log("Warning: Slider is not playing");
		return false;
	}
};

// stop slider
slider.prototype.stop = function () {
	// reset properties
	this.playing = false;
	this.current_page_id = undefined;
	// clear callbacks
	for (var i in this.pages_id){
		var the_page = this.manager.pages[this.pages_id[i]];
		// delete callbacks
		delete the_page.callbacks.animation_complete;
	}
	return true;
};