import './modal.scss';
export class Modal {
    constructor(block) {
        this.block = block;
    }
    hide() {
        $(this.block).removeClass('modal_opened');
    }
    show() {
        $(this.block).addClass('modal_opened');
    }
    message(text) {
        if (!$('.modal__message', this.block)) return;
        $('.modal__message', this.block).text(text);
    }
}

let modalNodes = document.querySelectorAll('.modal');
export let modals = {}

for (let node of modalNodes) {
    modals[node.dataset.target] = new Modal(node);
}
