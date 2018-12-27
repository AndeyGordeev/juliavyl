var i = 1;
$(document).ready(function() {
	$("div.image").click(function() {
		if (i % 2 != 0){
			$(this).css("width", "100%");
			$(this).css("position", "absolute");
			$(this).css("top", $(this).position() + 50 + "px");
			$(this).css("z-index", "9999");
		}
		else {
			$(this).css("width", "100%");
			$(this).css("position", "relative");
			$(this).css("z-index", "0");
		}
		i = i + 1;
	});
});