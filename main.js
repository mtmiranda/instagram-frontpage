function carroussel() {
  var $activeItem = $('#carroussel .active');
  var $nextItem =
    $activeItem.next().length > 0
      ? $activeItem.next()
      : $('#carroussel img:first');
  $nextItem.css('z-index', 2);
  $activeItem.fadeOut(1500, function () {
    $activeItem.css('z-index', 1).show().removeClass('active');
    $nextItem.css('z-index', 3).addClass('active');
  });
}

$(document).ready(function () {
  setInterval('carroussel()', 5000);
});
