$(document).ready(function () {

	resizeMovie(); // optimize movie crop on page load

	// ===  INITIALIZE home background video VIMEO PLAYER ======== >
	var home_player_options = {
		id: 613191318,
		loop: true,
		autoplay: true,
		muted: true,
		controls: false,
		responsive: true
	};
	var home_vimeo_player = new Vimeo.Player('home_vimeo_player', home_player_options);

	

	window.setTimeout(function() {
		$html.removeClass('is-loading');
	}, 0);

	function scrollHandler() {
		var scrollContainer = document.getElementById('banner')
		var element = document.getElementById('bannerTitle');
		
		var distanceToTop = window.pageYOffset + scrollContainer.getBoundingClientRect().top;
		var elementHeight = scrollContainer.offsetHeight;
		var scrollTop = document.documentElement.scrollTop;
		
		var opacity = 1;
		
		if (scrollTop > distanceToTop) {
			opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
		}
		
		if (opacity >= 0) {
			element.style.opacity = opacity;
		}}
	
	window.addEventListener('scroll', scrollHandler);

});  // END document.ready

// Disable animations/transitions until the page has loaded.
var $html = $("html");
$html.addClass('is-loading');

var	$window = $(window),
	$body = $('body'),
	$html = $('html');

function scrollHandler() {
	var scrollContainer = document.getElementById('banner')
	var element = document.getElementById('bannerTitle');
	
	var distanceToTop = window.pageYOffset + scrollContainer.getBoundingClientRect().top;
	var elementHeight = scrollContainer.offsetHeight;
	var scrollTop = document.documentElement.scrollTop;
	
	var opacity = 1;
	
	if (scrollTop > distanceToTop) {
		opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
	}
	
	if (opacity >= 0) {
		element.style.opacity = opacity;
	}}

window.addEventListener('scroll', scrollHandler);

//dynamic movie frame resizing function for optimum crop, based on window dimensions
function resizeMovie() {
	var $width = $window.width();
	var $height = $window.height();
	var $windowAR = $width / $height;
	if ($windowAR < 1.7778) {
		$(".movie-player").height($height);
		$(".movie-player").width($height * 1.7778);
		$(".movie-player iframe").height($height);
		$(".movie-player iframe").width($height * 1.7778);
	} else {
		$(".movie-player").height($width * .5625);
		$(".movie-player").width($width);
		$(".movie-player iframe").height($width * .5625);
		$(".movie-player iframe").width($width);
	}
};
$window.on('resize', resizeMovie); // optimize movie crop on window dimension change

//stop playback on all embedded vimeo videos in a bootstrap modal when it is closed
$(function(){
    $('.modal, .close').click(function(){
        $("iframe").each(function() {
            var src= $(this).attr('src');
            $(this).attr('src',src);
        });
    });
});

//smooth scroll  -->
	 $(function() {
		$('a[href*="#"]:not([href="#"])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top - 10
					}, {
						duration: 600,
						easing: "swing"
					});
					return false;
				}
			}
		});
	 });

//header nav fade animations
	
	 // Store the current scroll position
	var scrollPos = 0;

	// Get the navigation bar element
	var navBar = document.querySelector('.navbar');

	// Listen for scroll events
	window.addEventListener('scroll', function() {
	// Determine the new scroll position
	var newScrollPos = window.scrollY || document.documentElement.scrollTop;
	
	// Check if user scrolled down by at least 500px
	if (newScrollPos > scrollPos && newScrollPos > 250) {
		// Fade out the navigation bar
		navBar.style.opacity = '0';
	} else {
		// Fade in the navigation bar
		navBar.style.opacity = '1';
	}
	
	// Update the scroll position
	scrollPos = newScrollPos;
	}); 

// .content-block bkgd image animations based on scroll position
	$('.content-block').each(function() {

		var $this = $(this),
			$primaryImg = $this.find('.image.primary > img'),
			$bg,
			options;

		// No primary image? Bail.
		if ($primaryImg.length == 0)
			return;

		// Create bg and append it to body.
		$bg = $('<div class="main-bg" id="' + $this.attr('id') + '-bg"></div>')
			.css('background-image', (
				'url("assets/images/overlay.png"), url("' + $primaryImg.attr('src') + '")'
			))
			.appendTo($body);

		// Scrollex.
		options = {
			mode: 'middle',
			delay: 0,
			top: '-15vh',
			bottom: '-15vh'
		};

		$bg
			.css('opacity', 1)
			.hide();

		options.init = function() { $bg.fadeOut(0); };
		options.enter = function() { $bg.fadeIn(600); };
		options.leave = function() { $bg.fadeOut(600); };

		$this.scrollex(options);
	});

	// Send AJAX contact form data to Netlify
	const handleSubmit = (e) => {
		e.preventDefault()
		let myForm = document.getElementById('contactForm');
		let formData = new FormData(myForm)
		fetch('/', {
			method: 'POST',
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: new URLSearchParams(formData).toString()
		})
		.then(() => {
			$(myForm).animate({height: "0px"});
			let success = document.getElementById('postSent');
			$(success).animate({height: "200px"});
		})
		.catch((error) => {
			$(myForm).animate({height: "0px"});
			let formError = document.getElementById('postError');
			$(formError).animate({height: "200px"});
		})
	}
	document.querySelector("form").addEventListener("submit", handleSubmit);