$(document).ready(function() {
	$('.play-video').on('click', function() {
		$('.video').addClass('show-video');
		$('.video-frame').attr('src', 'https://player.vimeo.com/video/179221793?autoplay=1'); 
	})

	$('.close-video').on('click', function() {
		console.log('hello?')
		$('.video').removeClass('show-video');
		$('.video-frame').attr('src', ' ');
	})
});