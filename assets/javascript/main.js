(function() {
  $(document).ready(function() {
    var $windowHeight;
    $(".menu").smint({
      'scrollSpeed': 1000
    });
    $('.slide').bxSlider({
      'controls': 'false',
      'pager': 'false',
      'mode': 'fade',
      'auto': true
    });
    $(".menu-device a").on("click", function() {
      $(this).toggleClass("clicked");
      $('.menu').toggleClass("displayed");
      $('#main').toggleClass("with-menu-displayed");
      return false;
    });
    $windowHeight = $(window).height();
    $('#main > div').not('.shop').each(function() {
      if ($(this).height() < $windowHeight) {
        return $(this).height($windowHeight).find('> div').addClass('section-centered');
      }
    });
    return $(window).resize(function() {
      return $('h2').css('z-index', 1);
    });
  });

}).call(this);
