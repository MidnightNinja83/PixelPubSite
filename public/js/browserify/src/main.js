require('arrive');

$(document).arrive('td', function () {
	$('#gameIconsTbl').effect('bounce', { times: 3 }, 3000);
});

$(document).arrive('#test-sites select[class="form-control"] option:first-child', function () {
	let envName = $(this).val();
	$(this).parent().parent().parent().find('.test-progress').attr('id', envName);
});
