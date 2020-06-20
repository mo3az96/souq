$(window).on('load', function () {
    $('.pre-loader').fadeOut("500", function () {
        $('body').removeClass("overflow");
        $(this).remove();
    });
});
$(document).ready(function () {
    $(window).scroll(function () {
        $(this).scrollTop() >= 500 ? $(".arro_top").addClass("active") : $(".arro_top").removeClass("active");
    });
    $(".arro_top").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1500);
    });
    /////////Main Slider/////////
    $('.main-slider').owlCarousel({
        items: 1,
        margin: 30,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        dots: true,
        nav: true,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
    });
    /////////cats Slider/////////
    if ($(window).width() <= 1200) {
        $(".cats").addClass("cats-slider");
        $(".cats-slider").addClass("owl-carousel");
        $(".cats-slider").removeClass("cats");
    }
    $('.cats-slider').owlCarousel({
        margin: 30,
        rtl: document.dir == 'rtl' ? true : false,
        dots: true,
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
            },
            767: {
                items: 3,
            },
        }
    });
    /////////cats Slider/////////
    if ($(window).width() <= 1200) {
        $(".products").addClass("products-slider");
        $(".products-slider").addClass("owl-carousel");
        $(".products-slider").removeClass("products");
        $(".mo-cats").wrap("<div class='mo-cats-mobile'></div>");
        $('.banner-products .sec-head').click(function (e) {
            $(this).parents(".banner-products").find(".mo-cats-mobile").slideToggle(300)
            $(this).toggleClass("active")
        });
    }
    $('.products-slider').owlCarousel({
        margin: 30,
        rtl: document.dir == 'rtl' ? true : false,
        dots: true,
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
            },
            992: {
                items: 3,
            },
        }
    });

    ///////////acc///
    if ($(window).width() <= 767) {
        $(".nav-foot-header").addClass("mo-accordion");
        $(".nav-foot").addClass("mo-panel");
    }
    $('.mo-accordion').click(function () {
        var x = $(this).siblings().prop('scrollHeight') + 12 + "px";
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('max-height') == '0px') {
            $(this).siblings().css('max-height', x);
            $(this).siblings('.nav-foot').css('padding-top', "15px");
        } else {
            $(this).siblings().css('max-height', '0');
            $(this).siblings('.nav-foot').css('padding-top', "0");
        }

        $(".mo-accordion").not(this).siblings().css('max-height', '0');
        $(".mo-accordion").not(this).siblings('.nav-foot').css('padding-top', "0");
    })
    //search//
    if ($(window).width() <= 992) {
        $('.mo-search-icon').click(function () {
            $(".search-form").fadeIn(300);
            $(".search-cont").addClass("open");
            $("body").addClass("overflow");
        });
        $('.search-form').click(function () {
            $("body").removeClass("overflow");
            $(".search-cont").removeClass("open");
            $(".search-form").fadeOut(400);
        });
        $('.search-cont').click(function (e) {
            e.stopPropagation();
        });
        ///////////////menu/////////////////////
        $('.mo-menu-icon').click(function () {
            $("nav").fadeIn(300);
            $(".mo-navbar").addClass("nav-in");
            $("body").addClass("overflow");
        });

        $('nav').click(function () {
            $("nav").fadeOut(400);
            $(".mo-navbar").removeClass("nav-in");
            $("body").removeClass("overflow");
        });
        $('.mo-navbar').click(function (e) {
            e.stopPropagation();
        });
        $('.mo-menu-close').click(function () {
            $("nav").fadeOut(400);
            $(".mo-navbar").removeClass("nav-in");
            $("body").removeClass("overflow");
        });
    }
});