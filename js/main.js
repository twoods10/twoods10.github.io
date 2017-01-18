$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 250;             // set to whatever you want it to be

    if(y_scroll_pos > scroll_pos_test) {
        $('#steps').addClass('afterScroll');//do stuff
        $('#order_1, #order_2, #order_3').addClass('flip');
    }
});

$('.hamburger').on('click', function (e) {
	e.preventDefault();

	$('.sidebar').addClass('active');

    // Type code related to event here! :)
    
});
$('.close').on('click', function (e) {

	e.preventDefault();
	$('.sidebar').removeClass('active');
    // Type code related to event here! :)
    
});

$('.grade').on('click', function (e) {
	e.preventDefault();

	$('.subject').hide();
	$('.third_ELA').hide();
	$('.third_math').hide();

	$(this).parent().next('.subject').show();
    // Type code related to event here! :)
    
});
$('.math').on('click', function (e) {
	e.preventDefault();

	$('.third_ELA').hide();
	$(this).parent().find('.third_math').show();
    // Type code related to event here! :)
    
});
$('.ELA').on('click', function (e) {
	e.preventDefault();

	$('.third_math').hide();

	$(this).parent().find('.third_ELA').show();
    // Type code related to event here! :)
    
});

// $('h3').on('mouseenter', function () {
// 	$('p').fadeIn(300);
// })



