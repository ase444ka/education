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
      $('.datepicker-inline', this.block).addClass('date-diapazon__calendar_hidden');
      $('.datepicker-inline', this.block).addClass('date-diapazon__calendar');
      $('[data-action="clear"]',this.block).addClass('date-diapazon__calendar__button_target_clear');
      $('[data-action="today"]',this.block).addClass('date-diapazon__calendar__button_target_apply');
      //клик на expand_more/less
   $('.date-diapazon__input-wrapper', this.block).click((event) => {
    //если календарь скрыт - покажем!
    if (this.hidden) {
      $(event.target).addClass('date-diapazon__input-wrapper_expanded');
      this.show(event);
    }
    //а если это expand_less - скроем календарь!
    else {
      this.hide(event);
      $(event.target).removeClass('date-diapazon__input-wrapper_expanded');
    }
    
  })
    }
    clear(event) {
      super.clear(event);
      this.$start.val('');
      this.$end.val('');
    }
   
  }
  Calendar.initialize(DateDiapazon, 'date-diapazon');
 //инициализация календаря с двойными инпутами на соотв. блоках


 
/* //разворачиваем календарь
  $('.date-diapazon__start').click(dateDiapazonShowCalendar);
  //разворачиваем календарь
  $('.date-diapazon__end').click(dateDiapazonShowCalendar); */

