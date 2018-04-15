/*========================================================================================*/

$('#game1').mouseover(function() {
    let offset = $(this).offset();
    $("#game1txt").css({top: offset.top, left: offset.left, position:'absolute'});
    $('#game1txt').fadeIn(4000).removeClass('hidden');
});

$('#game2').mouseover(function() {
    let offset = $(this).offset();
    $("#game2txt").css({top: offset.top, left: offset.left, position:'absolute'});
    $('#game2txt').fadeIn(4000).removeClass('hidden');
});

$('#game3').mouseover(function() {
    let offset = $(this).offset();
    $("#game3txt").css({top: offset.top, left: offset.left, position:'absolute'});
    $('#game3txt').fadeIn(4000).removeClass('hidden');
});

/*========================================================================================*/

$('#game1').mouseleave(function() {
    $('#game1txt').addClass('hidden');
});

$('#game2').mouseleave(function() {
    $('#game2txt').addClass('hidden');
});

$('#game3').mouseleave(function() {
    $('#game3txt').addClass('hidden');
});