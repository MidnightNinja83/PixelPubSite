require('waypoints/lib/jquery.waypoints.min');

var gameIconsTable = $('#ppIntroTbl').waypoint({
	handler: function(direction) {
		if (direction === 'down') {
			$('#gameIconsTbl').show('drop');
		}
	},
	offset: 250
});

var firstProfile = $('#ppb').waypoint({
	handler: function(direction) {
		if (direction === 'down') {
			$('#ppProfileTblRow1').show('slide');
		}
	},
	offset: -50
});

var secondProfile = $('#ppb').waypoint({
	handler: function(direction) {
		if (direction === 'down') {
			$('#ppProfileTblRow2').show('slide');
		}
	},
	offset: -400
});

var thirdProfile = $('#ppb').waypoint({
	handler: function(direction) {
		if (direction === 'down') {
			$('#ppProfileTblRow3').show('slide');
		}
	},
	offset: -900
});

var fourthProfile = $('#ppb').waypoint({
	handler: function(direction) {
		if (direction === 'down') {
			$('#ppProfileTblRow4').show('slide');
		}
	},
	offset: -1400
});