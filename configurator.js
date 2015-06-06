// configurator creates objects, pages automaticly according to given data
function configurator(objects, pages) {
    this.objects = objects;
    this.pages = pages;
}

function create_page() {
    pages.push(new page("Untitled", manager));
    manager.add(pages[pages.length - 1]);
}

function create_obj() {
    objects.push(new object("Untitled"+objects.length, meta));
    objects[objects.length - 1].add_state(50, 0, 50, 0, 1);
    pages[pages.length - 1].add(objects[objects.length - 1], 0, 1000, 1000);
    objects[objects.length-1].init("body", "<div>Text</div>");
}

function create_state() {
    objects[objects.length - 1].add_state(50, 0, 50, 0, 1);
    pages[pages.length - 1].add(objects[objects.length - 1], 0, 1000, 1000);
}
    