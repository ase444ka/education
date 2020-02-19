
import {data} from '../../data.js';
import {endDigit} from '../../data.js'; 

$('.input__button_target_apply').click(function(){
    let target = (this.closest('.input').dataset.target);
    let str = "";
    let items = data[target].items;

     for (let value of this.closest('.input').querySelectorAll('.input__item')) {
        let option = value.querySelector('.input__option').textContent;
        let quantity = value.querySelector('.input__option-quantity').textContent;
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
    
})

