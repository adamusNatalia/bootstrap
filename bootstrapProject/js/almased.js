(function ($) {


    $(document).scroll(function () {
        var winH = $(window).height()/3;
        var $nav = $("#mainNav");
        $nav.toggleClass('navbar-shrink', $(this).scrollTop() >  winH);
    });



})(jQuery);