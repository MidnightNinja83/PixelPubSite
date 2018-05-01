
/***************************************************************************************/
// YouTube API
/***************************************************************************************/

var player;

function createYTPlayer() {
    if (typeof(YT) == 'undefined' || typeof(YT.Player) == 'undefined') {
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
}

function loadYTPlayer(ytId) {
    window.onYouTubePlayerAPIReady = function() {
        player = new YT.Player('header-video__video-element', {
			videoId: ytId,
			events: {
				'onReady': onPlayerReady
			}
		});
    };
}

function onPlayerReady(event) {
	event.target.playVideo();
	event.target.mute();
}

/***************************************************************************************/

$(document).ready(function() {
	// Initialize YT Player
	createYTPlayer();

	// Scroll to video top
	$('html, body').animate({
        scrollTop: $('.header-video').offset().top
    }, 500);

	$(window).scroll(function() {
		var scrollTop = $(this).scrollTop();

		// Bouncing arrow fade out
    	$('.arrow').css('opacity', 1 - $(window).scrollTop() / 250); 

    	// fadeIn elements on scroll
    	$('.fadeIn').each(function(i) {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},1000);
            }
        });
	});

	// Fade in/out text over video
	$('#1inOut').fadeIn(2000).removeClass('hidden').delay(6000).fadeOut(4000);
  	$('#2inOut').fadeIn(4000).removeClass('hidden').delay(4000).fadeOut(4000);
  	$('#3inOut').fadeIn(6000).removeClass('hidden').delay(2000).fadeOut(4000);
   	
   	// Setup the iframe for each video on the page
    $('.header-video').each(function(i, elem) {
        headerVideo = new HeaderVideo({
            element: elem,
            media: '.header-video__media'
        });
    });
});

var HeaderVideo = function(settings) {
    if (settings.element.length === 0) {
        return;
    }
    this.init(settings);
};

HeaderVideo.prototype.init = function(settings) {
    this.$element = $(settings.element);
    this.settings = settings;
    this.videoDetails = this.getVideoDetails();

    this.setFluidContainer();
    this.bindUIActions();
    loadYTPlayer(this.videoDetails.videoId);
};

HeaderVideo.prototype.bindUIActions = function() {
    var that = this;
    that.appendIframe();
};

HeaderVideo.prototype.appendIframe = function() {
    var html = '<iframe id="header-video__video-element" src="'+this.videoDetails.videoURL+'?rel=0&amp;hd=1&autohide=1&showinfo=0&enablejsapi=1&origin=*" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
    this.$element.append(html);
};

HeaderVideo.prototype.setFluidContainer = function() {
    var element = this.$element;
    element.data('aspectRatio', this.videoDetails.videoHeight / this.videoDetails.videoWidth);

    $(window).resize(function() {
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();

        element.width(Math.ceil(windowWidth));
        element.height(Math.ceil(windowWidth * element.data('aspectRatio'))); //Set the videos aspect ratio, see https://css-tricks.com/fluid-width-youtube-videos/

        if(windowHeight < element.height()) {
            element.width(Math.ceil(windowWidth));
            element.height(Math.ceil(windowHeight));
        }
    }).trigger('resize');
};

HeaderVideo.prototype.getVideoDetails = function() {
    var mediaElement = $(this.settings.media);

    return {
    	videoId: mediaElement.attr('yt-video-id'),
        videoURL: mediaElement.attr('data-video-URL'),
        teaser: mediaElement.attr('data-teaser'),
        videoHeight: mediaElement.attr('data-video-height'),
        videoWidth: mediaElement.attr('data-video-width')
    };
};