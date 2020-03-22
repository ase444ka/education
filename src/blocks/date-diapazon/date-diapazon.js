class DateDiapazon {
    constructor(component) {
      this.component = component;
      const $start = $('.date-diapazon__start', this.component);
      const $end = $('.date-diapazon__end', this.component);
      this._attachEventHandler($start, $end);
    }
    _attachEventHandler($start, $end) {
      $start.datepicker({
        onSelect: function (fd, d, picker) {
            console.log(fd);
            $start.val(fd.split("-")[0]);
            $end.val(fd.split("-")[1]);
        },
        clearButton: 'true',
      });
      $end.datepicker({
        onSelect: function (fd, d, picker) {
            console.log(fd);
            $start.val(fd.split("-")[0]);
            $end.val(fd.split("-")[1]);
        },
        clearButton: 'true',
      });
      
    }
  }
  
  $(() => {
    $('.date-diapazon').each((index, node) => {
      new DateDiapazon(node);
    });
  });