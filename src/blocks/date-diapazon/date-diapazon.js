//объявление класса календаря с привязкой по двум инпутам
class DateDiapazon {
    constructor(component) {
      const $start = $('.date-diapazon__start', component);
      const $end = $('.date-diapazon__end', component);
      $(component).datepicker({
        onSelect: function (fd, d, picker) {
            console.log($start);
            console.log($end);
            console.log(fd);
            $start.val(fd.split(",")[0]);
            $end.val(fd.split(",")[1]);
        },
        range: true,
        clearButton: 'true',
        offset: 0,
        multipleDates: true,
        clearButton: true,
        todayButton: true,
      });
      $('.datepicker-inline', component).addClass('date-diapazon__calendar_hidden');
      $('.datepicker-inline', component).addClass('date-diapazon__calendar');
      $('[data-action="clear"]',component).addClass('date-diapazon__calendar__button_target_clear');
      $('[data-action="today"]',component).addClass('date-diapazon__calendar__button_target_apply');

    }
   
  }
 //инициализация календаря с двойными инпутами на соотв. блоках
  $(() => {
    $('.date-diapazon').each((index, node) => {
      new DateDiapazon(node);
    });
  });
//отображение календаря
  let dateDiapazonShowCalendar = (event) => {
    let calendar = $('.datepicker-inline', event.target.closest('.date-diapazon'));
    if ($(calendar).hasClass('date-diapazon__calendar_hidden')) {
      $(calendar).removeClass('date-diapazon__calendar_hidden');
    $( '.date-diapazon__calendar__button_target_apply', event.target.closest('.date-diapazon')).click(dateDiapazonHideCalendar);
    $( '.date-diapazon__calendar__button_target_clear', event.target.closest('.date-diapazon')).click(dateDiapazonClearDates);

    }
    return;
  };
  //скрытие календаря
  let dateDiapazonHideCalendar = (event) => {
    let parent = event.target.closest('.date-diapazon');
    let calendar = $('.datepicker-inline', parent);
    let wrapperExpanded = $('.date-diapazon__input-wrapper_expanded', parent);
    $(wrapperExpanded).removeClass('date-diapazon__input-wrapper_expanded');  
    $(calendar).addClass('date-diapazon__calendar_hidden');
    return;
  };
  //очистка инпутов с датами
  let dateDiapazonClearDates = (event) => {
    let start = $('.date-diapazon__start', event.target.closest('.date-diapazon'));
    let end = $('.date-diapazon__end',  event.target.closest('.date-diapazon'));
    let inRange = event.target.closest('.date-diapazon').querySelectorAll('.-in-range-');
    inRange.forEach((item) => 
    {
      $(item).removeClass('-in-range-')
      return;
    }
    );
    let selected = event.target.closest('.date-diapazon').querySelectorAll('.-selected-');
    selected.forEach((item) => 
    {
      $(item).removeClass('-selected-')
      return;
    }
    );

    $('.-range-to-').removeClass('-range-to-')
    $('.-range-from-').removeClass('-range-from-')
    $(start).val('');
    $(end).val('');
    return;
  };
//клик на expand_more/less
  $('.date-diapazon__input-wrapper').click((event) => {
    //если календарь скрыт - покажем!
    if ($(event.target.closest('.date-diapazon')).find('.date-diapazon__calendar_hidden').length) {
      $(event.target).addClass('date-diapazon__input-wrapper_expanded');
      dateDiapazonShowCalendar(event);
    }
    //а если это expand_less - скроем календарь!
    else if ($(event.target).hasClass('date-diapazon__input-wrapper_expanded')) {
      dateDiapazonHideCalendar(event);
    }
    
  })
/* //разворачиваем календарь
  $('.date-diapazon__start').click(dateDiapazonShowCalendar);
  //разворачиваем календарь
  $('.date-diapazon__end').click(dateDiapazonShowCalendar); */

