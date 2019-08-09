$(document).ready(function () {
  resizeDiv();
});

window.onresize = function (event) {
  resizeDiv();
}

function resizeDiv() {
  vpw = $(window).width();
  vph = $(window).height();
  $('#wrapper').css({ 'height': vph + 'px' });
}

