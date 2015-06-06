var preview, preview_body, inspector;

$(document).ready(function () {
    // prepare env
    preview = document.getElementById("preview").contentWindow;
    preview_body = $("#preview").contents().find("body");
    
    // set ui
    $("#inspector_frame").tabs();
    $(".menu_bar_button").button();
    
    // assign actions
    $("#new_page").click(function(){
        preview.create_page();
        inspector.refresh_page_viewer();
    });
    
    $("#new_text_obj").click(function(){
        preview.create_obj();
        inspector.refresh_object_list();
    });
    
    $("#new_state").click(function(){
        preview.create_state();
        inspector.refresh_state_list(parseInt($("#object_id").val()));
    });
    
    // inspector panel
    $("#confirm_object_changes").click(function (){
        inspector.confirm_object_change();
    });
    
    $("#confirm_state_changes").click(function (){
        inspector.confirm_state_change();
    });
});

// init inspector
function preview_loaded () {
    inspector = new inspector(preview.manager);
    inspector.enable_editor(preview.objects);
}

function refresh_page_list(){
    // clear
    $("#page_list").html("");
    // load items
    var i, the_page;
    for (i in preview.pages){
        the_page = preview.pages[i];
        $("#page_list").append(getLi("page_item_" + i, "page_item", the_page.name));
    }
}

function select_page_list(){
    // get  page id
    var page_id = $(this).attr("id").split('_')[2];
    
    // move to page
    preview.manager.goto_page(page_id);
}