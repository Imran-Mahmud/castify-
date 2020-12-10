$(function () {


    // Smooth Scroll

    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr('tabindex', '-1');
                            $target.focus();
                        };
                    });
                }
            }
        });

    //        Banner slider



    // shop slick slider

    $('.shop_slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        infinite: true,
        nav: false,
        speed: 600,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }

  ]
    });



    // casetify slick slider

    $('.recommend_slider').slick({
        dots: false,
        arrows: true,
        autoplay: true,
        infinite: true,
        nav: false,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: '<i class="fas fa-chevron-right nxt_arrow"></i>',
        prevArrow: '<i class="fas fa-chevron-left pre_arrow"></i>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    }, {
                breakpoint: 850,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
 },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }

  ]
    });

    //mean menu
    jQuery(document).ready(function () {
       $('#mobile-menu').meanmenu(
	  {
		meanScreenWidth: "991",
		meanMenuContainer: 'body',
    });
    });

    // scroll top 


    $(".scroll_top").click(function () {
        $("html,body").animate({
            scrollTop: 0,
        }, 800);
    });
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 200) {
            $(".scroll_top").fadeIn();
        } else {
            $(".scroll_top").fadeOut();
        }
    });

    // Closes responsive menu when a scroll link is clicked

    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Wow js

    new WOW().init();

});
