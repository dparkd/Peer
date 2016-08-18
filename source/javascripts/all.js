$(document).ready(function() {
	$('.play-video').on('click', function() {
		$('.play-video').css('z-index', '0');
		$('.video').addClass('show-video');
		$('.video-frame').attr('src', 'https://player.vimeo.com/video/179221793?autoplay=1'); 
	})

	$('.close-video').on('click', function() {
		$('.play-video').css('z-index', '9999');
		$('.video').removeClass('show-video');
		$('.video-frame').attr('src', ' ');
	})
});