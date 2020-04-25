//объявление класса календаря с привязкой по двум инпутам
class FilterDate {
    constructor(component) {
      let start = '';
      let end = '';
      const $input = $('.filter-date__input', component);
      $(component).datepicker({
        onSelect: function (fd, d, picker) {
            console.log(fd);
            start = fd.split(",")[0];
            end = fd.split(",")[1] || '';
            $input.val(`${start}-${end}`)
        },
        range: true,
        clearButton: 'true',
        offset: 0,
        multipleDates: true,
        clearButton: true,
        todayButton: true,
        dateFormat: 'ddM',
      });
      $('.datepicker-inline', component).addClass('filter-date__calendar_hidden');
      $('.datepicker-inline', component).addClass('filter-date__calendar');
      $('[data-action="clear"]',component).addClass('filter-date__calendar__button_target_clear');
      $('[data-action="today"]',component).addClass('filter-date__calendar__button_target_apply');

    }
   
  }
 //инициализация календаря с двойными инпутами на соотв. блоках
  $(() => {
    $('.filter-date').each((index, node) => {
      new FilterDate(node);
    });
  });
 //отображение календаря
  let filterDateShowCalendar = (event) => {
    let calendar = $('.datepicker-inline', event.target.closest('.filter-date'));
    if ($(calendar).hasClass('filter-date__calendar_hidden')) {
      $(calendar).removeClass('filter-date__calendar_hidden');
    $( '.filter-date__calendar__button_target_apply', event.target.closest('.filter-date')).click(filterDateHideCalendar);
    $( '.filter-date__calendar__button_target_clear', event.target.closest('.filter-date')).click(filterDateClearDates);

    }
    return;
  };
  //скрытие календаря
  let filterDateHideCalendar = (event) => {
    let parent = event.target.closest('.filter-date');
    let calendar = $('.datepicker-inline', parent);
    let wrapperExpanded = $('.filter-date__input-wrapper_expanded', parent);
    $(wrapperExpanded).removeClass('filter-date__input-wrapper_expanded');  
    $(calendar).addClass('filter-date__calendar_hidden');
    return;
  };
  //очистка инпутов с датами
  let filterDateClearDates = (event) => {
    let _input = $('.filter-date__input', event.target.closest('.filter-date'));
    let inRange = event.target.closest('.filter-date').querySelectorAll('.-in-range-');
    inRange.forEach((item) => 
    {
      $(item).removeClass('-in-range-')
      return;
    }
    );
    let selected = event.target.closest('.filter-date').querySelectorAll('.-selected-');
    selected.forEach((item) => 
    {
      $(item).removeClass('-selected-')
      return;
    }
    );

    $('.-range-to-').removeClass('-range-to-')
    $('.-range-from-').removeClass('-range-from-')
    $(_input).val('');
    return;
  };
//клик на expand_more/less
  $('.filter-date__input').click((event) => {
    //если календарь скрыт - покажем!
    if ($(event.target.closest('.filter-date')).find('.filter-date__calendar_hidden').length) {
      // $(event.target).addClass('filter-date__input-wrapper_expanded');
      filterDateShowCalendar(event); 
    }
    //а если это expand_less - скроем календарь!
    else if ($(event.target).hasClass('filter-date__input-wrapper_expanded')) {
      //filterDateHideCalendar(event);
      alert('heyy');
    } 
    
  })
/* //разворачиваем календарь
  $('.filter-date__start').click(filterDateShowCalendar);
  //разворачиваем календарь
  $('.filter-date__end').click(filterDateShowCalendar); 

 */