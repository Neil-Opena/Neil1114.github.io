//SCROLLIFY

$(function(){
	$.scrollify({
		section: ".section",
		easing:'easeOutCirc',
		// scrollSpeed:1200,
	});
});

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

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 700, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

// TYPEIT
$('#type').typeIt({
     strings: 'An aspiring software engineer seeking to change lives, one line of code at a time',
     speed: 60,
     autoStart: false
});

//WAYPOINT
function turnOff(){
	$('.js-btn-header').css({
		'background-color':'##976008;',
	});
	$('.js-btn-about-me').css({
		'background-color':'##976008;',
	});
	$('.js-btn-education').css({
		'background-color':'##976008;',
	});
	$('.js-btn-statistics').css({
		'background-color':'##976008;',
	});
	$('.js-btn-portfolio').css({
		'background-color':'##976008;',
	});
	$('.js-btn-contact').css({
		'background-color':'##976008;',
	});
	$('.js-btn-footer').css({
		'background-color':'##976008;',
	});
}

$('#header').waypoint(function(direction){
	
	$('.js-btn-header').css({
		'background-color':'#f39c12;',
	});
	
},{
	offset:'50%',
});

$('#about-me').waypoint(function(direction){
	if(direction == 'down'){
		turnOff();
	$('.js-btn-about-me').css({
		'background-color':'#f39c12;',
	});
	}else{
		turnOff();
	$('.js-btn-header').css({
		'background-color':'#f39c12;',
	});
}
},{
	offset:'50%',
});

$('#education').waypoint(function(direction){
	if(direction == 'down'){
		turnOff();
	$('.js-btn-education').css({
		'background-color':'#f39c12;',
	});
	}else{
		turnOff();
	$('.js-btn-about-me').css({
		'background-color':'#f39c12;',
	});
}
},{
	offset:'50%',
});

$('#statistics').waypoint(function(direction){
	if(direction == 'down'){
		turnOff();
	$('.js-btn-statistics').css({
		'background-color':'#f39c12;',
	});
	}else{
		turnOff();
	$('.js-btn-education').css({
		'background-color':'#f39c12;',
	});
}
},{
	offset:'50%',
});

$('#portfolio').waypoint(function(direction){
	if(direction == 'down'){
		turnOff();
	$('.js-btn-portfolio').css({
		'background-color':'#f39c12;',
	});
	}else{
		turnOff();
	$('.js-btn-statistics').css({
		'background-color':'#f39c12;',
	});
}
},{
	offset:'50%',
});

$('#contact').waypoint(function(direction){
	if(direction == 'down'){
		turnOff();
	$('.js-btn-contact').css({
		'background-color':'#f39c12;',
	});
	}else{
		turnOff();
	$('.js-btn-portfolio').css({
		'background-color':'#f39c12;',
	});
}
},{
	offset:'50%',
});

$('#footer').waypoint(function(direction){
	if(direction == 'down'){
		turnOff();
	$('.js-btn-footer').css({
		'background-color':'#f39c12;',
	});
	}else{
		turnOff();
	$('.js-btn-contact').css({
		'background-color':'#f39c12;',
	});
}
},{
	offset:'50%',
});


