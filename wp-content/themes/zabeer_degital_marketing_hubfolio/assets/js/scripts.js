
jQuery(function () {

    "use strict";
    
    jQuery(function () {

        var equalWidth = jQuery(".brand-ds .item").outerWidth();

        jQuery(".brand-ds .item").css({
            "height": equalWidth
        });

    }); 

    var testim = new Swiper(".testimonials-ds .testim-swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 1500,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    var workswip = new Swiper(".works-ds .work-swiper", {
        slidesPerView: "auto",
        spaceBetween: 30,
        speed: 1500,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        pagination: {
            el: ".works-ds .swiper-pagination",
            clickable: true,
        },

        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: "auto",
            },
        },
    });

    jQuery('#monthly-input').on('change', function() {
        jQuery(".monthly_price").show();
        jQuery(".monthly_price").siblings(".yearly_price").hide();
    });
    jQuery('#yearly-input').on('change', function() {
        jQuery(".yearly_price").show();
        jQuery(".yearly_price").siblings(".monthly_price").hide();
    });


    jQuery('.accordion .accordion-item').on('click', function() {
        jQuery(this).addClass("active").siblings().removeClass("active");
    });


});