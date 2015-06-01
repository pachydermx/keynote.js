// page is a status of an array of objects
function page(name, manager) {
    this.name = name;
    this.manager = manager;
    this.objects = [];
    this.timers = [];
    
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
            the_object.moveToPosition(the_object.current_x_percent, the_object.current_x_delta, the_object.current_y_percent, the_object.current_y_delta, the_object.current_alpha);
        }
    };
    
    // play page
    this.play = function () {
        var i;
        for (i in this.objects) {
            var the_object = this.objects[i];
            this.timers.push(setTimeout(function () {
                the_object.object.moveToState(the_object.state, the_object.duration);
            }, the_object.interval));
        }
    };
}