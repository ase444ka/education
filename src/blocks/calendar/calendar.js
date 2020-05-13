import "./js/datepicker"
import {initialize} from 'Blocks/public'
export class Calendar {
    constructor(block, blockName) {
      this.block = block;
      this.hidden = true;
      this.static = false;
      this.blockName = blockName;
      this.inputName = `${this.blockName}__input`
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

    addFunctionality() {
      if (!this.static) {
        $('.datepicker-inline', this.block).addClass(`${this.blockName}__calendar_hidden`);
        $(`.${this.inputName}`, this.block).click((event) => {
          //если календарь скрыт - покажем!
          if (this.hidden) {
            $(event.target).addClass(`${this.inputName}_expanded`);
            this.show();
          }
          //а если это expand_less - скроем календарь!
          else {
            this.hide();
            $(event.target).removeClass(`${this.inputName}_expanded`);
          }
          
        })
      }
      $('.datepicker-inline', this.block).addClass(`${this.blockName}__calendar`);
      $('[data-action="clear"]',this.block).addClass(`${this.blockName}__calendar__button_target_clear`);
      $('[data-action="today"]',this.block).addClass(`${this.blockName}__calendar__button_target_apply`);
      
    } 

    show() {
        let calendar = $('.datepicker-inline', this.block);
        if ($(calendar).hasClass(`${this.blockName}__calendar_hidden`)) {
            $(calendar).removeClass(`${this.blockName}__calendar_hidden`);
        }
            $( `.${this.blockName}__calendar__button_target_apply`, this.block).click((event) => this.hide(event));
            $( `.${this.blockName}__calendar__button_target_clear`, this.block).click((event) => this.clear(event));
            $(document).click((event)=>{
              if (~event.target.className.indexOf('datepicker')) return;
              if (event.target.closest(`.${this.blockName}`)) return;
              if (this.hidden) return;
              if (this.static) return;
              this.clear();
              this.hide();             
              return;
            });
            this.hidden = false;
          
          return;
    }

    hide()  {
      let calendar = $('.datepicker-inline', this.block);
      let wrapperExpanded = $(`.${this.blockName}__input-wrapper_expanded`, this.block);
      $(wrapperExpanded).removeClass(`${this.blockName}__input-wrapper_expanded`);  
      $(calendar).addClass(`${this.blockName}__calendar_hidden`);
      this.hidden = true;
      return;
    }

    clear()  {
      let inRange = this.block.querySelectorAll('.-in-range-');
      inRange.forEach((item) => 
      {
        $(item).removeClass('-in-range-')
        return;
      });
      let selected = this.block.querySelectorAll('.-selected-');
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
      
      this.static = true;
      this.hidden = false;
      this.addFunctionality();
      this.show();

    }
  }
  
initialize(CalendarCard, 'calendar');
 
