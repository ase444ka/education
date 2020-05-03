import "./js/datepicker"
export class Calendar {
    constructor(block, blockName) {
      this.block = block;
      this.hidden = true;
      this.blockName = blockName;
      this.options = {
        range: true,
        clearButton: 'true',
        offset: 0,
        multipleDates: true,
        clearButton: true,
        todayButton: true,
      }
    }
    static initialize(_class, blockName) {
      $(() => {
        $(`.${blockName}`).each((index, node) => {
          new _class(node, blockName);
        });
      });
    }

    show(event) {
        let calendar = $('.datepicker-inline', event.target.closest(`.${this.blockName}`));
        if ($(calendar).hasClass(`${this.blockName}__calendar_hidden`)) {
            $(calendar).removeClass(`${this.blockName}__calendar_hidden`);
            $( `.${this.blockName}__calendar__button_target_apply`, event.target.closest(`.${this.blockName}`)).click((event) => this.hide(event));
            $( `.${this.blockName}__calendar__button_target_clear`, event.target.closest(`.${this.blockName}`)).click((event) => this.clear(event));
            this.hidden = false;
          }
          return;
    }

    hide(event)  {
      let parent = event.target.closest(`.${this.blockName}`);
      let calendar = $('.datepicker-inline', parent);
      let wrapperExpanded = $(`.${this.blockName}__input-wrapper_expanded`, parent);
      $(wrapperExpanded).removeClass(`${this.blockName}__input-wrapper_expanded`);  
      $(calendar).addClass(`${this.blockName}__calendar_hidden`);
      this.hidden = true;
      return;
    }

    clear(event)  {
      let inRange = event.target.closest(`.${this.blockName}`).querySelectorAll('.-in-range-');
      inRange.forEach((item) => 
      {
        $(item).removeClass('-in-range-')
        return;
      });
      let selected = event.target.closest(`.${this.blockName}`).querySelectorAll('.-selected-');
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
    constructor(block, blockName) {
      super(block, blockName);
      Object.assign(this.options, {
          onSelect: () => console.log('yaaaaaa')
         }
      );
      $(`.${this.blockName}`).datepicker(this.options);

    }
  }
  
  Calendar.initialize(CalendarCard, 'calendar');
 
