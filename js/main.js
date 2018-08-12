$(document).ready(function(){
	//AOS.init();
	$('#carousel-home').carousel({
		interval: 8000
	});

	$('.categories .item, .page-category .item').matchHeight();

	$("#slider-customers").lightSlider({
		item: 5,
		speed: 800,
		auto: true,
		loop: true,
		pauseOnHover: true,
		responsive : [
			{
				breakpoint:992,
				settings: {
					item:3,
					slideMove:1,
					slideMargin:6,
				  }
			},
			{
				breakpoint:768,
				settings: {
					item:2,
					slideMove:1
				  }
			},
			{
				breakpoint:576,
				settings: {
					item:1,
					slideMove:1
				  }
			}
		]
	});

	$("#slider-business-related").lightSlider({
		item: 4,
		speed: 800,
		auto: true,
		loop: true,
		dots: false,
		pauseOnHover: true,
		pager: true,
		responsive : [
			{
				breakpoint:992,
				settings: {
					item:3,
					slideMove:1,
					slideMargin:6,
				  }
			},
			{
				breakpoint:768,
				settings: {
					item:2,
					slideMove:1
				  }
			},
			{
				breakpoint:576,
				settings: {
					item:1,
					slideMove:1
				  }
			}
		]
	});

	$("#slider-logo-course").lightSlider({
		item: 1,
		speed: 800,
		auto: true,
		loop: true,
		dots: false,
		pauseOnHover: true,
		pager: true,
	});

});