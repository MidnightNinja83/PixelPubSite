$(document).on('click', '#game1Icon', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $('#picGame1').offset().top
    }, 500);
});

$(document).on('click', '#game2Icon', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $('#picGame2').offset().top
    }, 500);
});

$(document).on('click', '#game3Icon', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $('#picGame3').offset().top
    }, 500);
});
