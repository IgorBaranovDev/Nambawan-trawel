
$(document).ready(function () {
  $('.group-1-single').slick();
});

let $status = $('.pagingInfo-1-slider');
let $slickElement = $('.group-1-single');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  let i = (currentSlide ? currentSlide : 0) + 1;
  $status.text(i + '  / ' + slick.slideCount);
});





$(document).ready(function () {
  $('.group-2-single').slick();
});

let $statusGroupTow = $('.pagingInfo-2-slider');
let $slickElementGroupTow = $('.group-2-single');

$slickElementGroupTow.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  let i = (currentSlide ? currentSlide : 0) + 1;
  $statusGroupTow.text(i + '  / ' + slick.slideCount);
});
