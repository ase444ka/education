import './button.scss';
import {modals} from 'Blocks/modal/modal'
import {opened} from 'Blocks/modal/modal'
$('.button').click((event)=>{
    let tar = event.target.dataset.target;
    modals[tar].show();
    if (!(tar == "message"))  event.stopPropagation();
});