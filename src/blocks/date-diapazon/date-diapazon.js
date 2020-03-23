class DateDiapazon {
    constructor(component) {
      this.component = component;
      const $start = $('.date-diapazon__start', this.component);
      const $end = $('.date-diapazon__end', this.component);
      const $endOffset = $end.parent().parent().position().left;
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
        offset: 0
      });

    }
   
  }
  
  $(() => {
    $('.date-diapazon').each((index, node) => {
      new DateDiapazon(node);
    });
  });
  $(() => {

  });