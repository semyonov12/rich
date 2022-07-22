$(document).ready(function () {
	$('.how__slider').slick({
		infinite: true,
		slidesToShow: 4,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 1000,
		responsive: [
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 567,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	});
	new WOW().init();

	
});

$('.who__bg-item1').click(function () {
	$('.who__img').css('background', 'url(img/1.jpg)');
	$('.who__bg-item-circle').removeClass('a');
	$(this).find('.who__bg-item-circle').addClass('a');
});
$('.who__bg-item2').click(function () {
	$('.who__img').css('background', 'url(img/2.jpg)');
	$('.who__bg-item-circle').removeClass('a');
	$(this).find('.who__bg-item-circle').addClass('a');
});
$('.who__bg-item3').click(function () {
	$('.who__img').css('background', 'url(img/3.jpg)');
	$('.who__bg-item-circle').removeClass('a');
	$(this).find('.who__bg-item-circle').addClass('a');
});
$('.who__bg-item4').click(function () {
	$('.who__img').css('background', 'url(img/4.jpg)');
	$('.who__bg-item-circle').removeClass('a');
	$(this).find('.who__bg-item-circle').addClass('a');
});
$('.who__bg-item5').click(function () {
	$('.who__img').css('background', 'url(img/5.jpg)');
	$('.who__bg-item-circle').removeClass('a');
	$(this).find('.who__bg-item-circle').addClass('a');
});
$('.who__bg-item6').click(function () {
	$('.who__img').css('background', 'url(img/6.jpg)');
	$('.who__bg-item-circle').removeClass('a');
	$(this).find('.who__bg-item-circle').addClass('a');
});
$('.who__bg-item7').click(function () {
	$('.who__img').css('background', 'url(img/7.jpg)');
	$('.who__bg-item-circle').removeClass('a');
	$(this).find('.who__bg-item-circle').addClass('a');
});
$('.who__bg-item8').click(function () {
	$('.who__img').css('background', 'url(img/8.jpg)');
	$('.who__bg-item-circle').removeClass('a');
	$(this).find('.who__bg-item-circle').addClass('a');
});
$('.who__bg-item9').click(function () {
	$('.who__img').css('background', 'url(img/9.jpg)');
	$('.who__bg-item-circle').removeClass('a');
	$(this).find('.who__bg-item-circle').addClass('a');
});
$('.who__bg-item10').click(function () {
	$('.who__img').css('background', 'url(img/10.jpg)');
	$('.who__bg-item-circle').removeClass('a');
	$(this).find('.who__bg-item-circle').addClass('a');
});
$('.who__bg-item11').click(function () {
	$('.who__img').css('background', 'url(img/11.jpg)');
	$('.who__bg-item-circle').removeClass('a');
	$(this).find('.who__bg-item-circle').addClass('a');
});
$('.who__bg-item12').click(function () {
	$('.who__img').css('background', 'url(img/12.jpg)');
	$('.who__bg-item-circle').removeClass('a');
	$(this).find('.who__bg-item-circle').addClass('a');
});
$('.who__bg-item13').click(function () {
	$('.who__img').css('background', 'url(img/13.jpg)');
	$('.who__bg-item-circle').removeClass('a');
	$(this).find('.who__bg-item-circle').addClass('a');
});
$('.who__bg-item14').click(function () {
	$('.who__img').css('background', 'url(img/14.jpg)');
	$('.who__bg-item-circle').removeClass('a');
	$(this).find('.who__bg-item-circle').addClass('a');
});
$('.who__bg-item15').click(function () {
	$('.who__img').css('background', 'url(img/15.jpg)');
	$('.who__bg-item-circle').removeClass('a');
	$(this).find('.who__bg-item-circle').addClass('a');
});
$('.who__bg-item16').click(function () {
	$('.who__img').css('background', 'url(img/16.jpg)');
	$('.who__bg-item-circle').removeClass('a');
	$(this).find('.who__bg-item-circle').addClass('a');
});


let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
	// We execute the same script as before
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
});
