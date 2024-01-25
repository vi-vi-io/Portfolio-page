
//http://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling
//Simple Utility Function This will allow you to call a utility function that accepts the element you're looking for and if you want the element to be fully in view or partially.
//LEVERAGED BY ANIMATION TRIGGERS BELOW
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

//Animate CC triggers - leverage utility function 'Utils.isElementInView' above -->

//initialize orange money animation
	var omBoxGo = true;
	var planhealthBoxGo = true;
	var refindexBoxGo = true;
	$(window).scroll(function () {
		var omInView = Utils.isElementInView($('#om_canvas_container'), true);
		var planhealthInView = Utils.isElementInView($('#planhealth_canvas_container'), true);
		var refindexInView = Utils.isElementInView($('#refindex_canvas_container'), true);
		if (omInView && omBoxGo) {
		    init_om();
	    	omBoxGo = false;
	    	return;
		} else if (planhealthInView && planhealthBoxGo) {
		    init_planhealth();
	    	planhealthBoxGo = false;
	    	return;
		} else if (refindexInView && refindexBoxGo) {
		    init_refindex();
	    	refindexBoxGo = false;
	    	return;
		}
	});
	
//initialize myOM animation
	function init_om() {
		var om_canvas, stage, exportRoot;
		om_canvas = document.getElementById("om_canvas");
		var om_comp=AdobeAn.getComposition("0B133258E42F45168CCAFB9784CB98B6");
		var lib_om=om_comp.getLibrary();
		omHandleComplete();
	}
	function omHandleComplete() {
		//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
		var omStartAnimation;
		var om_comp=AdobeAn.getComposition("0B133258E42F45168CCAFB9784CB98B6");
		var lib_om=om_comp.getLibrary();
		var ss=om_comp.getSpriteSheet();
		exportRoot = new lib_om.om();
		stage = new lib_om.Stage(om_canvas);	
		//Registers the "tick" event listener.
		omStartAnimation = function() {
			stage.addChild(exportRoot);
			createjs.Ticker.setFPS(lib_om.properties.fps);
			createjs.Ticker.addEventListener("tick", stage);
		}
		//Code to support hidpi screens and responsive scaling.
		function makeResponsive(isResp, respDim, isScale, scaleType) {		
			var lastW, lastH, lastS=1;		
			window.addEventListener('resize', resizeCanvas);		
			resizeCanvas();		
			function resizeCanvas() {
				var om_canvas_container = document.getElementById("om_canvas_container");	
				var w = lib_om.properties.width, h = lib_om.properties.height;			
				var iw = om_canvas_container.offsetWidth, ih=window.innerHeight;			
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
				om_canvas.style.width =  w*sRatio+'px';				
				om_canvas.style.height = h*sRatio+'px';
				stage.scaleX = pRatio*sRatio;			
				stage.scaleY = pRatio*sRatio;			
				lastW = iw; lastH = ih; lastS = sRatio;            
				stage.tickOnUpdate = false;            
				stage.update();            
				stage.tickOnUpdate = true;		
			}
		}
		makeResponsive(true,'width',false,1);	
		AdobeAn.compositionLoaded(lib_om.properties.id);
		omStartAnimation();
	}//end om ani

//initialize plan health animation
	function init_planhealth() {
		var planhealth_canvas, stage, exportRoot;
		planhealth_canvas = document.getElementById("planhealth_canvas");
		var planhealth_comp=AdobeAn.getComposition("36724BC4C9AC4DF09BB198CD7DABCDA5");
		var lib_planhealth=planhealth_comp.getLibrary();
		planhealthHandleComplete();
	}
	function planhealthHandleComplete() {
		//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
		var planhealthStartAnimation;
		var planhealth_comp=AdobeAn.getComposition("36724BC4C9AC4DF09BB198CD7DABCDA5");
		var lib_planhealth=planhealth_comp.getLibrary();
		var ss=planhealth_comp.getSpriteSheet();
		exportRoot = new lib_planhealth.planhealth();
		stage = new lib_planhealth.Stage(planhealth_canvas);	
		//Registers the "tick" event listener.
		planhealthStartAnimation = function() {
			stage.addChild(exportRoot);
			createjs.Ticker.setFPS(lib_planhealth.properties.fps);
			createjs.Ticker.addEventListener("tick", stage);
		}
		//Code to support hidpi screens and responsive scaling.
		function makeResponsive(isResp, respDim, isScale, scaleType) {		
			var lastW, lastH, lastS=1;		
			window.addEventListener('resize', resizeCanvas);		
			resizeCanvas();		
			function resizeCanvas() {
				var planhealth_canvas_container = document.getElementById("planhealth_canvas_container");	
				var w = lib_planhealth.properties.width, h = lib_planhealth.properties.height;			
				var iw = planhealth_canvas_container.offsetWidth, ih=window.innerHeight;			
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
				planhealth_canvas.width = w*pRatio*sRatio;			
				planhealth_canvas.height = h*pRatio*sRatio;
				planhealth_canvas.style.width =  w*sRatio+'px';				
				planhealth_canvas.style.height = h*sRatio+'px';
				stage.scaleX = pRatio*sRatio;			
				stage.scaleY = pRatio*sRatio;			
				lastW = iw; lastH = ih; lastS = sRatio;            
				stage.tickOnUpdate = false;            
				stage.update();            
				stage.tickOnUpdate = true;		
			}
		}
		makeResponsive(true,'width',false,1);	
		AdobeAn.compositionLoaded(lib_planhealth.properties.id);
		planhealthStartAnimation();
	}//end plan health ini

//initialize reflection index animation
	function init_refindex() {
		var refindex_canvas, stage, exportRoot;
		refindex_canvas = document.getElementById("refindex_canvas");
		var refindex_comp=AdobeAn.getComposition("A6640A43738146819E3E5CD9D6CC17C2");
		var lib_refindex=refindex_comp.getLibrary();
		refindexHandleComplete();
	}
	function refindexHandleComplete() {
		//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
		var refindexStartAnimation;
		var refindex_comp=AdobeAn.getComposition("A6640A43738146819E3E5CD9D6CC17C2");
		var lib_refindex=refindex_comp.getLibrary();
		var ss=refindex_comp.getSpriteSheet();
		exportRoot = new lib_refindex.refindex();
		stage = new lib_refindex.Stage(refindex_canvas);	
		//Registers the "tick" event listener.
		refindexStartAnimation = function() {
			stage.addChild(exportRoot);
			createjs.Ticker.setFPS(lib_refindex.properties.fps);
			createjs.Ticker.addEventListener("tick", stage);
		}
		//Code to support hidpi screens and responsive scaling.
		function makeResponsive(isResp, respDim, isScale, scaleType) {		
			var lastW, lastH, lastS=1;		
			window.addEventListener('resize', resizeCanvas);		
			resizeCanvas();		
			function resizeCanvas() {
				var refindex_canvas_container = document.getElementById("refindex_canvas_container");	
				var w = lib_refindex.properties.width, h = lib_refindex.properties.height;			
				var iw = refindex_canvas_container.offsetWidth, ih=window.innerHeight;			
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
				refindex_canvas.width = w*pRatio*sRatio;			
				refindex_canvas.height = h*pRatio*sRatio;
				refindex_canvas.style.width =  w*sRatio+'px';				
				refindex_canvas.style.height = h*sRatio+'px';
				stage.scaleX = pRatio*sRatio;			
				stage.scaleY = pRatio*sRatio;			
				lastW = iw; lastH = ih; lastS = sRatio;            
				stage.tickOnUpdate = false;            
				stage.update();            
				stage.tickOnUpdate = true;		
			}
		}
		makeResponsive(true,'width',false,1);	
		AdobeAn.compositionLoaded(lib_refindex.properties.id);
		refindexStartAnimation();
	}//end reflection index ini

//END - Animate CC triggers

});/* close document.ready */
