function navbarShrink() {
    if (window.scrollY >= 100) {
        document.getElementById('mainNav').classList.add('navbar-shrink');
    } else {
        document.getElementById('mainNav').classList.remove('navbar-shrink');
    }
}
window.onscroll = () => navbarShrink();
navbarShrink();

jQuery("body.layout-home").scrollspy({target:"#mainNav",offset:56})

jQuery('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
        var a = jQuery(this.hash);
        if ((a = a.length ? a : jQuery("[name=" + this.hash.slice(1) + "]")).length) return jQuery("html, body").animate({scrollTop: a.offset().top - 54}, 1e3, "easeInOutExpo"), !1
    }
})