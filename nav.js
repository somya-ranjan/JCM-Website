// <--Nav Section-->
$(document).ready(function () {
    $("ul.navbar-nav > li > a").click(function (e) {
        $("ul.navbar-nav > li > a").removeClass("active_nav_link");
        $(this).addClass("active_nav_link");
    });
});