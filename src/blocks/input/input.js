import Inputmask from "inputmask";
let selector = document.querySelector(".input_masked");
 
let im = new Inputmask("99.99.9999");
im.mask(selector);