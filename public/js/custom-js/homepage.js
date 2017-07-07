$(document).on('click', '#game1Icon', event => {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $('#picGame1').offset().top + 175
    }, 500);
});

$(document).on('click', '#game2Icon', event => {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $('#picGame2').offset().top + 175
    }, 500);
});

$(document).on('click', '#game3Icon', event => {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $('#picGame3').offset().top + 175
    }, 500);
});

$(document).on('click', '#twitchIcon', event => {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $('#picTwitch').offset().top + 175
    }, 500);
});

$(document).on('click', '#discordIcon', event => {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $('#picDiscord').offset().top + 175
    }, 500);
});