// Home Page 1 

// Home Page 1 

$(function () {
    var owl = $('.services-con .owl-carousel');

    function initializeCarousel(marginValue) {
        owl.owlCarousel('destroy'); // Destroy existing instance if any
        owl.owlCarousel({
            margin: marginValue,
            nav: false,
            loop: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 4500,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
    }

    function adjustMargin() {
        if (window.innerWidth <= 1200) {
            initializeCarousel(15);
        } else if (window.innerWidth <= 991) {
            initializeCarousel(20);
        } else {
            initializeCarousel(30); // Default margin for larger screens
        }
    }

    // Initial call to set the correct margin
    adjustMargin();

    // Adjust carousel on window resize
    $(window).on('resize', function () {
        adjustMargin();
    });
});



$(document).ready(function () {
    var owl = $('.testimonials-con .owl-carousel');
    owl.owlCarousel({
        margin: 30,
        nav: false,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4500,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            }
        }
    })
})