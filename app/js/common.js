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
		items: 5,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			505: {
				items: 2
			},
			768: {
				items: 3
			},
			992: {
				items: 4
			},
			1200: {
				items: 5
			},
		}
	});
});
