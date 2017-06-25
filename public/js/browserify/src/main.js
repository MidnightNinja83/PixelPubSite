require('arrive');

$(document).arrive('td', () => {
	$('#gameIconsTbl').effect('bounce', { times: 3 }, 3000);
});