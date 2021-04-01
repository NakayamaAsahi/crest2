var mvh = $('.contactslide').height();

$(window).scroll(function() {
  var top = $(window).scrollTop();
  if (mvh < top) {
    $('.headerNav').css('background-color', '#282F35');
    } else {
    $('.headerNav').css('background-color', 'rgba(0,0,0,0)');
  }
});
