var home = {
	init: function() {
		// initialized all slider in home page
		home.sliderInitialized();

		// for footer copyright year
		home.getYear();
	},

	sliderInitialized: function() {
		var nextSlider = '<div class="next-slider slick-arrow">';
				nextSlider += '<span class="next-holder">';
					nextSlider += '<span class="img-next-slide"></span>';
					nextSlider += '<i class="fa fa-chevron-right"></i>';
				nextSlider += '</span>';
			nextSlider += '</div>';

		var prevSlider = '<div class="previous-slider slick-arrow">';
				prevSlider += '<span class="prev-holder">';
					prevSlider += '<i class="fa fa-chevron-left"></i>';
					prevSlider += '<span class="img-prev-slide"></span>';
				prevSlider += '</span>';
			prevSlider += '</div>';

		$('.slides-container').on('init', function(event, slick) {
			home.setNextPrevImageArrow();
		}).slick({
		  	dots: false,
		  	infinite: true,
		  	speed: 300,
		  	slidesToShow: 1,
		  	adaptiveHeight: false,
		  	nextArrow: nextSlider,
			prevArrow: prevSlider
		}).on('afterChange', function(event, slick, currentSlide, nextSlide){
		    home.setNextPrevImageArrow();
		});

		nextSlider = '';
		nextSlider = '<div class="next-slider slick-arrow">';
			nextSlider += '<i class="fa fa-chevron-right"></i>';
		nextSlider += '</div>';

		prevSlider = '';
		prevSlider = '<div class="previous-slider slick-arrow">';
			prevSlider += '<i class="fa fa-chevron-left"></i>';
		prevSlider += '</div>';

		$('.project-slides').slick({
			slidesToShow: 2.5,
  			slidesToScroll: 1,
  			infinite: false,
  			dots: false,
  			nextArrow: nextSlider,
  			prevArrow: prevSlider
		});
	},

	setNextPrevImageArrow: function() {
		// get previous slides
		var prevImgSrc = $('.slick-active').prev().find('img').attr('src');
	    var imgPrev = '<img src="' + prevImgSrc + '" alt="Lorem Ipsum" />';
	    $('.img-prev-slide').html(imgPrev);

	    // get next slides
	    var nextImgSrc = $('.slick-active').next().find('img').attr('src');
	    var imgNext = '<img src="' + nextImgSrc + '" alt="Lorem Ipsum" />';
	    $('.img-next-slide').html(imgNext);
	},

	getYear: function() {
		var year = new Date().getFullYear();
		$('.copyright-year').html(year);
	}
};