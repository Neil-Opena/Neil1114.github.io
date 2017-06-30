
//HEADER BUTTONS
var buttonHeader = $('header .btn-full');
var buttonIcon = $('header .btn-full i');
buttonHeader.mouseenter(function(){
	buttonIcon.removeClass('fa-square-o',100,'swing');
	buttonIcon.addClass('fa-check-square-o' ,100, "swing");
});

buttonHeader.mouseleave(function(){
	buttonIcon.addClass('fa-square-o',100,'swing');
	buttonIcon.removeClass('fa-check-square-o',100,'swing');
});

buttonHeader.click(function(){
	$.scrollify.move("#2");
});



//NAV BUTTONS
$('.js-btn-header').mouseenter(function(){
	$('.js-header').css({
		'color':'inherit',
		'background-color':'#f39c12'
	});
});
$('.js-btn-header').mouseleave(function(){
	$('.js-header').css({
		'color':'transparent',
		'background-color':'transparent'
	});
});
$('.js-btn-about-me').mouseenter(function(){
	$('.js-about-me').css({
		'color':'inherit',
		'background-color':'#f39c12'
	});
});
$('.js-btn-about-me').mouseleave(function(){
	$('.js-about-me').css({
		'color':'transparent',
		'background-color':'transparent'
	});
});
$('.js-btn-education').mouseenter(function(){
	$('.js-education').css({
		'color':'inherit',
		'background-color':'#f39c12'
	});
});
$('.js-btn-education').mouseleave(function(){
	$('.js-education').css({
		'color':'transparent',
		'background-color':'transparent'
	});
});
$('.js-btn-statistics').mouseenter(function(){
	$('.js-statistics').css({
		'color':'inherit',
		'background-color':'#f39c12'
	});
});
$('.js-btn-statistics').mouseleave(function(){
	$('.js-statistics').css({
		'color':'transparent',
		'background-color':'transparent'
	});
});
$('.js-btn-portfolio').mouseenter(function(){
	$('.js-portfolio').css({
		'color':'inherit',
		'background-color':'#f39c12'
	});
});
$('.js-btn-portfolio').mouseleave(function(){
	$('.js-portfolio').css({
		'color':'transparent',
		'background-color':'transparent'
	});
});
$('.js-btn-contact').mouseenter(function(){
	$('.js-contact').css({
		'color':'inherit',
		'background-color':'#f39c12'
	});
});
$('.js-btn-contact').mouseleave(function(){
	$('.js-contact').css({
		'color':'transparent',
		'background-color':'transparent'
	});
});
$('.js-btn-footer').mouseenter(function(){
	$('.js-footer').css({
		'color':'inherit',
		'background-color':'#f39c12'
	});
});
$('.js-btn-footer').mouseleave(function(){
	$('.js-footer').css({
		'color':'transparent',
		'background-color':'transparent'
	});
});

//SCROLLIFY

$(function(){
	$.scrollify({
		section: ".section",
		offset:-20,
		easing:'easeOutCirc',
		scrollSpeed: 900,
	});
});

//FIXME fix buttons and add if statements