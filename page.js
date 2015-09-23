// page is a status of an array of objects
function page(name, manager) {
    this.name = name;
    this.manager = manager;
    this.objects = [];
    this.timers = [];
	this.callbacks = {};
	this.counter = 0;
    this.default_duration = 1000;
}
    
// add object to page
page.prototype.add = function (obj, state, interval, duration) {
	this.objects.push({'object': obj,
					   'state': state,
					   'interval': interval,
					  'duration': duration});
};

// reset positions
page.prototype.refresh = function () {
	var i;
	for (i in this.objects) {
		var the_object = this.objects[i].object;
		the_object.refresh();
	}
};

// play page
page.prototype.play = function () {
	var i;
	for (i in this.objects) {
		var the_object = this.objects[i];
		// reset to original state
		if (the_object.object.auto_reset) {
			the_object.object.moveToState(0, 0);
		}
		// perform
		this.fire(the_object);
	}
};

// create timeout event
page.prototype.fire = function (obj){
	// set delegate
	obj.object.delegate = this;
	// set counter
	this.counter++;
	// set timer 
	this.timers.push(setTimeout(function(){
		obj.object.moveToState(obj.state, obj.duration);
	}, obj.interval));
};

// clear timeout events
page.prototype.clear = function(){
	// reset delegates
	for (i in this.objects) {
		var the_object = this.objects[i];
		// reset its delegate
		the_object.object.delegate = undefined;
	}
	// clear timers
	while(this.timers.length > 0){
		clearTimeout(this.timers.pop());
	}
	// reset counter
	this.counter = 0;
};

// exit page
page.prototype.exit = function (new_page_objects) {
	if (typeof new_page_objects !== 'undefined') {
		// clear timers
		this.clear();
		// substract objects list
		var objects = [], to_remove = [], i;
		for (i in this.objects) {
			objects.push(this.objects[i].object);
		}
		for (i in new_page_objects) {
			to_remove.push(new_page_objects[i].object);
		}
		// substract elements in last page from current page
		var exit_objects = [], i, the_object;
		exit_objects = $.grep(objects, function(value) {
			return $.inArray(value, to_remove) < 0;
		});
		// exit elements
		for (i in exit_objects) {
			the_object = exit_objects[i];
			the_object.exit(this.default_duration);
		}
	}
};

// receive complete call from objects
page.prototype.object_complete = function (obj){
	// set counter
	this.counter--;
	// check if empty
	if (this.counter == 0 && typeof this.callbacks.animation_complete !== "undefined"){
		this.callbacks.animation_complete();
	}
};

// add callback
page.prototype.add_callback = function (function_flag, func){
	if (function_flag === "animation_complete"){
		this.callbacks.animation_complete = func;
	} else {
		console.log("ERROR: Unknown function flag");
	}
};