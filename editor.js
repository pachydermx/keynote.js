var preview, preview_body, inspector;

$(document).ready(function () {
    // prepare env
    preview = document.getElementById("preview").contentWindow;
    preview_body = $("#preview").contents().find("body");
    
    // set ui
    // tool bar
    $(".uibutton").button();
    //$(".uiselect").selectmenu({width: 100});
    
    // control panel
    // panels
    $(".optional.panel").accordion({ 
        collapsible: true,
        active: false,
        activate: function (e, ui) {
            console.log(this);
            if (ui.newHeader.length > 0){
                // opening
                $(this).find(".enabler").prop("checked", true);
                console.log("open");
            } else {
                // collapsing
                $(this).find(".enabler").prop("checked", false);
                console.log(this);
            }
        }
    });
    // overall (END)
    $("#inspector_frame").tabs();
    
    // assign actions
    $("#new_page").click(function(){
        preview.create_page();
        inspector.refresh_page_list();
    });
    
    $("#new_text_obj").click(function(){
        preview.create_obj();
        inspector.refresh_object_list();
    });
    $("#new_image_obj").click(function(){
        preview.create_img_obj();
        inspector.refresh_object_list();
    });
    
    $("#new_state").click(function(){
        preview.create_state();
        inspector.reload_object_state_selector();
    });
    
    // inspector panel
    // object panel
    $("#confirm_object_changes").click(function (){
        inspector.confirm_object_change();
    });
    
    $("#refresh_object_list").click(function () {
        inspector.refresh_object_list();
    });
    
    $("#alpha_input").change(function () {
        $("#alpha_input_display").val($(this).val());
    });
    $("#alpha_input_display").change(function () {
        $("#alpha_input").val($(this).val());
    });
    
    // state panel
    $("#confirm_state_changes").click(function (){
        inspector.confirm_state_change();
    });
    
    // page panel
    $("#confirm_page_changes").click(function () {
        inspector.confirm_page_change();
    });
    
    $("#confirm_page_state_changes").click(function () {
        inspector.confirm_page_state_change();
    });
    
    $("#confirm_page_state_insert").click(function () {
        inspector.insert_page_state();
    });
    
    // auto load state list
    $("#object_selector").change(function () {
        inspector.reload_object_state_selector();
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

