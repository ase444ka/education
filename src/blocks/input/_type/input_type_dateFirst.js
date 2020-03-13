$('.input_type_dateFirst').click(() => {
    let $start = $(this),
    $end = $start.parent.find('.input_type_dateLast');
    $start.datepicker({
        onSelect: function (fd, date) {
        $end.data('datepicker')
        .update('minDate', date);
    
        $end.focus();
        }
    })
    $end.datepicker({
        onSelect: function (fd, date) {
        $start.data('datepicker')
        .update('maxDate', date)
        }
    })
    return;
}
)
