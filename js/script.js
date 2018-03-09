$(document).ready(function () {
    $('#fullpage').fullpage({
        // navigation: true,
        // navigationPosition: 'right',
        // navigationTooltips: ['Home', 'About', 'Projects', 'Gallery', 'Contact']
        // anchors: ['about', 'projects', 'gallery', 'contact']
        slidesNavigation: true,
		slidesNavPosition: 'bottom',
        scrollingSpeed: 1000,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 2000,
        anchors: ['go-home', 'go-about', 'go-projects', 'go-gallery', 'go-contact'],
        menu: '#mySidenav'
        // verticalCentered: false
        // responsiveWidth: 992,
    });

    $('#openbtn').click(function (e) {
        e.stopPropagation();
        $('#mySidenav').css('width', '350px');
    });

    $('#closebtn').click(function (e) {
        $('#mySidenav').css('width', '0');
        e.stopPropagation();
    });

    $('#fullpage').click(function (e) {
        $('#mySidenav').css('width', '0');
    });

    // var $window = $(window),
    //     $html = $('html');

    // function resize() {
    //     if ($window.width() < 514) {
    //         return $html.addClass('mobile');
    //     }

    //     $html.removeClass('mobile');
    // }

    // $window
    //     .resize(resize)
    //     .trigger('resize');
});