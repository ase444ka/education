$('.input__option-iteration_decrement').click(function(){
    if ($(this).hasClass('input__option-iteration_disabled')) return;
    let quantity = $(this).parent().children('.input__option-quantity').text();
    if (quantity <= 0) return;
    quantity = --quantity;
    if (quantity == 0) {
        $(this).addClass('input__option-iteration_disabled')
    }
    $(this).parent().children('.input__option-quantity').text(quantity);

});