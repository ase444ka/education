import "./js/datepicker"
class Calendar {
    constructor(block) {
      this.block = block;
      this.options = {
        range: true,
        clearButton: 'true',
        offset: 0,
        multipleDates: true,
        clearButton: true,
        todayButton: true,
      }
    }
    static initialize(_class, block) {
      $(() => {
        $(`.${block}`).each((index, node) => {
          new _class(block);
        });
      });
    }

    show(event) {
        let calendar = $('.datepicker-inline', event.target.closest(`.${this.block}`));
        if ($(calendar).hasClass(`${this.block}__calendar_hidden`)) {
            $(calendar).removeClass(`${this.block}__calendar_hidden`);
            $( `.${this.block}__calendar__button_target_apply`, event.target.closest(`.${this.block}`)).click(() => this.hide);
            $( `.${this.block}__calendar__button_target_clear`, event.target.closest(`.${this.block}`)).click(() => this.clear);
          }
          return;
    }

    hide(event)  {
      let parent = event.target.closest(`.${this.block}`);
      let calendar = $('.datepicker-inline', parent);
      let wrapperExpanded = $(`.${this.block}__input-wrapper_expanded`, parent);
      $(wrapperExpanded).removeClass(`${this.block}__input-wrapper_expanded`);  
      $(calendar).addClass(`${this.block}__calendar_hidden`);
      return;
    }

    clear(event)  {
      let inRange = event.target.closest(`.${this.block}`).querySelectorAll('.-in-range-');
      inRange.forEach((item) => 
      {
        $(item).removeClass('-in-range-')
        return;
      });
      let selected = event.target.closest(`.${this.block}`).querySelectorAll('.-selected-');
      selected.forEach((item) => 
      {
        $(item).removeClass('-selected-')
        return;
      });
  
      $('.-range-to-').removeClass('-range-to-')
      $('.-range-from-').removeClass('-range-from-')
      return;
    }
   
  }

  class CalendarCard extends Calendar {
    constructor(block) {
      super(block);
      Object.assign(this.options, {
          onSelect: () => console.log('yaaaaaa')
         }
      );
      $(`.${this.block}`).datepicker(this.options);

    }
  }
  
  Calendar.initialize(CalendarCard, 'calendar');
 
