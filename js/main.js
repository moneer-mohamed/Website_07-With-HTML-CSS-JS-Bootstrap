$(document).ready(function () {

    //loading page
    $(window).on('load', function () {
        $('.loading').fadeOut(2000, function () {
            $('body').css('overflow', 'auto')
        })
    })

    //nav height
    $(".nav-left, #owl-demo .item").height($(window).height());
    $(window).resize(function () {
        $(".nav-left, #owl-demo .item").height($(window).height());
    })

    //toggle between navs
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 40) {
            $('.nav-left').fadeOut(500);
            $('.nav-top').fadeIn(500);
        } else {
            $('.nav-top').fadeOut(500);
            $('.nav-left').fadeIn(500);
        }
    })

    //owl carousel header
    var owl_1 = $(".slider .owl-carousel");

    owl_1.owlCarousel({
        smartSpeed: 450,
        items: 1,
        animateOut: 'fadeOut',
        autoplay: true,
        loop: true,
    });

    //owl carousel brands
    var owl_2 = $(".brands .owl-carousel");

    owl_2.owlCarousel({
        loop: true,
        dots: false,
        responsive: { 0: { items: 2 }, 768: { items: 3 }, 992: { items: 6 } }
    });

    //counter down
    // Set the count down timer
    $(function () {
        if ($('.countdown').length) {
            var count = $('.countdown').data('count');
            var template = $('.countdown').html();
            $('.countdown').countdown(count, function (event) {
                $(this).html(event.strftime(template));
            });
        }
    })

    //button up
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 1000) {
            $('.up').fadeIn()
        } else {
            $('.up').fadeOut()
        }
    })
    $('.up').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000)
    })

    //project-hamburger
    $(function () {
        $('.toggle').on('click', function () {
            $('.side-menu').toggleClass('open')
        })
        $('.side-menu .times').on('click', function () {
            $('.side-menu').removeClass('open')
        })
    })

    //dark mode
    $('.fa-moon').on('click', function () {

        var link = $('link[data-dark="switch"]'),
            logo = $('.logo img');


        if (link.attr('href') == 'css/style.css') {

            link.attr('href', 'css/style-dark.css')

            logo.attr('src', 'images/logo-dark.png')

        } else {

            link.attr('href', 'css/style.css')

            logo.attr('src', 'images/logo.png')
        }

    })

    //wow
    new WOW().init();

    //counting up number
    const counters = document.querySelectorAll('.about .num');
    const delay = 200;

    counters.forEach(counter => {
        const updateCount = () => {
            const target = counter.getAttribute('data-target');
            const count = +counter.innerText;
            const speed = target / delay;

            if (count < target) {
                counter.innerText = Math.floor(count + speed);
                setTimeout(updateCount, 1);
            } else {
                count.innerText = target;
            }
        }

        updateCount();
    })

})