$('.input__option-iteration_increment').click(function(){
    if ($(this).hasClass('input__option-iteration_disabled')) return;
    let quantity = $(this).parent().children('.input__option-quantity').text();
    quantity = ++quantity;
    if ($(this).parent().children('.input__option-iteration_decrement').hasClass('input__option-iteration_disabled')) {
        $(this).parent().children('.input__option-iteration_decrement').removeClass('input__option-iteration_disabled');
    }
    $(this).parent().children('.input__option-quantity').text(quantity)
});