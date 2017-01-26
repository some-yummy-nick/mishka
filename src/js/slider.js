export default function slider(){
  $('.slider__controls-button').on('click', function (e) {
    e.preventDefault();

    var
      $this = $(this),
      container = $this.closest('.slider'),
      list = container.find('.slider__list'),
      items = container.find('.slider__item'),
      activeSlide = items.filter('.slider__item-active'),
      nextSlide = activeSlide.next(),
      prevSlide = activeSlide.prev(),
      firstSide = items.first(),
      lastSlide = items.last(),
      sliderOffset = container.offset().left,
      regPos = 0;

    if($(this).hasClass('slider__controls-button--next')) {
      if(nextSlide.length) {
        findRegPos(nextSlide);
        removeActiveClass(nextSlide);
      } else {
        findRegPos(firstSide);
        removeActiveClass(firstSide);
      }

    } else {

      if(prevSlide.length) {
        findRegPos(prevSlide);
        removeActiveClass(prevSlide);
      } else {
        findRegPos(lastSlide);
        removeActiveClass(lastSlide);
      }
    }

    list.css('left', '-=' + regPos + 'px');

    function removeActiveClass(regSlide) {
      regSlide.addClass('slider__item-active').siblings().removeClass('slider__item-active');
    }

    function findRegPos(slide) {
      regPos = slide.offset().left - sliderOffset;
    }
  });
}
