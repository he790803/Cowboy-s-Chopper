(function() {
    let body = document.querySelector('body');
    $(window).scroll(function() {
        let sc = $(window).scrollTop();
        if (sc > 100) {
            $(".nav").addClass("sticky");
        } else {
            $(".nav").removeClass("sticky");
        }
    });

    $(".nav-icon").click(function() {
        $(".full-nav").addClass("open");
        body.style.overflow = 'hidden';
    });
    $(".nav-close").click(function() {
        $(".full-nav").removeClass("open");

    });


    $(".bxslider").bxSlider({
        mode: "horizontal",
        speed: 1200,
        slideMargin: 40,
        infiniteLoop: true,
        minSlides: 1,
        maxSlides: 1
    });

    $("#work").magnificPopup({
        delegate: "a",
        type: "image",
        gallery: {
            enabled: true
        }
    });
})();