require('waypoints/lib/jquery.waypoints.min');

var gameIconsTable = $('#ppIntroTbl').waypoint({
	handler: function(direction) {
		if (direction === 'down') {
			$('#gameIconsTbl').show('drop');
		}
	},
	offset: 200
});