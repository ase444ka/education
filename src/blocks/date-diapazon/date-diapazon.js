$('.date-diapazon').datepicker({ 
    onSelect:  (fd, d, picker) => { 
        let id = picker.el.id.slice(-2);

        let firstInputId = "#date-diapazon__first_id_" + id
        let secondInputId = "#date-diapazon__last_id_" + id

        $(firstInputId).val(fd.split("-")[0]);
        $(secondInputId).val(fd.split("-")[1]);
    }
  });