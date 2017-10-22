require('waypoints/lib/jquery.waypoints.min');
require('howler/dist/howler');

var wtnPlaylist = new Howl({
  src: ['../media/wtnpodcast/ep10-destiny2-giveaway.mp3']
});

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