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
        inspector.refresh_page_list();
    });
    
    $("#new_text_obj").click(function(){
        preview.create_obj();
        inspector.refresh_object_list();
    });
    
    $("#new_state").click(function(){
        preview.create_state();
    });
    
    $("#object_selector").change(function () {
        var index = $(this).val();
        inspector.select_page_object_item(index);
    });
    
    // inspector panel
    $("#confirm_object_changes").click(function (){
        inspector.confirm_object_change();
    });
    
    $("#confirm_state_changes").click(function (){
        inspector.confirm_state_change();
    });
    
    $("#confirm_page_changes").click(function () {
        inspector.confirm_page_change();
    });
    
    $("#confirm_page_state_changes").click(function () {
        inspector.confirm_page_state_change();
    });
    
    
});

// init inspector
function preview_loaded () {
    inspector = new editor_inspector(preview.manager);
    inspector.enable_editor(preview.objects);
    
    // prepare preview env
    preview.create_page();
    inspector.refresh_page_list();
}

