
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
	
	var matchBoxGo = true;
	var omBoxGo = true;
	var pfdBoxGo = true;
	var mobileBoxGo = true;

	$(window).scroll(function () {

		var isElementInView = Utils.isElementInView($('#match_block_container'), true);
		if (isElementInView && matchBoxGo) {
		    init_match();
	    	matchBoxGo = false;
	    	return;
		}

		var isElementInView = Utils.isElementInView($('#om_block_container'), true);
		if (isElementInView && omBoxGo) {
		    init_om();
	    	omBoxGo = false;
	    	return;
		}

		var isElementInView = Utils.isElementInView($('#pfd_block_container'), true);
		if (isElementInView && pfdBoxGo) {
		    init_pfd();
	    	pfdBoxGo = false;
	    	return;
		}

		var isElementInView = Utils.isElementInView($('#mobile_block_container'), true);
		if (isElementInView && mobileBoxGo) {
		    init_mobile();
	    	mobileBoxGo = false;
	    	return;
		}

	});

//initialize match animation
	function init_match() {
		var match_canvas, stage, exportRoot;
		match_canvas = document.getElementById("match_canvas");
		matchHandleComplete();
	}
	function matchHandleComplete() {
		//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.

		exportRoot = new lib_match.match();
		
		stage = new createjs.Stage(match_canvas);
		stage.addChild(exportRoot);	
		
		//Registers the "tick" event listener.
		createjs.Ticker.setFPS(lib_match.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);

		//Code to support hidpi screens and responsive scaling.
		(function(isResp, respDim, isScale, scaleType) {		
			var lastW, lastH, lastS=1;		
			window.addEventListener('resize', resizeCanvas);		
			resizeCanvas();		
			function resizeCanvas() {
				var match_block_container = document.getElementById("match_block_container");
				var w = lib_match.properties.width, h = lib_match.properties.height;			
				var iw = match_block_container.offsetWidth, ih=window.innerHeight;			
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
				match_canvas.width = w*pRatio*sRatio;			
				match_canvas.height = h*pRatio*sRatio;
				match_canvas.style.width = w*sRatio+'px';			
				match_canvas.style.height = h*sRatio+'px';
				stage.scaleX = pRatio*sRatio;			
				stage.scaleY = pRatio*sRatio;			
				lastW = iw; lastH = ih; lastS = sRatio;		
			}
		})(true,'width',false,1);	
	}//end match ini

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

//initialize personal financial dashboard animation
	function init_pfd() {
		var pfd_canvas, stage, exportRoot;
		pfd_canvas = document.getElementById("pfd_canvas");
		pfdHandleComplete();
	}
	function pfdHandleComplete() {
		//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.

		exportRoot = new lib_pfd.pfd();
		
		stage = new createjs.Stage(pfd_canvas);
		stage.addChild(exportRoot);	
		
		//Registers the "tick" event listener.
		createjs.Ticker.setFPS(lib_pfd.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);

		//Code to support hidpi screens and responsive scaling.
		(function(isResp, respDim, isScale, scaleType) {		
			var lastW, lastH, lastS=1;		
			window.addEventListener('resize', resizeCanvas);		
			resizeCanvas();		
			function resizeCanvas() {
				var pfd_block_container = document.getElementById("pfd_block_container");
				var w = lib_pfd.properties.width, h = lib_pfd.properties.height;			
				var iw = pfd_block_container.offsetWidth, ih=window.innerHeight;			
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
				pfd_canvas.width = w*pRatio*sRatio;			
				pfd_canvas.height = h*pRatio*sRatio;
				pfd_canvas.style.width = w*sRatio+'px';			
				pfd_canvas.style.height = h*sRatio+'px';
				stage.scaleX = pRatio*sRatio;			
				stage.scaleY = pRatio*sRatio;			
				lastW = iw; lastH = ih; lastS = sRatio;		
			}
		})(true,'width',false,1);	
	}//end personal financial dashboard ina=i

//initialize mobile app animation
	function init_mobile() {
		var mobile_canvas, stage, exportRoot;
		mobile_canvas = document.getElementById("mobile_canvas");
		mobileHandleComplete();
	}
	function mobileHandleComplete() {
		//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.

		exportRoot = new lib_mobile.mobile();
		
		stage = new createjs.Stage(mobile_canvas);
		stage.addChild(exportRoot);	
		
		//Registers the "tick" event listener.
		createjs.Ticker.setFPS(lib_mobile.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);

		//Code to support hidpi screens and responsive scaling.
		(function(isResp, respDim, isScale, scaleType) {		
			var lastW, lastH, lastS=1;		
			window.addEventListener('resize', resizeCanvas);		
			resizeCanvas();		
			function resizeCanvas() {
				var mobile_block_container = document.getElementById("mobile_block_container");
				var w = lib_mobile.properties.width, h = lib_mobile.properties.height;			
				var iw = mobile_block_container.offsetWidth, ih=window.innerHeight;			
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
				mobile_canvas.width = w*pRatio*sRatio;			
				mobile_canvas.height = h*pRatio*sRatio;
				mobile_canvas.style.width = w*sRatio+'px';			
				mobile_canvas.style.height = h*sRatio+'px';
				stage.scaleX = pRatio*sRatio;			
				stage.scaleY = pRatio*sRatio;			
				lastW = iw; lastH = ih; lastS = sRatio;		
			}
		})(true,'width',false,1);	
	}//end mobile app ini
//END - Animate CC triggers

    //VIDEO ONE
    $("#om-btn").click(function(){
        $("#om-modal").modal("show");
    });

    $('#om-modal').on( 'show.bs.modal', function(){
    	$.getScript("https://cdnapisec.kaltura.com/p/1234081/sp/123408100/embedIframeJs/uiconf_id/37494541/partner_id/1234081");
        $('#om-vid-wrap').html(
            '<div style="margin-top: 56.25%;"></div><div class="movie-container" id="om_player" style="height:100%;width:100%;position:absolute;top:0;left:0;left: 0;right: 0;bottom:0;" itemprop="video" itemscope itemtype="http://schema.org/VideoObject"></div>'
        );        
        kWidget.embed({
            "targetId": "om_player",
			"wid": "_1234081",
			"uiconf_id": 37494541,
            "flashvars": {
                "streamerType": "auto",
                "autoPlay": "true",
                "loadingSpinner": {
                    'imageUrl':"images/kaltura-preloader.gif"
                }
            },
            "cache_st": 1482180688,
			"entry_id": "1_5uz81b4b"
        });
    });

    $("#om-modal").on( "hidden.bs.modal", function () {
        kWidget.destroy('om_player');
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
