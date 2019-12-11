(function($) {
    "use strict";


    // main-slider
    $('.main-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        navText: false,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });

    //portfolio
    $('.portfolio').owlCarousel({
        loop: true,
        margin: 20,
        items: 4,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            767: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });
    //portfolio
    $('.clients-logo').owlCarousel({
        loop: true,
        margin: 50,
        items: 5,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            767: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    });
    //portfolio
    $('.testimonial-slider').owlCarousel({
        loop: true,
        margin: 50,
        items: 2,
        navText: false,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            767: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    });


    // One Page Nav
    var top_offset = $('header').height() - 10;
    $('#active-sticky').onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset,
    });



    // STICKY ACTIVE
    var activeSticky = $('#active-sticky'),
        winD = $(window);
    winD.on('scroll', function() {
        var scroll = $(window).scrollTop(),
            isSticky = activeSticky;
        if (scroll < 1) {
            isSticky.removeClass("is-sticky");
        } else {
            isSticky.addClass("is-sticky");
        }
    });




    // STICKY ACTIVE
    var activeStickyA = $('.navbar-brand'),
        winDa = $(window);
    winDa.on('scroll', function() {
        var scrolla = $(window).scrollTop(),
            isStickya = activeStickyA;
        if (scrolla < 1) {
            isStickya.removeClass("w-auto");
        } else {
            isStickya.addClass("w-auto");
        }
    });





    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 1) {
            $('.navbar-brand img').attr('src', "assets/img/logo.png");
        } else {

            $('.navbar-brand img').attr('src', "assets/img/transparent-logo.png");
        }
    });




    // Scroll UP
    $.scrollUp({
        scrollText: '<i class="fas fa-angle-up"></i>', // Text for element, can contain HTML
        scrollSpeed: 800
    });


    // Window Load function
    jQuery(window).on('load', function() {
        // Preloader
        var preeLoad = $('#fadeout');
        preeLoad.fadeOut(1000);
    });

    $('.animate-border').click(function() {

        $('.animate-border').removeClass('active');
        $(this).addClass('active');
    });

    // venobox
    $('.venobox').venobox({

    });


})(jQuery);