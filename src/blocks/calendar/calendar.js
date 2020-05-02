import "./js/datepicker"
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

    static initialize(_class, block) {
      $(() => {
        $(`.${block}`).each((index, node) => {
          new _class(node);
        });
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

    hide(event, block)  {
      let parent = event.target.closest(`.${block}`);
      let calendar = $('.datepicker-inline', parent);
      let wrapperExpanded = $(`.${block}__input-wrapper_expanded`, parent);
      $(wrapperExpanded).removeClass(`${block}__input-wrapper_expanded`);  
      $(calendar).addClass(`${block}__calendar_hidden`);
      return;
    }

    clear(event, block)  {
      let inRange = event.target.closest(`.${block}`).querySelectorAll('.-in-range-');
      inRange.forEach((item) => 
      {
        $(item).removeClass('-in-range-')
        return;
      });
      let selected = event.target.closest(`.${block}`).querySelectorAll('.-selected-');
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
  
  Calendar.initialize(Calendar, 'calendar');
 
