$('.input__button_target_clear').click(function(){
    $(this).closest(".input__customization").find('.input__option-quantity').text('0');
    $(this).closest(".input__customization").find('.input__option-iteration_decrement').addClass('input__option-iteration_disabled');
});