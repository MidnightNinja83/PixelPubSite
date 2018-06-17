require('waypoints/lib/jquery.waypoints.min');
require('howler/dist/howler');

/***************************************************************************************/
// Frontpage
/***************************************************************************************/

$(document).ready(function() {
	$(window).scroll(function() {
		// Bouncing arrow fade out
    	$('.arrow').css('opacity', 1 - $(window).scrollTop() / 250); 
	});
});

var wtnPlaylist = new Howl({
  src: ['../media/wtnpodcast/ep43-we-talk-e3-2018.mp3'],
  html5: true,
  buffer: true,
  onloaderror: logErr
});

wtnPlaylist.on('load', () => {
	$('#switchLbl').prop('title', 'Play/Pause Latest Episode');
	$('#classSlider').css('background-color', '#0f0');
	$('#playSlider')[0].disabled = false;
});

function logErr(id, err) {
	//window.alert(err);
	console.log(`media failed to load - howler onloaderror: ${err}`);
}

function togglePlay() {
	var $elem = $('#player').children(':first');
	$elem.stop()
	.show()
	.animate({'marginTop':'-75px','marginLeft':'-75px','width':'50px','height':'50px','opacity':'0'}, () => {
		$elem.css({'width':'100px','height':'100px','margin-left':'-50px','margin-top':'-50px','opacity':'1','display':'none'});
	});
	$elem.parent().append($elem);
}

var gameIconsTable = $('#ppIntroTbl').waypoint({
	handler: function(direction) {
		if (direction === 'down') {
			$('#gameIconsTbl').show('drop');
		}
	},
	offset: 250
});

$('#playSlider').change(() => {
	if ($('#playSlider')[0].checked) {
		wtnPlaylist.play();
	}
	else {
		wtnPlaylist.pause();
	}
	togglePlay();
});