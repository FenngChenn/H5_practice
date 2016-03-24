$(function(){
	$(window).resize();

})

$(window).resize(function(){
	//首页满屏
	$("#block-firstPage").css("height",$(window).height());
	$('.blockTitle').stop().fadeIn().animate({
		"top":($(window).height() - $('.blockTitle').outerHeight())/2
	},800);
});