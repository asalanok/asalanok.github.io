jQuery.noConflict();
jQuery(document).ready(function($) {

	$(".flexslider").flexslider({
		animation: "slide",
		directionNav: true,
		controlNav: false,
		pauseOnHover: true
	});

	/*$('.carlite').jCarouselLite({
		auto: 8000,
		vertical: true,
		visible: 7,
		btnNext: ".jcar-next",
        btnPrev: ".jcar-prev"
	});*/

	wSlide = $('.carlite').width();
	achiev = $('.achievement-slides').bxSlider({
		mode: 'vertical',
		auto: true,
		pause: 8000,
		pager: false,
		minSlides: 7,
		maxSlides: 7,
		slideWidth: wSlide,
		moveSlides: 1,
		controls: false,
	});
	$('.achive-slider .jcar-prev').on('click', function() {
		achiev.goToPrevSlide();
	});
	$('.achive-slider .jcar-next').on('click', function() {
		achiev.goToNextSlide();
	});
	
	$(".flexslider2").flexslider({
		animation: 'slide',
		controlNav: false,
		directionNav: true,
		manualControls: '.custom-controls li a',
		controlsContainer: '.custom-controls-container',
		customDirectionNav: '.custom-navigation a',
		pauseOnHover: true
	});
	
	$(".flexslider-2").flexslider({
		animation: 'slide',
		controlNav: false,
		directionNav: true,
		manualControls: '.custom-controls li a',
		controlsContainer: '.custom-controls-container',
		customDirectionNav: '.custom-navigation a',
		pauseOnHover: true,
		itemWidth: 250,
		itemMargin: 15
	});
	
	$(".flexslider3").flexslider({
		animation: "slide",
		controlNav: false,
		pauseOnHover: true	
	});

	$(".flexslider4").flexslider({
		animation: 'slide',
		controlNav: false,
		directionNav: true,
		pauseOnHover: true		
	});
	/*var ty = Comagic.getCredentials();
	console.log(ty);*/

	/*$("#callbackform a, #callbackform_ a, #callbackformm a").on('click', function() {
		formID = $(this).closest('form').attr('id');
		obj = {};
		obj.name = $('form#'+formID+' input[name=name]').val();
		obj.phone = $('form#'+formID+' input[name=email]').val();
		obj.message = $('form#'+formID+' input[name=text]').val();

		Comagic.addOfflineRequest(obj, function(data){
			console.log(data);
		});
		$('form#'+formID).submit();
		return false;
	});*/
			
});
		/*		
		var _gaq = _gaq || [];
		
		_gaq.push(['_setAccount', 'UA-21400332-1']);
		_gaq.push(['_trackPageview']);
		
		(function() {
			var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
			ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
			var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		})();
		*/
		
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

		ga('create', 'UA-21400332-1', 'auto');
		ga('send', 'pageview');
		
		function ct_load_script() {
			var ct = document.createElement('script'); ct.type = 'text/javascript';
			ct.src = 'http://cc.calltracking.ru/phone.1c1c9.1574.async.js?nc='+Math.floor(new Date().getTime()/300000);
			var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ct, s);
		}
		
		if ( null != window.onload ) { wol = window.onload; window.onload = function() { wol(); ct_load_script(); }
		} else { window.onload = ct_load_script; }
		
		function tab1 () {
			s = document.getElementById('tab1').style.display;
			
			if (s == "none") {
				$("#tab1").css("display","block");
				$("#tab2").css("display","none");
			} else{
				$("#tab1").css("display","none");
				$("#tab2").css("display","block");
			}
		}
		
		function tab2 () {
			s = document.getElementById("tab2").style.display;
			if (s == "none"){
				$("#tab2").css("display","block");
				$("#tab1").css("display","none");
			} else {
				$("#tab2").css("display","none");
				$("#tab1").css("display","block");
			}
		}
