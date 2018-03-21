$(document).ready(function () {
    $('#fullpage').fullpage({
        // navigation: true,
        // navigationPosition: 'right',
        // navigationTooltips: ['Home', 'About', 'Projects', 'Gallery', 'Contact']
        // anchors: ['about', 'projects', 'gallery', 'contact']

        // slidesNavigation: true,
        // slidesNavPosition: 'bottom',

        scrollingSpeed: 1000,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 2000,
        anchors: ['go-home', 'go-about', 'chillscapes', 'monotone', 'eff-enn', 'go-contact'],
        menu: '#mySidenav',
        afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
            var loadedSlide = $(this);
            var totalItems = loadedSlide.siblings().length;
            var numContainer = loadedSlide.closest('.fp-section').find('.num');
            numContainer.html((slideIndex + 1) + ' / ' + (totalItems + 1));
        }
        // verticalCentered: false
        // responsiveWidth: 992,
    });

    $('#openbtn').click(function (e) {
        e.stopPropagation();
        $('#mySidenav').css('width', '300px');
    });

    $('#closebtn').click(function (e) {
        $('#mySidenav').css('width', '0');
        e.stopPropagation();
    });

    $('#fullpage').click(function (e) {
        $('#mySidenav').css('width', '0');
    });
});