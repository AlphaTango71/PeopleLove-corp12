! function(o) {
    "use strict";
    o('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var e = o(this.hash);
            if ((e = e.length ? e : o("[name=" + this.hash.slice(1) + "]")).length) return o("html, body").animate({
                scrollTop: e.offset().top - 48
            }, 1e3, "easeInOutExpo"), !1
        }
    }), o(".js-scroll-trigger").click(function() {
        o(".navbar-collapse").collapse("hide")
    }), o("body").scrollspy({
        target: "#mainNav",
        offset: 54
    });
    var e = function() {
        o("#mainNav").offset().top > -99 ? (o("#mainNav").addClass("navbar-shrink"), o("#color-logo").removeClass("hide-color"), o("#white-logo").addClass("hide-white")) : (o("#mainNav").removeClass("navbar-shrink"), o("#white-logo").removeClass("hide-white"), o("#color-logo").addClass("hide-color"))
    };
    o(window).resize(function() {
        o(window).width() <= 991 && o("#mainNav").offset().top, o("#color-logo").removeClass("hide-color"), o("#white-logo").addClass("hide-white")
    })
, e()
, o(window).scroll(e)

}(jQuery);

