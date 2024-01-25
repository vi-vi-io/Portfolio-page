$( document ).ready(function() {

// Cookies!!!
	var loadCount = 0;
	$('#modal-form-frame').on('load', function () {
		loadCount++;
		if (!$.cookie('sfreg') && (loadCount > 1)) {
			$.cookie('sfreg', 'true', {expires: 365});
			loadcount = 0;
			dataLayer.push({
				'event':'GAEvent',
				'eventCategory':'VoyaDifferenceUnlockForm',
				'eventAction':'Submit',
				'eventLabel':'FormCompletion',
				'eventValue':''
			 });
			location.reload();
		}
	});
	var loadCountMain = 0;
	$('#form-frame').on('load', function () {
		loadCountMain++;
		if (!$.cookie('sfreg') && (loadCountMain > 1)) {
			$.cookie('sfreg', 'true', {expires: 365});
			loadCountMain = 0;
			dataLayer.push({
				'event':'GAEvent',
				'eventCategory':'VoyaDifferenceUnlockForm',
				'eventAction':'Submit',
				'eventLabel':'FormCompletion',
				'eventValue':''
			 });
			location.reload();
		}
	});

	var locked = $(".locked");
	var i;
	if ( $.cookie("sfreg") == "true" ) {
		for (i = 0; i < locked.length; i++) {
			locked[i].innerHTML = '<i class="far fa-file-alt"></i> ' + locked[i].innerHTML;
		}
		$(".locked").removeAttr( "data-toggle" );
		$(".locked").removeAttr( "data-target" );

		$('#ent_voyacares_cs').attr("href","./linked/voya_cares_case_study.pdf");
		$('#ent_voyacares_cs').data('gaEventLabel', 'Voya Cares - Download Case Study');		

		$('#ret_voyacares_bro').attr("href","./linked/voya_cares_brochure.pdf");
		$('#ret_voyacares_bro').data('gaEventLabel', 'Voya Cares - Download brochure');
		$('#ret_nqdc_bro').attr("href","./linked/voya_non-qual_dc_cap_brochure.pdf");
		$('#ret_nqdc_bro').data('gaEventLabel', 'NQDC - Download brochure');
		$('#ret_befi_wp').attr("href","./linked/using_decision_styles_to_improve_financial_outcomes_whitepaper.pdf");
		$('#ret_befi_wp').data('gaEventLabel', 'Improve outcomes - Download whitepaper');
		$('#ret_ph_flyer').attr("href","./linked/plan_health_flyer.pdf");
		$('#ret_ph_flyer').data('gaEventLabel', 'Plan Health - Download flyer');

		$('#im_tdd_wp').attr("href","./linked/holistic_approach_to_target_date_design_whitepaper.pdf");
		$('#im_tdd_wp').data('gaEventLabel', 'Target Date Design - Download whitepaper');
	} else {
		for (i = 0; i < locked.length; i++) {
			locked[i].innerHTML = '<i class="fas fa-unlock-alt"></i> ' + locked[i].innerHTML;
		}
	}

	
	// $('#voyafa-form-container').load('https://forprofessionals.voya.com/voya-financial-advisors/join-us/ #IFPJoinUsForm');

// site preloader
	$(window).load(function(){
		$('#preloader').fadeOut('slow',function(){$(this).remove();});
	});


// SCROLLMAGIK / TWEENMAX FUNCTIONS

	var hero_controller = new ScrollMagic.Controller();// init controller

	var hero_tl = new TimelineLite();// HERO TWEEN TIMELINE
	
	// HERO tween
	hero_tl.to("#usa_gfx", 3, 
		{
			autoAlpha:0,
			ease: Power1.easeOut,
			scale: 1.5,
			y:200
		}
	)
	.to("#usa_bkgd", 2, 
		{
			backgroundColor: "#f58000",
			ease: Power1.easeInOut
		},
		'-=2.5'
	)
	.to("#hero_title", 2, 
		{
			autoAlpha:0,
			ease: Power1.easeInOut
		},
		'-=3'
	);
	// HERO scene
	var hero_scene = new ScrollMagic.Scene({triggerElement: "#hero_trigg", triggerHook: "onLeave", duration: 500, offset: 0})
					.setTween(hero_tl)
					.addTo(hero_controller);

	// var logos_controller = new ScrollMagic.Controller();// init controller

	// var logos_tl = new TimelineLite();// LOGOS TWEEN TIMELINE

	// // logos tween
	// logos_tl.to("#logo_1", 1,
	// 	{
	// 		autoAlpha:1,
	// 		transform: "rotateY(0deg)",
	// 		repeat:0,
	// 		ease: Power2.easeOut
	// 	}
	// )
	// .to("#logo_2", 1,
	// 	{
	// 		autoAlpha:1,
	// 		transform: "rotateY(0deg)",
	// 		repeat:0,
	// 		ease: Power2.easeOut
	// 	},
	// 	'-=0.75'
	// )
	// .to("#logo_3", 1,
	// 	{
	// 		autoAlpha:1,
	// 		transform: "rotateY(0deg)",
	// 		repeat:0,
	// 		ease: Power2.easeOut
	// 	},
	// 	'-=0.75'
	// )
	// .to("#logo_4", 1,
	// 	{
	// 		autoAlpha:1,
	// 		transform: "rotateY(0deg)",
	// 		repeat:0,
	// 		ease: Power2.easeOut
	// 	},
	// 	'-=0.75'
	// )
	// .to("#logo_5", 1,
	// 	{
	// 		autoAlpha:1,
	// 		transform: "rotateY(0deg)",
	// 		repeat:0,
	// 		ease: Power2.easeOut
	// 	},
	// 	'-=0.75'
	// )
	// .to("#logo_6", 1,
	// 	{
	// 		autoAlpha:1,
	// 		transform: "rotateY(0deg)",
	// 		repeat:0,
	// 		ease: Power2.easeOut
	// 	},
	// 	'-=0.75'
	// )
	// .to("#logo_7", 1,
	// 	{
	// 		autoAlpha:1,
	// 		transform: "rotateY(0deg)",
	// 		repeat:0,
	// 		ease: Power2.easeOut
	// 	},
	// 	'-=0.75'
	// )
	// .to("#logo_8", 1,
	// 	{
	// 		autoAlpha:1,
	// 		transform: "rotateY(0deg)",
	// 		repeat:0,
	// 		ease: Power2.easeOut
	// 	},
	// 	'-=0.75'
	// );
	// // logos scene
	// var logos_scene = new ScrollMagic.Scene({triggerElement: "#logos_trigg", duration: "100%", offset: -100})
	// 				.setTween(logos_tl)
	// 				.addTo(logos_controller);

//Adjust SM scene duration to height of containing element - http://scrollmagic.io/docs/ScrollMagic.Scene.html#duration
//seems to adjust timing based on container height, bbut causing wierd issues: no reverse on scroll up, random reset
	
	// var duration = logos_scene.duration();// get the current duration value

	// // use a function to automatically adjust the duration to the container height.
	// var logos_container = $('#logos_container');
	// var durationValueCache;
	// function getDuration () {
	//   return durationValueCache;
	// }
	// function updateDuration (e) {
	//   durationValueCache = logos_container.innerHeight;
	// }
	// logos_container.on("resize", updateDuration); // update the duration when the window size changes
	// logos_container.triggerHandler("resize"); // set to initial value
	// logos_scene.duration(getDuration); // supply duration method



//parallax background images
	
	// index.php
	$('#plx-landing').parallax({
		imageSrc: './images/page-bkgd/plx-landing.jpg',
		positionX: 'center',
		bleed: 200,
		naturalWidth: 2000,
		naturalHeight: 1333
	});
	
	// home.php
	$('#plx-home-1').parallax({
		imageSrc: './images/page-bkgd/plx-home-1.jpg',
		positionX: 'center',
		bleed: 200,
		naturalWidth: 2000,
		naturalHeight: 1333
	});
	
	$('#plx-home-2').parallax({
		imageSrc: './images/page-bkgd/plx-home-2.jpg',
		positionY: 'right',
		bleed: 200,
		naturalWidth: 2000,
		naturalHeight: 1333
	});
	
	
	// retirement.php
	$('#plx-ret-1').parallax({
		imageSrc: './images/page-bkgd/plx-ret-1.jpg',
		positionX: 'center',
		bleed: 0,
		naturalWidth: 2000,
		naturalHeight: 1333
	});
	$('#plx-ret-2').parallax({
		imageSrc: './images/page-bkgd/plx-ret-2.jpg',
		positionX: 'center',
		bleed: 200,
		naturalWidth: 2000,
		naturalHeight: 1333
	});

	//voyafa.php
	$('#plx-rwm-1').parallax({
		imageSrc: './images/page-bkgd/plx-rwm-1.jpg',
		positionX: 'center',
		bleed: 0,
		naturalWidth: 2000,
		naturalHeight: 1333
	});
	$('#plx-rwm-2').parallax({
		imageSrc: './images/page-bkgd/plx-rwm-2.jpg',
		positionX: 'center',
		bleed: 0,
		naturalWidth: 2000,
		naturalHeight: 1333
	});
	$('#plx-rwm-3').parallax({
		imageSrc: './images/page-bkgd/plx-rwm-3.jpg',
		positionX: 'center',
		bleed: 0,
		naturalWidth: 2000,
		naturalHeight: 1333
	});
	$('#plx-rwm-4').parallax({
		imageSrc: './images/page-bkgd/plx-rwm-4.jpg',
		positionX: 'center',
		bleed: 0,
		naturalWidth: 2000,
		naturalHeight: 1333
	});


//smooth scroll  -->
	 $(function() {
		$('a[href*="#"]:not([href="#"])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top - 80
					}, {
						duration: 1400,
						easing: "swing"
					});
					return false;
				}
			}
		});
	 });


//Modal vid trigger
	
	$(".vid-modal").on( "show.bs.modal", function(){
		var mod_title = $(this).data('modtitle');
		var vid_id = $(this).data('entryid'); //Kaltura video Entry ID is in 'data-entryid' property on each video modal
		$('#' + mod_title + '-vid-wrap').html(
			'<div class="movie-push"></div><div class="movie-container" id="' + mod_title + '-player" itemprop="video" itemscope itemtype="http://schema.org/VideoObject"></div>'
		);        
		kWidget.embed({
			"targetId": mod_title + "-player",
			"wid": "_1234081",
			"uiconf_id": 43882961,//Kaltura Player ID - currently 'voyadifference modal'
			"flashvars": {
				"streamerType": "auto",
				"autoPlay": "true",
				"loadingSpinner": {
					'imageUrl':"images/kaltura-preloader.gif"
				},
				"googleAnalytics": {
					"plugin" : true,
					"position" : "before",
					"urchinCode" : "UA-39790767-25",
					"trackEventMonitor" : "trackFunc",
					"customEvent" : "doPlay,playerReady,NoSourcesCustomError,bufferEndEvent,mediaError,embedPlayerError",
					"trackingCategory" : "Kaltura Video Events",
					"optionalLabel" : "{mediaProxy.entry.referenceId}|{mediaProxy.entry.name}|{mediaProxy.entry.id}|{configProxy.kw.id}|{configProxy.kw.uiConfId}",
					"anonymizeIp" : false,
					"relativeTo" : "video",
					"doPlayCategory" : "Custom Events",
					"doPlayAction" : "playing",
					"doPlayValue" : "1",
					"doPlayLabel" : "My custom play label: {mediaProxy.entry.id}",
					"playerReadyCategory" : "My entry tags",
					"playerReadyAction" : "{mediaProxy.entry.tags}",
					"mediaErrorCategory" : "Error events",
					"mediaErrorAction" : " MediaError event",
					"embedPlayerErrorCategory" : "Error events",
					"embedPlayerErrorAction" : "Streaming Error",
					"NoSourcesCustomErrorCategory" : "Error events",
					"NoSourcesCustomErrorAction" : "No Sources Error",
					"bufferEndEventCategory" : "Buffer events",
					"bufferEndEventAction" : "bufferEnd",
					"bufferEndEventValue" : "{video.buffer.lastBufferDurationMs}",
					"sendRefId" : true
				}
			},
			"cache_st": 1482180688,
			"entry_id": vid_id
		});
		$('#' + mod_title + '-modal').find(".voya-modal-unmute").fadeIn("fast");
		kWidget.addReadyCallback(function(playerId){
			// var kdpContainer = document.getElementById(kaltura_player);
			var kdp = document.getElementById(playerId); // add a local ref to the kdp
			kdp.kBind( 'unmute', function(){
				$( '.voya-modal-unmute' ).fadeOut( "slow" );
				kdp.kUnbind('unmute');
			});
			$( '.voya-modal-unmute' ).click(function(){
				kdp.sendNotification("changeVolume", 0.75);
				// $( this ).fadeOut( "slow" );
			});
		}); // END addReadyCallback
	});

	$(".vid-modal").on( "hidden.bs.modal", function () {
		var mod_ttl = $(this).data('modtitle');
		kWidget.destroy(mod_ttl + '-player');
	});//END - modal video trigger

	// if(window.location.href.indexOf('#earnings-modal') != -1) {
	// 	$('#earnings-modal').modal('show');
	// }

	//detect touch screen  -->
	// function isTouchSupported() {
	// 	var msTouchEnabled = window.navigator.msMaxTouchPoints;
	// 	var generalTouchEnabled = "ontouchstart" in document.createElement("div");
	// 	if (msTouchEnabled || generalTouchEnabled) {
	// 		return true;
	// 	}
	// 	return false;
	// }

	// function toggle() {
	// 	var touch = document.querySelectorAll(".touch"), i;
	// 	var notouch = document.querySelectorAll(".notouch"), ii;

	// 	if (!isTouchSupported()) {
	// 		for (i = 0; i < touch.length; ++i) {
	// 			touch[i].style.display = "none";
	// 		}
	// 		for (i = 0; i < notouch.length; ++i) {
	// 			notouch[i].style.display = "block";
	// 		}
	// 	} else {
	// 		for (ii = 0; ii < notouch.length; ++ii) {
	// 			notouch[ii].style.display = "none";
	// 		}
	// 		for (ii = 0; ii < touch.length; ++ii) {
	// 			touch[ii].style.display = "block";
	// 		}
	// 	}
	// }
	
	// isTouchSupported();
	// toggle();
	
// ===== Scroll to Top ==== 

	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
		}
	});
	// scroll body to 0px on click
	$('#back-to-top').click(function () {
		$('#back-to-top').tooltip('hide');
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	$('#back-to-top').tooltip('show');

	//via - https://gist.github.com/MrDys/3512455#gistcomment-2341322
	//Open modal con url = open modal with url
	var url      	= window.location.href;
	var modal_code 	= getParameterByName("mod",url);

	if(window.location.href.indexOf('?mod='+modal_code) != -1) {
    	$('#'+modal_code).modal('show');
    	/*Like a query string
		http://www.website.com/page.html?mod=1
		http://www.website.com/page.html?mod=2
		...
    	*/
  	}

});/* close document.ready */

function getParameterByName(name, url) { //Obtiene un value de un query string
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));

    /*EJEMPLO
	// query string: ?foo=lorem&bar=&baz
	var foo = getParameterByName('foo'); // "lorem"
	var bar = getParameterByName('bar'); // "" (present with empty value)
	var baz = getParameterByName('baz'); // "" (present with no value)
	var qux = getParameterByName('qux'); // null (absent)
    */
}