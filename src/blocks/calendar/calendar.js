class Calendar {
    constructor(component) {
      $(component).datepicker({
        onSelect: function (fd, d, picker) {
            this.start = fd.split(",")[0];
            this.end = fd.split(",")[1];
        },
        range: true,
        clearButton: 'true',
        offset: 0,
        multipleDates: true,
        clearButton: true,
        todayButton: true,
      });
    }

    show(event, block) {
        let calendar = $('.datepicker-inline', event.target.closest(`.${block}`));
        if ($(calendar).hasClass(`${block}__calendar_hidden`)) {
            $(calendar).removeClass(`${block}__calendar_hidden`);
          $( `.${block}__calendar__button_target_apply`, event.target.closest(`.${block}`)).click(() => this.hide);
          $( `.${block}__calendar__button_target_clear`, event.target.closest(`.${block}`)).click(() => this.clear);
      
          }
          return;
    }
   
  }
 //инициализация календаря с двойными инпутами на соотв. блоках
  $(() => {
    $(`.${block}`).each((index, node) => {
      new DateDiapazon(node);
    });
  });
//отображение календаря
  let dateDiapazonShowCalendar = (event) => {
    let calendar = $('.datepicker-inline', event.target.closest(`.${block}`));
    
  };
  //скрытие календаря
  let dateDiapazonHideCalendar = (event) => {
    let parent = event.target.closest(`.${block}`);
    let calendar = $('.datepicker-inline', parent);
    let wrapperExpanded = $(`.${block}__input-wrapper_expanded`, parent);
    $(wrapperExpanded).removeClass(`${block}__input-wrapper_expanded`);  
    $(calendar).addClass(`${block}__calendar_hidden`);
    return;
  };
  //очистка инпутов с датами
  let dateDiapazonClearDates = (event) => {
    let start = $(`.${block}__start`, event.target.closest(`.${block}`));
    let end = $(`.${block}__end`,  event.target.closest(`.${block}`));
    let inRange = event.target.closest(`.${block}`).querySelectorAll('.-in-range-');
    inRange.forEach((item) => 
    {
      $(item).removeClass('-in-range-')
      return;
    }
    );
    let selected = event.target.closest(`.${block}`).querySelectorAll('.-selected-');
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
  $('.${block}__input-wrapper').click((event) => {
    //если календарь скрыт - покажем!
    if ($(event.target.closest(`.${block}`)).find(`.${block}__calendar_hidden`).length) {
      $(event.target).addClass(`${block}__input-wrapper_expanded`);
      dateDiapazonShowCalendar(event);
    }
    //а если это expand_less - скроем календарь!
    else if ($(event.target).hasClass(`${block}__input-wrapper_expanded`)) {
      dateDiapazonHideCalendar(event);
    }
    
  })
  
  
  
  import "./js/datepicker"
$('.calendar').datepicker({
    //inline: true,
    range: true,
    multipleDates: true,
    clearButton: true,
    todayButton: true,
})