$(function() {
	$('.menu-toggle').click(function(){
		$(this).toggleClass('active');
		$('.menu').slideToggle(400);
	});//end adaptive menu
	$('.tabs a').click(function(){
		$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
		$(this).parent().siblings().removeClass('nav-tab__item_active');
		var id = $(this).attr('href');
		$(id).removeClass('hide');
		$(this).parent().addClass('nav-tab__item_active');
		return false
	});//end of gallery

	$('.banner-slider').slick({
		arrows: false,
		dots: true,
		speed: 300,
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 4000,
	});//end of banner slider
	$('.testimonial-slider').slick({
		arrows: false,
		dots: true,
		speed: 300,
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 8000,
	});//end of quote slider
	
});//end of ready

 