(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}]},{},[1]);
