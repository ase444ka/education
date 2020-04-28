import Inputmask from "inputmask";
$(document).ready(function(){
  Inputmask().mask(document.querySelectorAll(".input_masked"));
});

$('.input_sending~.input__i').click((event) =>
{
  let checkingInput = event.target.previousElementSibling.value;
  let regecsp = /[-.\w]+@([\w-]+\.)+[\w-]+/;
  if (regecsp.test(checkingInput)) alert(`Вы будете получать новости на ${checkingInput}`);
  else alert('Облом :(');
}
)