
$('.dropdown__i').click(function(){
    $(this).parent().toggleClass('dropdown_state_expanded');
});

$('.dropdown__option-iteration_decrement').click(function(){
    if ($(this).hasClass('dropdown__option-iteration_disabled')) return;
    let quantity = $(this).parent().children('.dropdown__option-quantity').text();
    if (quantity <= 0) return;
    quantity = --quantity;
    if (quantity == 0) {
        $(this).addClass('dropdown__option-iteration_disabled')
    }
    $(this).parent().children('.dropdown__option-quantity').text(quantity);
});

$('.dropdown__option-iteration_increment').click(function(){
    if ($(this).hasClass('dropdown__option-iteration_disabled')) return;
    let quantity = $(this).parent().children('.dropdown__option-quantity').text();
    quantity = ++quantity;
    if ($(this).parent().children('.dropdown__option-iteration_decrement').hasClass('dropdown__option-iteration_disabled')) {
        $(this).parent().children('.dropdown__option-iteration_decrement').removeClass('dropdown__option-iteration_disabled');
    }
    $(this).parent().children('.dropdown__option-quantity').text(quantity)
});

import {data} from './data.js';
import {endDigit} from './data.js'; 

$('.dropdown__button_target_apply').click(function(){
    let target = (this.closest('.dropdown').dataset.target);
    let str = "";
    let items = data[target].items;

     for (let value of this.closest('.dropdown').querySelectorAll('.dropdown__item')) {
        let option = value.querySelector('.dropdown__option').textContent;
        let quantity = value.querySelector('.dropdown__option-quantity').textContent;
        if (quantity == 0) continue;
        for (let item of items ) {
            if (item.value == option) {
                str += item.writing_mode(quantity) + ", ";
                break;
            }
        }
    }
    str = str.slice(0,-2);
    alert(str);
    this.closest('.dropdown').classList.remove('dropdown_state_expanded');
})
$('.dropdown__button_target_clear').click(function(){
    $(this).closest(".dropdown__customization").find('.dropdown__option-quantity').text('0');
    $(this).closest(".dropdown__customization").find('.dropdown__option-iteration_decrement').addClass('dropdown__option-iteration_disabled');
});



