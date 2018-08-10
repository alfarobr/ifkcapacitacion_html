$(document).ready(function(){
	AOS.init();
	$('.categories .item').matchHeight();
	$("#slider-customers").lightSlider({
		item: 5,
		speed:600,
		auto: true
	});
	$('#carousel-home').carousel({
		interval: 8000
	});	  
});