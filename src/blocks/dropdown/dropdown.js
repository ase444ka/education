
import {initialize} from 'Blocks/public'
//импортируем файл с данными и кой-какую вспомогательную функцию (проверяет, кончается ли число на указанные цифры)
import {data} from './data.js';
import {endDigit} from './data.js'; 

class Dropdown {
    constructor(block, blockName) {
        this.block =  block;
        this.blockName = blockName;
        let _text = $('.dropdown__placeholder', block).text();
        let _placeholder =  $('.dropdown__placeholder', block);

        //разворачиваем дропдаун по клику на инпут
        $('.dropdown__placeholder', block).click(function(){
            if (!$(block).hasClass('dropdown_state_expanded')) {
                $(block).toggleClass('dropdown_state_expanded');
            }
        });

                //Уменьшаем количество людей/комнат/стульев - в общем, итемов
        $('.dropdown__option-iteration_decrement', block).click(function(){
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
        $('.dropdown__option-iteration_increment', block).click(function(){
            if ($(this).hasClass('dropdown__option-iteration_disabled')) return;
            let quantity = $(this).parent().children('.dropdown__option-quantity').text();
            quantity = ++quantity;
            if ($(this).parent().children('.dropdown__option-iteration_decrement').hasClass('dropdown__option-iteration_disabled')) {
                $(this).parent().children('.dropdown__option-iteration_decrement').removeClass('dropdown__option-iteration_disabled');
            }
            $(this).parent().children('.dropdown__option-quantity').text(quantity)
        });
      
        //клик на кнопке ПРИМЕНИТЬ
        $('.dropdown__button_target_apply', block).click(function(){
            let target = block.dataset.target; //Выясняем о чем дропдаун
            let str = "";
            let items = data[target].items; //берем данные о чем дропдаун
            let total = {
                people: 0,
                babies: 0,
            }, result = '';

            for (let value of block.querySelectorAll('.dropdown__item')) {
                let option = value.querySelector('.dropdown__option').textContent;
                let quantity = value.querySelector('.dropdown__option-quantity').textContent;
                if (quantity == 0) continue;
                

                for (let item of items ) {
                    if (item.value == option) {
                        str += item.writing_mode(quantity) + ", ";  //склоняем итем в соответствии с его количеством
                        if (data[target].result) {
                            if (item.general) total.people += +quantity;
                            else total.babies += +quantity;
                        }
                        break;
                    }
                }
            }
            if (data[target].result) {
                result = data[target].result(total);
            } else result = str;
            $(_placeholder).text(result);
            str = str.slice(0,-2);
            alert(str);
            block.classList.remove('dropdown_state_expanded');
            event.stopPropagation();
        });
        $('.dropdown__button_target_clear').click(function(){
            $(_placeholder).text(_text);
            $(this).closest(".dropdown__customization").find('.dropdown__option-quantity').text('0');
            $(this).closest(".dropdown__customization").find('.dropdown__option-iteration_decrement').addClass('dropdown__option-iteration_disabled');
        });
        document.addEventListener('click',function(event) {
            if (!(~event.target.className.indexOf('dropdown'))) {
                let _expanded = document.querySelector('.dropdown_state_expanded');
                if (_expanded) _expanded.classList.remove('dropdown_state_expanded');
            } 
        }); 
   
  }
}
initialize(Dropdown, 'dropdown');










