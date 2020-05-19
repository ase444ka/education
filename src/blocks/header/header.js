$('.header__hamburger').click((event)=>{
    $('.header__nav__item', event.target.closest('.header')).toggleClass('header__nav__item_showing');
});