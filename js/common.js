$(document).ready(function(){

	$(".popup").magnificPopup({type: "image"})
	$(".popup_c").magnificPopup()

	//owl
	$(".owl-carousel").owlCarousel({
		loop: true,
		responsive: {
			0 : {
				items: 1,
				nav: true
			}
		},
		navText: ""
	});

	// на больших экаранах займет всю ширину
	(function(){

		function wResize(){
			$('.head').css('height', $(window).height);
		}

		wResize();
		$(window).resize(function(){
			wResize();
			console.log('11111d');
		})

	})();


	//tabs 1
	(function(){
		$('.header__contact-link').on('click', function(e){
			e.preventDefault();

			var
				$this = $(this),
				item = $this.closest('.header__contact-item'),
				container = $this.closest('.header__right'),
				content = container.find('.header__phone-item'),
				ndx = item.index(),
				reqItem = content.eq(ndx),
				activeItem = content.filter('.active'),
				duration = 200;

			if (!item.hasClass('active')) {

				item.addClass('active')
					.siblings()
					.removeClass('active');

				activeItem.fadeOut(duration, function () {
					reqItem.fadeIn(duration, function () {
						$(this).addClass('active')
							.siblings()
							.removeClass('active');
					});
				});
			}

		});

	}());

	//tabs 2
	(function(){
		$('.tabs__link').on('click', function(e){
			e.preventDefault();

			var
				$this = $(this),
				item = $this.closest('.tabs__item'),
				container = $this.closest('.header__tabs'),
				content = container.find('.tabs__content-item'),
				ndx = item.index(),
				reqItem = content.eq(ndx),
				activeItem = content.filter('.active'),
				duration = 0;

			if (!item.hasClass('active')) {

				item.addClass('active')
					.siblings()
					.removeClass('active');

				activeItem.fadeOut(duration, function () {
					reqItem.fadeIn(duration, function () {
						$(this).addClass('active')
							.siblings()
							.removeClass('active');
					});
				});
			}

		});

	}());

	//tabs 3
	(function(){

		$('.find__link').on('click', function(e){
			e.preventDefault();

			var
				$this = $(this),
				container = $this.closest('.find'),
				item = $this.closest('.find__item'),
				content = container.find('.find__content-item'),
				currentContent = content.eq(item.index()),
				activeContent = content.filter('.active'),
				maps = $('.map__tab-item'),
				currentMap = maps.eq(item.index()),
				activeMap = maps.filter('.active'),
				duration = 0;

				if (!item.hasClass('active')) {
					item.addClass('active')
							.siblings()
							.removeClass('active');

					activeContent.fadeOut(duration, function(){
						currentContent.fadeIn(duration, function(){
							$(this).addClass('active')
										 .siblings()
										 .removeClass('active');
						})
					})

					activeMap.fadeOut(duration, function(){
						currentMap.fadeIn(duration, function(){
							$(this).addClass('active')
										 .siblings()
										 .removeClass('active');
						})
					})
				}

		})

	})();

	//tabs 4
	(function(){
		$('.footer__contact-link').on('click', function(e){
			e.preventDefault();

			var
				$this = $(this),
				item = $this.closest('.footer__contact-item'),
				container = $this.closest('.footer__tabs'),
				content = container.find('.footer__phone-item'),
				ndx = item.index(),
				reqItem = content.eq(ndx),
				activeItem = content.filter('.active'),
				duration = 200;

			if (!item.hasClass('active')) {

				item.addClass('active')
					.siblings()
					.removeClass('active');

				activeItem.fadeOut(duration, function () {
					reqItem.fadeIn(duration, function () {
						$(this).addClass('active')
							.siblings()
							.removeClass('active');
					});
				});
			}

		});

	}());

	//ajax
	$("form").submit(function(e) {
		var ths = $(this);
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				var magnificPopup = $.magnificPopup.instance; 
				magnificPopup.close();
				ths.trigger("reset");
			}, 1000);
		});
		return false;
	});

});

$(window).on("load", function(){
	$('.header__title').animated("fadeInDown", "fadeInDown");
	$('.info__item').animated("fadeInRight", "fadeInRight");
	$('.info__form_anim').animated("zoomInRight", "zoomInRight");
	$('.footer__wrap').animated("fadeInUp", "fadeInUp");
});