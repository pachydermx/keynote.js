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
page.prototype.play = function (type) {
	switch (type) {
		case "rollin":
			this.rollin(-100);
			break;
		default:
			this.normal_play();
	}
}


page.prototype.normal_play = function () {
	var i;
	for (i in this.objects) {
		var the_object = this.objects[i];
		/*
		// reset to original state
		if (the_object.object.auto_reset) {
			the_object.delegate = undefined;
			the_object.object.moveToState(0, 0);
		}
		*/
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

// roll 
page.prototype.rollin = function(delta){
	var object_list = this.getFinalState();
	// play
	for (var i in object_list){
		// get ready
		var obj = {};
		obj.object = object_list[i].object;
		obj.state = object_list[i].state;
		obj.duration = 1000;
		obj.interval = 0;
		obj.object.getReady(obj.object.states[obj.state], delta);
		
		// play
		this.fire(obj);
	}
}

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
page.prototype.exit = function (new_page_objects, type){
	switch (type) {
		case "rollout":
			this.rollout(new_page_objects);
			break;
		default:
			this.normal_exit(new_page_objects);
	}
}

page.prototype.normal_exit = function (new_page_objects) {
	if (typeof new_page_objects !== 'undefined') {
		// clear timers
		this.clear();
		// get exit object list
		var exit_objects = this.getAbandonedObjectList(new_page_objects);
		// exit elements
		for (i in exit_objects) {
			the_object = exit_objects[i];
			the_object.exit(this.default_duration);
		}
	}
};

page.prototype.rollout = function (new_page_objects) {
	if (typeof new_page_objects !== 'undefined') {
		// clear timers
		this.clear();
		// get exit object list
		var exit_objects = this.getAbandonedObjectList(new_page_objects);
		// exit elements
		for (i in exit_objects) {
			the_object = exit_objects[i];
			the_object.exit(this.default_duration, the_object.getRolloutTarget(the_object.states[the_object.state], 100));
		}
	}
};

/* Utility */
page.prototype.getFinalState = function () {
	var visited = [];
	for (var i in this.objects){
		var index = this.objIndexOf(visited, this.objects[i].object);
		// if not exist, push
		if (index < 0){
			visited.push(this.objects[i]);
		// else replace
		} else {
			visited[index] = this.objects[i];
		}
	}
	return visited;
};

page.prototype.objIndexOf = function (list, object) {
	var result = -1;
	for (var i in list){
		if (object == list[i].object){
			result = i;
		}
	}
	return result;
};

page.prototype.getAbandonedObjectList = function (from){
	// substract objects list
	var objects = [], to_remove = [], i;
	for (i in this.objects) {
		objects.push(this.objects[i].object);
	}
	for (i in from) {
		to_remove.push(from[i].object);
	}
	// substract elements in last page from current page
	var exit_objects = [], i, the_object;
	exit_objects = $.grep(objects, function(value) {
		return $.inArray(value, to_remove) < 0;
	});
	return exit_objects;
}

/* Callback */

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
		console.error("ERROR: Unknown function flag");
	}
};