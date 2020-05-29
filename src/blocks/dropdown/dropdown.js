import './dropdown.scss';
import {initialize} from 'Common/common'
import {fitInWindow} from 'Common/common'
//импортируем файл с данными и кой-какую вспомогательную функцию (проверяет, кончается ли число на указанные цифры)
import {data} from './data.js';
import {endDigit} from './data.js'; 

class Dropdown {
    constructor(block, blockName) {
        this.block =  block;
        this.blockName = blockName;
        this.showing = false;
        this.borderStyle = '2px solid rgba(31, 32, 65, 0.5)';
         this.borderRadius = '4px';
        this.placeholderText = $('.dropdown__placeholder', block).text();
        this.placeholder =  this.block.querySelector('.dropdown__placeholder');
        this.customization = this.block.querySelector('.dropdown__customization')
        this.options = this.block.querySelectorAll('.dropdown__item');
        this.applyButton = this.block.querySelector('.dropdown__button_target_apply');
        this.clearButton = this.block.querySelector('.dropdown__button_target_clear');
        this.target = this.block.dataset["target"];
        this.data = data[this.target];

        //разворачиваем при клике на инпут
        this.placeholder.addEventListener('click', () => {
            if (!this.showing) this.show();
            else this.hide();
        });
        
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
                this.hide();
            }
            return;
            
        }); 
        
        //клик на кнопке ПРИМЕНИТЬ
        this.applyButton.addEventListener('click', () => this.apply());
        $(document).keydown( (e) => {
          // ESCAPE key pressed
          if (e.keyCode == 27) {
              this.hide();
          }
      });

  } 
  
  show() {
    this.block.classList.add('dropdown_state_expanded');
    this.showing = true;
    fitInWindow.call(this);
  }

  hide() {
    this.block.classList.remove('dropdown_state_expanded');
    this.showing = false;
    if(this.style) {
      this.style.top = '';
      this.style.border = '';
      this.style.borderRadius = '';
    }
  }

  clear() {
    $('.dropdown__option-quantity', this.block).text('0');
    $('.dropdown__option-iteration_decrement').addClass('dropdown__option-iteration_disabled');
    $(this.placeholder).text(this.placeholderText)
  }

  apply() {
    for (let option of this.options) {
        this.data.items[$('.dropdown__option', option).text()].quantity = +$('.dropdown__option-quantity', option).text(); 
    }
    alert(this.data.resultTotal());
    $(this.placeholder).text(this.data.result() || this.placeholderText);
    this.hide();
  }

  increment(option) {
    if ($('.dropdown__option-iteration_increment', option).hasClass('dropdown__option-iteration_disabled')) return;
    let quantity = $('.dropdown__option-quantity', option).text();
   
    quantity = ++quantity;
    if ($('.dropdown__option-iteration_decrement', option).hasClass('dropdown__option-iteration_disabled')) {
        $('.dropdown__option-iteration_decrement', option).removeClass('dropdown__option-iteration_disabled');
    }
    if (quantity == this.data.items[$('.dropdown__option', option).text()].maxQuantity) {
      $('.dropdown__option-iteration_increment', option).addClass('dropdown__option-iteration_disabled');
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










