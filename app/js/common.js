$(function() {

	// Custom JS
	$(".hamburger").click(function() {
		$(this).addClass("is-active");
		// $(this).removeClass("is-active");
	});  
	//Owl-carousel fotos
	$(".fotos").owlCarousel({
		autoplay: true,
		autoplayTimeout: 4000,
		loop: true,
		smartSpeed: 700,
		margin: 0,
		items: 5,
		responsiveClass: true,
		responsive: {
			0: {
				items: 3
			},
			505: {
				items: 3
			},
			768: {
				items: 4
			},
			992: {
				items: 5
			},
			1200: {
				items: 5
			},
		}
	});
});
