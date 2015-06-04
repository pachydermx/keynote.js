var preview, preview_body;

$(document).ready(function () {
    // prepare env
    preview = document.getElementById("preview").contentWindow;
    preview_body = $("#preview").contents().find("body");
    // assign actions
    $("#new_page").click(function(){
        preview.create_page();
    });
    
    $("#new_obj").click(function(){
        preview.create_obj();
    });
});

