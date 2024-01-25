
//http://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling
//Simple Utility Function This will allow you to call a utility function that accepts the element you're looking for and if you want the element to be fully in view or partially.
function Utils() {

}

Utils.prototype = {
    constructor: Utils,
    isElementInView: function (element, fullyInView) {
        var pageTop = $(window).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).height();

        if (fullyInView === true) {
            return ((pageTop < elementTop) && (pageBottom > elementBottom));
        } else {
            return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
        }
    }
};

var Utils = new Utils();





$( document ).ready(function() {

	
	// site preloader
	$(window).load(function(){
		$('#preloader').fadeOut('slow',function(){$(this).remove();});
	});


	// bouncing arrow
	$( ".wakeup-arrow" ).slideUp( 300 ).delay( 2500 ).fadeIn( 500 );
	
	$( window ).scroll(function() {
	    $( '.wakeup-arrow' ).fadeOut( 500, function() {
			// Animation complete.
		});
	});

	// floating learn more button
	var expBtnGo = true; //why does this work only when this var is outside function?
        
    $(window).scroll(function() {
        
        var windowScrollTop = $(this).scrollTop();

        if (windowScrollTop >= 350 && expBtnGo) {
        
            $("#exp-btn").stop().animate({marginRight: '125px'}, 500);
            expBtnGo = false;
        
        } else if ($(this).scrollTop() < 350 && !expBtnGo) {
        
            $("#exp-btn").stop().animate({marginRight: '0px'}, 500);
            expBtnGo = true;
        
        }
    });


	//parallax background images
	$('#plx-1').parallax({
		imageSrc: './images/page-bkgd/plx-1.jpg',
		positionX: 'right',
		bleed: 200,
		naturalWidth: 2000,
		naturalHeight: 1333
	});
	$('#plx-2').parallax({
		imageSrc: './images/page-bkgd/plx-2.jpg',
		positionX: 'center',
		bleed: 200,
		naturalWidth: 2000,
		naturalHeight: 1333
	});
	$('#plx-3').parallax({
		imageSrc: './images/page-bkgd/plx-3.jpg',
		positionX: 'right',
		bleed: 200,
		naturalWidth: 2000,
		naturalHeight: 1333
	});
	$('#plx-4').parallax({
		imageSrc: './images/page-bkgd/plx-4.jpg',
		positionX: 'center',
		bleed: 200,
		naturalWidth: 2000,
		naturalHeight: 1333
	});
	$('#plx-5').parallax({
		imageSrc: './images/page-bkgd/plx-5.jpg',
		positionX: 'center',
		bleed: 200,
		naturalWidth: 2000,
		naturalHeight: 1333
	});
	$('#plx-6').parallax({
		imageSrc: './images/page-bkgd/plx-6.jpg',
		positionX: 'center',
		bleed: 400,
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
						scrollTop: target.offset().top
					}, 800);
					return false;
				}
			}
		});
	});


	//Animate CC triggers - leverage utility function above -->
	var omBoxGo = true;
	$(window).scroll(function () {
		var isElementInView = Utils.isElementInView($('#om_block_container'), true);
		if (isElementInView && omBoxGo) {
		    init_om();
	    	omBoxGo = false;
	    	return;
		}
	});
	
	//initialize orange money animation
	function init_om() {
		var om_canvas, stage, exportRoot;
		om_canvas = document.getElementById("om_canvas");
		omHandleComplete();
	}
	function omHandleComplete() {
		//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.

		exportRoot = new lib_om.om();
		
		stage = new createjs.Stage(om_canvas);
		stage.addChild(exportRoot);	
		
		//Registers the "tick" event listener.
		createjs.Ticker.setFPS(lib_om.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);

		//Code to support hidpi screens and responsive scaling.
		(function(isResp, respDim, isScale, scaleType) {		
			var lastW, lastH, lastS=1;		
			window.addEventListener('resize', resizeCanvas);		
			resizeCanvas();		
			function resizeCanvas() {
				var om_block_container = document.getElementById("om_block_container");
				var w = lib_om.properties.width, h = lib_om.properties.height;			
				var iw = om_block_container.offsetWidth, ih=window.innerHeight;			
				var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
				if(isResp) {                
					if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
						sRatio = lastS;                
					}				
					else if(!isScale) {					
						if(iw<w || ih<h)						
							sRatio = Math.min(xRatio, yRatio);				
					}				
					else if(scaleType==1) {					
						sRatio = Math.min(xRatio, yRatio);				
					}				
					else if(scaleType==2) {					
						sRatio = Math.max(xRatio, yRatio);				
					}			
				}			
				om_canvas.width = w*pRatio*sRatio;			
				om_canvas.height = h*pRatio*sRatio;
				om_canvas.style.width = w*sRatio+'px';			
				om_canvas.style.height = h*sRatio+'px';
				stage.scaleX = pRatio*sRatio;			
				stage.scaleY = pRatio*sRatio;			
				lastW = iw; lastH = ih; lastS = sRatio;		
			}
		})(true,'width',false,1);	
	}//end orange money ini
	//END - Animate CC triggers

	//myOM video
    $("#om-btn").click(function(){
        $("#om-modal").modal("show");
    });

    $('#om-modal').on( 'show.bs.modal', function(){
    	$.getScript("https://cdnapisec.kaltura.com/p/1234081/sp/123408100/embedIframeJs/uiconf_id/37494541/partner_id/1234081");
        $('#om-vid-wrap').html(
            '<div class="movie-push"></div><div class="movie-container" id="om_player" itemprop="video" itemscope itemtype="http://schema.org/VideoObject"></div>'
        );        
        kWidget.embed({
            "targetId": "om_player",
			"wid": "_1234081",
			"uiconf_id": 28503511,
            "flashvars": {
                "streamerType": "auto",
                "autoPlay": "true",
                "loadingSpinner": {
                    'imageUrl':"images/kaltura-preloader.gif"
                },
                "googleAnalytics": {
					"plugin" : true,
					"position" : "before",
					"urchinCode" : "UA-11842688-19",
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
			"entry_id": "1_5uz81b4b"
        });
    });

    $("#om-modal").on( "hidden.bs.modal", function () {
        kWidget.destroy('om_player');
    });
	
	
	// SESSION INFO TOGGLES
	$("#info_1_toggle").click(function () {
		$("#info_1_box").slideToggle(200);
	});
	$("#info_2_toggle").click(function () {
		 $("#info_2_box").slideToggle(200);
	});
	$("#info_3_toggle").click(function () {
		 $("#info_3_box").slideToggle(200);
	});
	$("#info_4_toggle").click(function () {
		 $("#info_4_box").slideToggle(200);
	});
	$(".info-btn").click(function () {
		setTimeout(function(){
			$(window).trigger('resize');
		},201);//trigger reset of parallax image positions 1 ms after toggle animation ends

	});
			 


	//detect touch screen  -->
	function isTouchSupported() {
		var msTouchEnabled = window.navigator.msMaxTouchPoints;
		var generalTouchEnabled = "ontouchstart" in document.createElement("div");
		if (msTouchEnabled || generalTouchEnabled) {
			return true;
		}
		return false;
	}

	function toggle() {
		var touch = document.querySelectorAll(".touch"), i;
		var notouch = document.querySelectorAll(".notouch"), ii;

		if (!isTouchSupported()) {
			for (i = 0; i < touch.length; ++i) {
				touch[i].style.display = "none";
			}
			for (i = 0; i < notouch.length; ++i) {
				notouch[i].style.display = "block";
			}
		} else {
			for (ii = 0; ii < notouch.length; ++ii) {
				notouch[ii].style.display = "none";
			}
			for (ii = 0; ii < touch.length; ++ii) {
				touch[ii].style.display = "block";
			}
		}
	}
	
	isTouchSupported();
	toggle();
	

});/* close document.ready */
