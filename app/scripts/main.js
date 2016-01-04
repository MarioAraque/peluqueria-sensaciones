'use strict'

$(document).ready(function() {
    $('.toggle-nav').on('click', function() {
        $(this).stop(true).toggleClass('is-active');
        $('.nav').stop(true).fadeToggle('slow');

        return false;
    });

    var map = $('.map');
    if(map.length) {
        var gmap = new GMaps({
            el: map.attr('class'),
            lat: map.data('lat'),
            lng: map.data('long'),
            scrollwheel: false,
            navigationControl: false,
            mapTypeControl: false,
            scaleControl: false
        });

        gmap.addMarker({
            lat: map.data('lat'),
            lng: map.data('long'),
            infoWindow: {
                content: '<p>Calle Brasil 20 Bajo - 46018 Valencia</p>'
            }
        });
    }

    $('.product').on('click', function() {
        var product = $(this);

        $('.modal-name').html(product.find('.product-name').html());
        $('.modal-image').html('<img src="'+ product.find('.product-image').data('image-big') +'" />');
        $('.modal-description').html(product.find('.product-description').html());
        $('.modal').fadeIn('slow');
        $('body').addClass('is-fixed');
    });

    $('.modal-close').on('click', function() {
        $('.modal').fadeOut('slow');
        $('body').removeClass('is-fixed');
    });

    $(document).keyup(function(e) {
        $('.modal').fadeOut('slow');
        $('body').removeClass('is-fixed');
    });
});
