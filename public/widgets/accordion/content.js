$("div#table_of_content").load("../content.html");
$(document).ready(function(){
    $(function() {
		console.log("Hello world!");
        $("#content").accordion({
            heightStyle: "content",
            collapsible: true
        });
    });
});
