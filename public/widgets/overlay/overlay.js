jQuery(document).ready(function ($) {
    $("#close_overlay").click(function(){
        $("#overlay_BG").css({"display": "none"});
        $("#main_overlay").css({"display": "none"});
    });
    $(".expand_content").on("click", function(){
        var content = $(this).siblings().clone();
        $("#overlay_BG").css({"display": "block"});
        $("#main_overlay").css({"display": "block"});
        $(".overlay_view").children().remove();
        $(".overlay_view").append(content);
    });
});
