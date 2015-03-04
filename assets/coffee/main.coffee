$(document).ready ->
  $(".menu").smint
    'scrollSpeed' : 1000

  $('.slide').bxSlider
    'controls': 'false',
    'pager': 'false',
    'mode': 'fade',
    'auto': true

  $(".menu-device a").on "click", ->
    $(this).toggleClass "clicked"
    $('.menu').toggleClass "displayed"
    $('#main').toggleClass "with-menu-displayed"
    false

  $windowHeight = $(window).height()
  $('#main > div').not('.shop').each ->
    $(this).height($windowHeight).find('> div').addClass 'section-centered' if $(this).height() < $windowHeight

  $(window).resize ->
    $('h2').css 'z-index', 1
