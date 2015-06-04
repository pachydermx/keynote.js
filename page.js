// page is a status of an array of objects
function page(name, manager) {
    this.name = name;
    this.manager = manager;
    this.objects = [];
    this.timers = [];
    this.default_duration = 1000;
    
    // add object to page
    this.add = function (obj, state, interval, duration) {
        this.objects.push({'object': obj,
                           'state': state,
                           'interval': interval,
                          'duration': duration});
    };
    
    // reset positions
    this.refresh = function () {
        var i;
        for (i in this.objects) {
            var the_object = this.objects[i].object;
            the_object.refresh();
        }
    };
    
    // play page
    this.play = function () {
        var i;
        for (i in this.objects) {
            var the_object = this.objects[i];
            // reset to original state
            if (the_object.object.auto_reset) {
                the_object.object.moveToState(0, 0);
            }
            // perform
            this.timers.push(setTimeout(
                the_object.object.moveToState(the_object.state, the_object.duration)
            , the_object.interval));
        }
    };
    
    // exit page
    this.exit = function (new_page_objects) {
        if (typeof new_page_objects !== 'undefined') {
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
}