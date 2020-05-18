import {Calendar} from 'Blocks/calendar/calendar'
import {initialize} from 'Blocks/public'
import {fitInWindow} from 'Blocks/public'
//объявление класса календаря с привязкой по двум инпутам
class DateDiapazon extends Calendar {
    constructor(block, blockName) {
      super(block, blockName);
      this.$start = $('.date-diapazon__start', block);
      this.$end = $('.date-diapazon__end', block);
      Object.assign(this.options, {
        onSelect: (fd, d, picker) => {
          this.$start.val(fd.split(",")[0]);
          this.$end.val(fd.split(",")[1]);
          return;
        }
       });
       this.inputName = 'date-diapazon__input-wrapper';
       
      $(this.block).datepicker(this.options);
      this.addFunctionality(); 
      this.customization = this.block.querySelector('.datepicker');
      this.applyButton = this.block.querySelector('.date-diapazon__calendar__button_target_apply')  
    } 
    clear() {
      super.clear();
      this.$start.val('');
      this.$end.val('');
    }
    
   
  }
initialize(DateDiapazon, 'date-diapazon');


