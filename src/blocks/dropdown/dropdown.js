
import {initialize} from 'Blocks/public'
//импортируем файл с данными и кой-какую вспомогательную функцию (проверяет, кончается ли число на указанные цифры)
import {data} from './data.js';
import {endDigit} from './data.js'; 

class Dropdown {
    constructor(block, blockName) {
        this.block =  block;
        this.blockName = blockName;
        this.showing = false;
        this.placeholderText = $('.dropdown__placeholder', block).text();
        this.placeholder =  this.block.querySelector('.dropdown__placeholder');
        this.options = this.block.querySelectorAll('.dropdown__item');
        this.applyButton = this.block.querySelector('.dropdown__button_target_apply');
        this.clearButton = this.block.querySelector('.dropdown__button_target_clear');

        //разворачиваем при клике на инпут
        this.placeholder.addEventListener('click', () => this.show());
        
        //настраиваем плюс - минус
        for (let option of this.options) {
            option.addEventListener('click', (event) => {
                if ($(event.target).hasClass('dropdown__option-iteration_increment')) {
                    this.increment(option);
                    return;
                }
                if ($(event.target).hasClass('dropdown__option-iteration_decrement')) {
                    this.decrement(option);
                    return;
                }
                return;
            })
        }

       //очищаем поля при клике на кнопку очистки
        this.clearButton.addEventListener('click', () => this.clear());

        //очищаем и сворачиваем при клике снаружи
        document.addEventListener('click', (event) => {
            if (event.target.closest('.dropdown') === this.block) return;
            if (this.showing) {
                this.clear();
                this.hide();
            }
            return;
            
        }); 


        
        //клик на кнопке ПРИМЕНИТЬ
       /*  $('.dropdown__button_target_apply', block).click(function(){
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
   */
  } 
  
  show() {
    this.block.classList.add('dropdown_state_expanded');
    this.showing = true;
  }

  hide() {
    this.block.classList.remove('dropdown_state_expanded');
    this.showing = false;
  }

  clear() {
    $('.dropdown__option-quantity', this.block).text('0');
    $('.dropdown__option-iteration_decrement').addClass('dropdown__option-iteration_disabled');
    $(this.placeholder).text(this.placeholderText)
  }

  apply() {

  }

  increment(option) {
    if ($('.dropdown__option-iteration_increment', option).hasClass('dropdown__option-iteration_disabled')) return;
    let quantity = $('.dropdown__option-quantity', option).text();
    quantity = ++quantity;
    if ($('.dropdown__option-iteration_decrement', option).hasClass('dropdown__option-iteration_disabled')) {
        $('.dropdown__option-iteration_decrement', option).removeClass('dropdown__option-iteration_disabled');
    }
    $('.dropdown__option-quantity', option).text(quantity);
  }

  decrement(option) {
    if ($('.dropdown__option-iteration_decrement', option).hasClass('dropdown__option-iteration_disabled')) return;
    let quantity = $('.dropdown__option-quantity', option).text();
    if (quantity <= 0) return;
    quantity = --quantity;
    if (quantity == 0) {
        $('.dropdown__option-iteration_decrement', option).addClass('dropdown__option-iteration_disabled')
    }
    $('.dropdown__option-quantity', option).text(quantity);
  }

}
initialize(Dropdown, 'dropdown');










