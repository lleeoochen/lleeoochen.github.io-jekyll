$(function() {
	const isDarkTheme = localStorage.getItem('isDarkTheme') !== 'false';
	$('body').toggleClass('dark', isDarkTheme);
	$('body').toggleClass('hidden', false);
});


$('.theme-icon').on('click', () => {
	$('body').toggleClass('dark');
	localStorage.setItem('isDarkTheme', $('body').hasClass('dark'));
});

anime({
	targets: '.container-main',
	easing: 'easeInOutQuart',
	top: 0,
	opacity: 1,
	duration: 1000
});
