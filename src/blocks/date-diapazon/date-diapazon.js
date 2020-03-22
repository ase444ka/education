class DateDiapazon {
    constructor(component) {
      this.component = component;
      const $start = $('.date-diapazon__start', this.component);
      const $end = $('.date-diapazon__end', this.component);
      const $endOffset = $end.parent().parent().position().left;
      this._attachEventHandler($start, $end, $endOffset);
    }
    _attachEventHandler($start, $end, $endOffset) {
      $start.datepicker({
        onSelect: function (fd, d, picker) {
            $start.val(fd.split("-")[0]);
            $end.val(fd.split("-")[1]);
        },
        clearButton: 'true',
        position: "left bottom",
        offset: 0
      });
      $end.datepicker({
        onSelect: function (fd, d, picker) {
            $start.val(fd.split("-")[0]);
            $end.val(fd.split("-")[1]);
        },
        clearButton: 'true',
        position: "left bottom",
        offset: $endOffset,
      });
      
    }
  }
  
  $(() => {
    $('.date-diapazon').each((index, node) => {
      new DateDiapazon(node);
    });
  });