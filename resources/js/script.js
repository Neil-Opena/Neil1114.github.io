
//HEADER BUTTONS

$('header .btn-full').mouseenter(function(){
	$('header .btn-full i').removeClass('fa-square-o',100,'swing');
	$('header .btn-full i').addClass('fa-check-square-o' ,100, "swing");
});

$('header .btn-full').mouseleave(function(){
	$('header .btn-full i').addClass('fa-square-o',100,'swing');
	$('header .btn-full i').removeClass('fa-check-square-o',100,'swing');
});

