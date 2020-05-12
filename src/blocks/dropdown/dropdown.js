
import {initialize} from 'Blocks/public'
class Dropdown {
    constructor(block, blockName) {
      this.block =  block;
      this.blockName = blockName
      

      this.inputName = 'date-diapazon__input-wrapper';
      $(this.block).datepicker(this.options);
      this.addFunctionality(); 
      //клик на expand_more/less   
    } 
    clear() {
      super.clear();
      this.$start.val('');
      this.$end.val('');
    }
   
  }
  initialize(DateDiapazon, 'date-diapazon');
//разворачиваем дропдаун по клику на инпут
$('.dropdown__placeholder').click(function(){
    if (!$(this).parent().hasClass('dropdown_state_expanded')) {
        $(this).parent().toggleClass('dropdown_state_expanded');
    }
    
});

//Уменьшаем количество людей/комнат/стульев - в общем, итемов
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

//Увеличиваем количество людей/комнат/стульев - в общем, итемов
$('.dropdown__option-iteration_increment').click(function(){
    if ($(this).hasClass('dropdown__option-iteration_disabled')) return;
    let quantity = $(this).parent().children('.dropdown__option-quantity').text();
    quantity = ++quantity;
    if ($(this).parent().children('.dropdown__option-iteration_decrement').hasClass('dropdown__option-iteration_disabled')) {
        $(this).parent().children('.dropdown__option-iteration_decrement').removeClass('dropdown__option-iteration_disabled');
    }
    $(this).parent().children('.dropdown__option-quantity').text(quantity)
});

//импортируем файл с данными и кой-какую вспомогательную функцию (проверяет, кончается ли число на указанные цифры)
import {data} from './data.js';
import {endDigit} from './data.js'; 

//клик на кнопке ПРИМЕНИТЬ
$('.dropdown__button_target_apply').click(function(){
    let target = (this.closest('.dropdown').dataset.target); //Выясняем о чем дропдаун
    let str = "";
    let items = data[target].items; //берем данные о чем дропдаун

     for (let value of this.closest('.dropdown').querySelectorAll('.dropdown__item')) {
        let option = value.querySelector('.dropdown__option').textContent;
        let quantity = value.querySelector('.dropdown__option-quantity').textContent;
        if (quantity == 0) continue;
        for (let item of items ) {
            if (item.value == option) {
                str += item.writing_mode(quantity) + ", ";  //склоняем итем в соответствии с его количеством
                break;
            }
        }
    }
    str = str.slice(0,-2);
    alert(str);
    this.closest('.dropdown').classList.remove('dropdown_state_expanded');
    event.stopPropagation();
})
$('.dropdown__button_target_clear').click(function(){
    $(this).closest(".dropdown__customization").find('.dropdown__option-quantity').text('0');
    $(this).closest(".dropdown__customization").find('.dropdown__option-iteration_decrement').addClass('dropdown__option-iteration_disabled');
});
 document.addEventListener('click',function(event) {
    if (!(~event.target.className.indexOf('dropdown'))) {
        let _expanded = document.querySelector('.dropdown_state_expanded');
        if (_expanded) _expanded.classList.remove('dropdown_state_expanded');
    } 
    
}); 



