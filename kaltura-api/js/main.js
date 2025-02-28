$(document).ready(function() {

	// site preloader
    $(window).load(function(){
        $('#preloader').fadeOut('slow',function(){$(this).remove();});
        $('#hover-preload').fadeOut('fast',function(){$(this).remove();});
    });

	
	kWidget.addReadyCallback(function(playerId){
		
		var kdp = document.getElementById(playerId); // add a local ref to the kdp

		
		// ===  DIRECT TRACK SELECTION BUTTONS ======== >

		$( '.changeIndex' ).click(function(){
			kdp.setKDPAttribute("playlistAPI.dataProvider", "selectedIndex", $(this).attr('data-selectedIndex') );
			disableBtn( $(this).attr('data-selectedIndex') );
		});


		// ===  PREVIOUS TRACK SELECTION BUTTON ======== >

		// $( '#previous' ).click(function(){
		// 	var crntVid = kdp.evaluate( "{playlistAPI.dataProvider.selectedIndex}" );
		// 	crntVid --;
		// 	kdp.setKDPAttribute("playlistAPI.dataProvider", "selectedIndex", crntVid );
		// 	disableBtn( crntVid );
		// });


		// ===  NEXT TRACK SELECTION BUTTON ======== >

		// $( '#next' ).click(function(){
		// 	var crntVid = kdp.evaluate( "{playlistAPI.dataProvider.selectedIndex}" );
		// 	crntVid ++;
		// 	kdp.setKDPAttribute("playlistAPI.dataProvider", "selectedIndex", crntVid );
		// 	disableBtn( crntVid );
		// });


		// ===  TRIGGER disableBtn FUNCTION WHEN END OF VIDEO AUTOPLAYS NEXT VIDEO ======== >

		kdp.kBind( 'playlistPlayNext', function(){
			var crntVid = kdp.evaluate( "{playlistAPI.dataProvider.selectedIndex}" );
			disableBtn( crntVid );
		});


		// ===  TRIGGER disableBtn FUNCTION WHEN FIRST VIDEO IS PLAYED ======== >

		kdp.kBind( 'playlistFirstEntry', function(){
			var crntVid = kdp.evaluate( "{playlistAPI.dataProvider.selectedIndex}" );
			disableBtn( crntVid );
		});



		// kdp.kBind( 'unmute', function(){
		// 	$( '.btn-unmute' ).fadeOut( "slow" );
		// 	kdp.kUnbind('unmute');
		// });
		// $( '.btn-unmute' ).click(function(){
		// 	kdp.sendNotification("changeVolume", 1);
		// 	kdp.setKDPAttribute("playlistAPI.dataProvider", "autoMute", false );
			// $( this ).fadeOut( "slow" );
		// });


		// ===  DISABLE SELECTION BUTTONS AS NECESSARY  ======== >

		function disableBtn(crntIndex) {
			
			$( '.pager' ).prop('disabled', false);
			$( '.changeIndex' ).prop('disabled', false);
			
			if (crntIndex == 0) {
				$( '#previous' ).prop('disabled', true);
				$( '#index0' ).prop('disabled', true);
			} else if (crntIndex == 1) {
				$( '#index1' ).prop('disabled', true);
			} else if (crntIndex == 2) {
				$( '#index2' ).prop('disabled', true);
			} else {
				$( '#next' ).prop('disabled', true);
				$( '#index3' ).prop('disabled', true);
			} // changes may be necessary here based on number of selections in playlist (currently set up for 4 videos)

		};

		
		// ===  PLAY / PAUSE TOGGLE BUTTON ======== >

		var notification = "doPlay";

		kdp.kBind( 'playerPlayed', function(){
		    notification = "doPause";
		    var playToggle = document.getElementById('playToggle');
		    playToggle.classList.remove('play');
		    playToggle.classList.add('pause');
	    });
		
		kdp.kBind( 'playerPaused', function(){
		    notification = "doPlay";
		    var playToggle = document.getElementById('playToggle');
		    playToggle.classList.remove('pause');
		    playToggle.classList.add('play');
	    });

		$('#playToggle').click(function(){
			kdp.sendNotification( notification );
		});


		// ===  CC TOGGLE BUTTON ======== >

		var ccNote = "showClosedCaptions"; 
		//first button click does this

		kdp.kBind( 'closedCaptionsHidden', function(){
		    ccNote = "showClosedCaptions";
		    var ccToggle = document.getElementById('ccToggle');
		    ccToggle.classList.remove('hidecc');
		    ccToggle.classList.add('showcc');
	    }); 
	    //When captions are hidden...
		
		kdp.kBind( 'closedCaptionsDisplayed', function(){
		    ccNote = "hideClosedCaptions";
		    var ccToggle = document.getElementById('ccToggle');
		    ccToggle.classList.remove('showcc');
		    ccToggle.classList.add('hidecc');
	    }); 
	    //When captions are turned on....

		$('#ccToggle').click(function(){
			kdp.sendNotification( ccNote );
		});


		// ===  SEEK BUTTONS ======== >

		$('#back').click(function(){
			bCurrTime = kdp.evaluate( "{video.player.currentTime}" );
			bCurrTime = bCurrTime - 10;
			kdp.sendNotification( 'doSeek', bCurrTime );
		});

		$('#forward').click(function(){
			fCurrTime = kdp.evaluate( "{video.player.currentTime}" );
			fCurrTime = fCurrTime + 10;
			kdp.sendNotification( 'doSeek', fCurrTime );
		});


		// ===  TIMER / Current progress bar ======== >		

		kdp.kBind( 'monitorEvent', function(){
			var currTime = (kdp.evaluate( "{video.player.currentTime}" )).toFixed(0);
			var currMin = Math.floor(currTime / 60);
			var currSec = currTime - currMin * 60;
			var totalTime = (kdp.evaluate( "{duration}" )).toFixed(0);
			var totalMin = Math.floor(totalTime / 60);
			var totalSec = totalTime - totalMin * 60;

			// var fCurrTime = currMin + ':' + currSec;
			// var fTotalTime = totalMin + ':' + totalSec;

			var fCurrTime = str_pad_left(currMin,'0',2)+':'+str_pad_left(currSec,'0',2);
			var fTotalTime = str_pad_left(totalMin,'0',2)+':'+str_pad_left(totalSec,'0',2);

			$( "#timer" ).html( fCurrTime + " / " + fTotalTime );

			var currTimeRaw = kdp.evaluate( "{video.player.currentTime}" );
			var totalTimeRaw = kdp.evaluate( "{duration}" );
			var vid_percent = (currTimeRaw / totalTimeRaw) * 100;

			$( "input.changeIndex:disabled" ).css("background-size", vid_percent+"% " +"100%");
		});

		//TIMER utility function - formats timecode
		function str_pad_left(string,pad,length) {
		    return (new Array(length+1).join(pad)+string).slice(-length);
		}


	}); // END addReadyCallback


	// ===  PLAYLIST EMBED ======== >
	// build playlist on kaltura site and update playlist id below

	kWidget.embed( 'kaltura_player', { // target element id
		'wid' : '_1234081', // partner id
		'uiconf_id': '37494541', // player interface id
		"flashvars": {
		    "streamerType": "auto",
		    'controlBarContainer.plugin': false, // hide player interface
		    "playlistAPI": {
		    	"kpl0Id" : "1_pqjjyyic", // playlist id
				"includeInLayout" : false,
				"showControls" : false,
				"includeHeader" : false,
				"autoContinue" : true,
				// "autoPlay" : true,
				// "autoMute" : true,
				"loop" : false
			},
			// "autoMute" : true,
			"closedCaptions" : {
				"displayCaptions" : true
			}
		}
	}); // END playlist embed


});  // END document.ready

/* Thanks to CSS Tricks for pointing out this bit of jQuery
http://css-tricks.com/equal-height-blocks-in-rows/
It's been modified into a function called at page load and then each time the page is resized. One large modification was to remove the set height before each new calculation. 
LINK TO CODEPEN - https://codepen.io/micahgodbolt/pen/FgqLc */

equalheight = function(container){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}

$(window).load(function() {
  equalheight('.eq-height .eq-col');
});


$(window).resize(function(){
  equalheight('.eq-height .eq-col');
});