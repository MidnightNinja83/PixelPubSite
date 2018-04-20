(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
$(document).ready(function() {
    $(window).scroll(function() {
        // Bouncing arrow fade out
        $('.arrow').css('opacity', 1 - $(window).scrollTop() / 250); 
    });
});

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
},{}]},{},[1]);
