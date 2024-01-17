$('.closer-big, .close-up').click(function(){
     $(this).parents('.b-popup').fadeOut(200);
});

$('.closer-big-all, .close-up-all').click(function(){
    $('.b-popup').fadeOut(200);
});

$('.button').click(function(){
	var popup = $(this).attr('data-popup');
	$('#'+popup).fadeIn(100).css({'display':'flex'});
})
	
$(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
		$('.totop').fadeIn();
	} else {
		$('.totop').fadeOut();}
	});
		$('.totop').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});
});

$('form').submit(function () {
	var formID = $(this).attr('id');
	var formNm = $('#' + formID);
	$.ajax({
		type: 'POST',
		url: '/mail.php',
		data: formNm.serialize(),
		success: function (data) {
				$('.container_active').removeClass('container_active');
		}
	});
	$('input[type="submit"]').attr('disabled', 'disabled');
	setTimeout(function() { $('input[type="submit"]').attr('disabled', false); }, 10000);
   return false;
});

$('.cooperation__slider').slick({
	  slidesToShow: 6,
	  slidesToScroll: 6,
	  arrows: true,
	  dots:false,
	  responsive: [
	  {
			breakpoint: 1210,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		]
	});

$('.infoblock__info-file input[type=file]').on('change', function(){
	let file = this.files[0];
	$(this).closest('.infoblock__info-file').find('.infoblock__info-filetext').html(file.name);
});

$('.course__menu-one').click(function(){
	var id = $(this).attr('data-id');
	$('.block-tab').removeClass('block-tab_active');
	$('#'+id).addClass('block-tab_active');
	if (!$(this).hasClass('course__menu-one_active')) {
		$('.course__menu-one').removeClass('course__menu-one_active');
		$(this).addClass('course__menu-one_active');
	}
})

$('.question').click(function(){
	if ($(this).hasClass('question_active')) {
		$($(this)).removeClass('question_active');
	} else {
		$(this).addClass('question_active');
	}
})

$('.skill__title-second').click(function(){
	$(this).removeClass('skill__title-second');
	$('.skill__sidebar-menu-main').fadeIn();
	$('.skill__sidebar-menu-second').fadeOut();
})