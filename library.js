// HTML elements
function getDiv(the_id, the_class, content) {
    return getDOM('div', the_id, the_class, content);
}

function getUl(the_id, the_class, content) {
    return getDOM('ul', the_id, the_class, content);
}

function getLabel(the_id, the_class, content) {
    return getDOM('label', the_id, the_class, content);
}

function getDOM(type, the_id, the_class, content) {
    return '<' + type + ' id="' + the_id + '" class="' + the_class + '">' + content + '</' + type +'>';
}
    