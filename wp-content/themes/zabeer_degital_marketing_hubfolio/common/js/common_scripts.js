/*-----------------------------------------------------------------------------------

    Theme Name: Hubfolio
    Theme URI: http://
    Description: Creative Agency & Portfolio
    Author: Uithemez
    Author URI: http://themeforest.net/user/Uithemez
    Version: 1.0

-----------------------------------------------------------------------------------*/


jQuery(function () {

    "use strict";

    var wind = jQuery(window);

    /* =============================================================================
    -----------------------------  Smooth Scroll nav   -----------------------------
    ============================================================================= */


    jQuery.scrollIt({
        upKey: 38,                // key code to navigate to the next section
        downKey: 40,              // key code to navigate to the previous section
        easing: 'linear',          // the easing function for animation
        scrollTime: 600,          // how long (in ms) the animation takes
        activeClass: 'active',    // class given to the active nav element
        onPageChange: null,       // function(pageIndex) that is called when page is changed
        topOffset: -75            // offste (in px) for fixed top navigation
    });


    /* =============================================================================
    --------------------------------  Navbar Menu   --------------------------------
    ============================================================================= */

    jQuery('.navbar .dropdown').hover(function () {
        jQuery(this).find('.dropdown-menu').addClass('show');
    }, function () {
        jQuery(this).find('.dropdown-menu').removeClass('show')
    });

    jQuery('.navbar .dropdown-item').hover(function () {
        jQuery(this).find('.dropdown-side').addClass('show');
    }, function () {
        jQuery(this).find('.dropdown-side').removeClass('show')
    });

    jQuery(".navbar .search-form").on("click", ".search-icon", function () {

        jQuery(".navbar .search-form").toggleClass("open");

        if (jQuery(".navbar .search-form").hasClass('open')) {

            jQuery(".search-form .close-search").slideDown();

        } else {

            jQuery(".search-form .close-search").slideUp();
        }
    });

    jQuery(".navbar").on("click", ".navbar-toggler", function () {

        jQuery(".navbar .navbar-collapse").toggleClass("show");
    });

    wind.on("scroll", function () {

        var bodyScroll = wind.scrollTop(),
            navbar = jQuery(".navbar"),
            logo = jQuery(".navbar.change .logo> img");

        if (bodyScroll > 300) {

            navbar.addClass("nav-scroll");
            logo.attr('src', 'assets/imgs/logo-dark.png');

        } else {

            navbar.removeClass("nav-scroll");
            logo.attr('src', 'assets/imgs/logo-light.png');
        }
    });

    function noScroll() {
        window.scrollTo(0, 0);
    }

    jQuery('.navbar .menu-icon').on('click', function () {

        jQuery('.hamenu').addClass("open");

        jQuery('.hamenu').animate({ left: 0 });

    });

    jQuery('.hamenu .close-menu, .one-scroll .menu-links .main-menu > li').on('click', function () {

        jQuery('.hamenu').removeClass("open").delay(300).animate({ left: "-100%" });
        jQuery('.hamenu .menu-links .main-menu .dmenu, .hamenu .menu-links .main-menu .sub-dmenu').removeClass("dopen");
        jQuery('.hamenu .menu-links .main-menu .sub-menu, .hamenu .menu-links .main-menu .sub-menu2').slideUp();

    });

    jQuery('.hamenu .menu-links .main-menu > li').on('mouseenter', function () {
        jQuery(this).removeClass('hoverd').siblings().addClass('hoverd');
    });

    jQuery('.hamenu .menu-links .main-menu > li').on('mouseleave', function () {
        jQuery(this).removeClass('hoverd').siblings().removeClass('hoverd');
    });


    jQuery('.main-menu > li .dmenu').on('click', function () {
        jQuery(this).parent().parent().find(".sub-menu").toggleClass("sub-open").slideToggle();
        jQuery(this).toggleClass("dopen");
    });

    jQuery('.sub-menu > ul > li .sub-dmenu').on('click', function () {
        jQuery(this).parent().parent().find(".sub-menu2").toggleClass("sub-open").slideToggle();
        jQuery(this).toggleClass("dopen");
    });


    /* =============================================================================
        ------------------------------  Data Background   ------------------------------
        ============================================================================= */

    jQuery(function () {

        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

        ScrollTrigger.normalizeScroll(false);

        // create the smooth scroller FIRST!
        let smoother = ScrollSmoother.create({
            smooth: 2,
            effects: true,
        });

        let headings = gsap.utils.toArray(".js-title").reverse();
        headings.forEach((heading, i) => {
            let headingIndex = i + 1;
            let mySplitText = new SplitText(heading, { type: "chars" });
            let chars = mySplitText.chars;

            chars.forEach((char, i) => {
                smoother.effects(char, { lag: (i + headingIndex) * 0.1, speed: 1 });
            });
        });

        let splitTextLines = gsap.utils.toArray(".js-splittext-lines");

        splitTextLines.forEach((splitTextLine) => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: splitTextLine,
                    start: "top 90%",
                    duration: 2,
                    end: "bottom 60%",
                    scrub: false,
                    markers: false,
                    toggleActions: "play none none none",
                    // toggleActions: 'play none play reset'
                },
            });

            const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
            gsap.set(splitTextLine, { perspective: 400 });
            itemSplitted.split({ type: "lines" });
            // tl.from(itemSplitted.lines, { y: 100, delay: 0.2, opacity: 0, stagger: 0.1, duration: 1, ease: 'inOut' });
            // tl.from(itemSplitted.lines, { y: 100, opacity: 0, stagger: 0.05, duration: 1, ease: 'back.inOut' });
            tl.from(itemSplitted.lines, {
                duration: 1,
                delay: 0.5,
                opacity: 0,
                rotationX: -80,
                force3D: true,
                transformOrigin: "top center -50",
                stagger: 0.1,
            });
        });

    });


    /* =============================================================================
    ------------------------------  Data Background   ------------------------------
    ============================================================================= */

    var pageSection = jQuery(".bg-img, section");
    pageSection.each(function (indx) {

        if (jQuery(this).attr("data-background")) {
            jQuery(this).css("background-image", "url(" + jQuery(this).data("background") + ")");
        }
    });

    var pageSectionColor = jQuery(".bg-solid-color, section");
    pageSectionColor.each(function (indx) {

        var color = jQuery(this).attr("data-solid-color");

        if (jQuery(this).attr("data-solid-color")) {
            jQuery(this).css("background-color", color);
        }
    });


    /* =============================================================================
    -----------------------------------  Tabs  -------------------------------------
    ============================================================================= */

    jQuery('#tabs .tab-links').on('click', '.item-link', function () {

        var tab_id = jQuery(this).attr('data-tab');

        jQuery('#tabs .tab-links .item-link').removeClass('current');
        jQuery(this).addClass('current');

        jQuery('.tab-content').hide();
        jQuery("#" + tab_id).show();

    });

    jQuery('#tabs-fade .tab-links').on('click', '.item-link', function () {

        var tab2_id = jQuery(this).attr('data-tab');

        jQuery('#tabs-fade .tab-links .item-link').removeClass('current');
        jQuery(this).addClass('current');

        jQuery('.tab-content').fadeOut();
        jQuery("#" + tab2_id).fadeIn();

    });


    /* =============================================================================
    -------------------------------  Progress Bar  ---------------------------------
    ============================================================================= */

    wind.on('scroll', function () {
        jQuery(".skill-progress .progres").each(function () {
            var bottom_of_object =
                jQuery(this).offset().top + jQuery(this).outerHeight();
            var bottom_of_window =
                jQuery(window).scrollTop() + jQuery(window).height();
            var myVal = jQuery(this).attr('data-value');
            if (bottom_of_window > bottom_of_object) {
                jQuery(this).css({
                    width: myVal
                });
            }
        });
    });


    /* =============================================================================
    -----------------------------  Trigger Plugins  --------------------------------
    ============================================================================= */


    /* ========== YouTubePopUp ========== */

    jQuery("a.vid").YouTubePopUp();


});


/* =============================================================================
-----------------------------  cursor Animation  -----------------------------
============================================================================= */

(function () {
    const link = document.querySelectorAll('.hover-this');
    const cursor = document.querySelector('.cursor');
    const animateit = function (e) {
        const hoverAnim = this.querySelector('.hover-anim');
        const { offsetX: x, offsetY: y } = e,
            { offsetWidth: width, offsetHeight: height } = this,
            move = 25,
            xMove = x / width * (move * 2) - move,
            yMove = y / height * (move * 2) - move;
        hoverAnim.style.transform = `translate(jQuery{xMove}px, jQuery{yMove}px)`;
        if (e.type === 'mouseleave') hoverAnim.style.transform = '';
    };
    const editCursor = e => {
        const { clientX: x, clientY: y } = e;
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
    };
    link.forEach(b => b.addEventListener('mousemove', animateit));
    link.forEach(b => b.addEventListener('mouseleave', animateit));
    window.addEventListener('mousemove', editCursor);

    jQuery("a, .cursor-pointer").hover(
        function () {
            jQuery(".cursor").addClass("cursor-active");
        }, function () {
            jQuery(".cursor").removeClass("cursor-active");
        }
    );


    /* =============================================================================
    -----------------------------  Text Animation  -----------------------------
    ============================================================================= */


    let elements = document.querySelectorAll(".rolling-text");

    elements.forEach((element) => {
        let innerText = element.innerText;
        element.innerHTML = "";

        let textContainer = document.createElement("div");
        textContainer.classList.add("block");

        for (let letter of innerText) {
            let span = document.createElement("span");
            span.innerText = letter.trim() === "" ? "\xa0" : letter;
            span.classList.add("letter");
            textContainer.appendChild(span);
        }

        element.appendChild(textContainer);
        element.appendChild(textContainer.cloneNode(true));
    });

    elements.forEach((element) => {
        element.addEventListener("mouseover", () => {
            element.classList.remove("play");
        });
    });
})();


/* =============================================================================
////////////////////////////////////////////////////////////////////////////////
============================================================================= */

jQuery(window).on("load", function () {


    /* =============================================================================
    -----------------------------  isotope Masonery   ------------------------------
    ============================================================================= */

    jQuery('.gallery').isotope({
        itemSelector: '.items'
    });

    // isotope
    jQuery('.gallery2').isotope({
        // options
        itemSelector: '.items',
        masonry: {
            // use element for option
            columnWidth: '.width2'
        }
    });

    var jQuerygallery = jQuery('.gallery , .gallery2').isotope();

    jQuery('.filtering').on('click', 'span', function () {
        var filterValue = jQuery(this).attr('data-filter');
        jQuerygallery.isotope({ filter: filterValue });
    });

    jQuery('.filtering').on('click', 'span', function () {
        jQuery(this).addClass('active').siblings().removeClass('active');
    });


    /* =============================================================================
    -----------------------------  Contact Valdition   -----------------------------
    ============================================================================= */

    jQuery('#contact-form').validator();

    jQuery('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            jQuery.ajax({
                type: "POST",
                url: url,
                data: jQuery(this).serialize(),
                success: function (data) {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        jQuery('#contact-form').find('.messages').html(alertBox);
                        jQuery('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    });

    jQuery(".header-cst .caption h1").addClass("normal")

});


/* =============================================================================
-----------------------------  Button scroll up   ------------------------------
============================================================================= */

jQuery(document).ready(function () {

    "use strict";

    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    var updateProgress = function () {
        var scroll = jQuery(window).scrollTop();
        var height = jQuery(document).height() - jQuery(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    jQuery(window).scroll(updateProgress);
    var offset = 150;
    var duration = 550;
    jQuery(window).on('scroll', function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
        } else {
            jQuery('.progress-wrap').removeClass('active-progress');
        }
    });
    jQuery('.progress-wrap').on('click', function (event) {
        event.preventDefault();
        jQuery('html, body').animate({ scrollTop: 0 }, duration);
        return false;
    })

});



/* =============================================================================
-------------------------------  Wow Animation   -------------------------------
============================================================================= */

wow = new WOW({
    animateClass: 'animated',
    offset: 100
});
wow.init();


/* =============================================================================
////////////////////////////////////////////////////////////////////////////////
============================================================================= */

jQuery(function () {



    /* =============================================================================
    -------------------------------  Preloader svg   -------------------------------
    ============================================================================= */

    const svg = document.getElementById("svg");
    const tl = gsap.timeline();
    const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

    tl.to(".loader-wrap-heading .load-text , .loader-wrap-heading .cont", {
        delay: 1.5,
        y: -100,
        opacity: 0,
    });
    tl.to(svg, {
        duration: 0.5,
        attr: { d: curve },
        ease: "power2.easeIn",
    }).to(svg, {
        duration: 0.5,
        attr: { d: flat },
        ease: "power2.easeOut",
    });
    tl.to(".loader-wrap", {
        y: -1500,
    });
    tl.to(".loader-wrap", {
        zIndex: -1,
        display: "none",
    });
    tl.from(
        "header .container",
        {
            y: 100,
            opacity: 0,
            delay: 0.3,
        },
        "-=1.5"
    );

});
