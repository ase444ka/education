import {Calendar} from 'Blocks/calendar/calendar'
class FilterDate extends Calendar {
  constructor(block, blockName) {
      super(block, blockName);
      this.start = '';
      this.end = '';
      Object.assign(this.options, {
        onSelect: (fd, d, picker) => {
          this.start = fd.split(",")[0];
          this.end = fd.split(",")[1] || '';
          $(`.${this.inputName}`, this.block).val(`${this.start}-${this.end}`);
          return;
        }
       });
      $(this.block).datepicker(this.options);
      this.addFunctionality(); 
      
    }

    clear() {
      super.clear();
      $(`.${this.inputName}`, this.block).val('');
    }
   
  }
 //инициализация календаря с двойными инпутами на соотв. блоках
Calendar.initialize(FilterDate,'filter-date');