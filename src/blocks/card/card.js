import 'slick-carousel';

$(document).ready(function(){
    $('.card__room-preview__image').slick({
        slidesToShow: 1,
        infinite: true,
        dots: true,
        arrows: false,
    });
    $('.slick-slider').on('click', () => this.swipeHandler());
  });


