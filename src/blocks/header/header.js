import './header.scss';
import {modals} from 'Blocks/modal/modal'
$('.header__hamburger').click((event)=>{
    $('.header__nav__item', event.target.closest('.header')).toggleClass('header__nav__item_showing');
});
$('.header__button').click((event)=>{
    modals.login.show();
    setTimeout(() => modals.login.hide(), 5000);
    /* $(document.querySelector('.main__room-search')).addClass('main__hidden');
    let tt = `.main__${event.target.dataset['target']}`;
    $(document.querySelector(`.main__${event.target.dataset['target']}`)).toggleClass('main__hidden');
]//$(document.querySelector('.modal')).addClass('modal_opened');


*/
});