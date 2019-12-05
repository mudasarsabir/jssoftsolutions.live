$(document).ready(function ($) {
    if (screen.width > 1024) {
        AOS.init({
            easing: 'ease-in-out-sine',
            once: true,
        });
    }

    $('.mycounter').countUp();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrolltop:hidden').stop(true, true).fadeIn();
        } else {
            $('.scrolltop').stop(true, true).fadeOut();
        }

        // if ($(this).scrollTop() > 100) {
        //     $('header').addClass('fixed-top');
        // } else {
        //     $('header').removeClass('fixed-top');
        // }
    });

    $(".scroll").click(function () {
        $("html,body").animate({
            scrollTop: $(".top").offset().top
        }, "1000");
        return false
    });

});