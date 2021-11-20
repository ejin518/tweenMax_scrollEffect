
AOS.init();

$(window).on('scroll',function(){
			findPosition();

			if ($('.nav .nav1,.nav .nav2,.nav .nav4,.nav .nav6').hasClass('active')) {
					
					$('.nav').addClass('white')
				}else {
					$('.nav').removeClass('white')
				}
		});

		var link = $('#navbar a.dot');
		link.on('click',function(e){
			var target = $($(this).attr('href'));

			$('html, body').animate({
				scrollTop:target.offset().top
			},600);

		//	$(this).addClass('active');

			//e.preventDefault();
		});

			

		function findPosition (){
			$('.section').each(function(){
				if(($(this).offset().top - $(window).scrollTop()) < 500){
					
					link.removeClass('active');
					$('#navbar').find('[data-scroll="'+ $(this).attr('id') +'"]').addClass('active');
				}
			});
		}
		findPosition();	

$(document).ready(function(){
	$('.vis_slider').slick({
		fade:true,
		dots: false,
		autoplay:true,
		infinite: true,
		arrows: false,
		autoplaySpeed:1000
	});
		let stickyHeaderTop = $('.header').offset().top;
	
	
	let stickyHeader = function(){
		let scrollTop = $(window).scrollTop(); 
			 
		
		if (scrollTop > stickyHeaderTop) { 
			$('.header').addClass('on');
		} else {
			$('.header').removeClass('on'); 
		}
	};

	stickyHeader();
	
	$(window).scroll(function() {
		stickyHeader();
	});

	$('.sec05_slider').slick({
		fade:true,
		dots: true,
		autoplay:true,
		infinite: true,
		arrows: false,
		autoplaySpeed:1000
	});
});


(function(){
	var controller = new ScrollMagic.Controller();
	var tween1 = TweenMax.to('#animate1', 1, {
	  opacity:0
	});
	  var scene = new ScrollMagic.Scene({
		triggerElement: "#trigger1",
		duration: "50%" 
	  })
	  .setTween(tween1)
	  .addTo(controller)
 }())

(function(){
	var controller = new ScrollMagic.Controller();
	var tween2 = TweenMax.to('#animate2', 1, {
	  opacity:0
	});
	  var scene = new ScrollMagic.Scene({
		triggerElement: "#trigger2",
		duration: "50%" 
	  })
	  .setTween(tween2)
	  .addTo(controller)
 }())

(function(){
	var controller = new ScrollMagic.Controller();
	var tween3 = TweenMax.to('#animate3', 1, {
	  opacity:0
	});
	  var scene = new ScrollMagic.Scene({
		triggerElement: "#trigger3",
		duration: "50%" 
	  })
	  .setTween(tween3)
	  .addTo(controller)
 }())

(function(){
	var controller = new ScrollMagic.Controller();
	var tween4 = TweenMax.to('#animate4', 1, {
	  opacity:0
	});
	  var scene = new ScrollMagic.Scene({
		triggerElement: "#trigger4",
		duration: "50%" 
	  })
	  .setTween(tween4)
	  .addTo(controller)
 }())
