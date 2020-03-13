$('.input_type_select i').click(function(){
    $(this).parent().toggleClass('input_expanded');
});
/* 
import {guests} from '../data.js';
import {rooms} from '../data.js';
$(document).ready(function(){
    $('.input_target_guests').children('.input__placeholder').text(guests.initial_value);
    $('.input_target_rooms').children('.input__placeholder').text(rooms.initial_value);
    let li = $('.input_target_guests').children('.input__options').children('li');
    for (let i = 1; i++; i < guests.items.length) {
        li.append(li)
    }
    let i = 1;
    guests.items.forEach(function () {
        $('.input_target_guests').children('.input__option:nth-child(' + i++ + ')').text(guests.initial_value);
    })
    li = $('.input_target_rooms').children('.input__options').children('li');
    for (let i = 1; i++; i < rooms.items.length) {
        li.append(li)
    }
}); */