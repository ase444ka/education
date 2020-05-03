import {Calendar} from 'Blocks/calendar/calendar'
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
      $(this.block).datepicker(this.options);
      this.addFunctionality(); 
      //клик на expand_more/less
   $('.date-diapazon__input-wrapper', this.block).click((event) => {
    //если календарь скрыт - покажем!
    if (this.hidden) {
      $(event.target).addClass('date-diapazon__input-wrapper_expanded');
      this.show();
    }
    //а если это expand_less - скроем календарь!
    else {
      this.hide();
      $(event.target).removeClass('date-diapazon__input-wrapper_expanded');
    }
    
  })
    } 
    clear() {
      super.clear();
      this.$start.val('');
      this.$end.val('');
    }
   
  }
  Calendar.initialize(DateDiapazon, 'date-diapazon');


