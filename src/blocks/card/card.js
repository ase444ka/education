import './card.scss';
import 'slick-carousel';
import { modals } from '../modal/modal';

$(document).ready(function(){
    $('.card__room-preview__image').slick({
        slidesToShow: 1,
        infinite: true,
        dots: true,
        arrows: false,
    });
    $('.slick-slider').on('click', () => this.swipeHandler());
  });

  $('.card_for_registration').on('click', (event) => {
      if (!(event.target.dataset.target == "message")) return;
      let name =  event.currentTarget.querySelector('input[placeholder = "Имя"]').value;
      let surname =  event.currentTarget.querySelector('input[placeholder = "Фамилия"]').value;
      let welcome = '';
      if (!(name || surname)) {
        welcome = "Введите, пожалуйста, имя, фамилию или хотя бы никнейм какой-нибудь!"
      } else {
        welcome = `Добро пожаловать, ${name} ${surname}`;
    }
    modals.message.show(welcome);

    event.stopPropagation();
  });




