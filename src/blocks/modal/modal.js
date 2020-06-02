import './modal.scss';
export let opened = null;
export class Modal {
    constructor(block) {
        this.block = block;
        this.showing = false;
        this.text = "";
    }
    hide() {
        if (this.text) {
            this.text = false;
        }
        $(this.block).removeClass('modal_opened');
        this.showing = false;
        opened = null;
    }
    show(text) {
        this.text = text || '';
        this.showing = true;
        if (opened) opened.hide();
        opened = this;
        $(this.block).addClass('modal_opened');
        if (text && $('.modal__message', this.block)) {
            $('.modal__message', this.block).text(text);
        }
        document.addEventListener('click', (event) => {
            if (event.target.closest('.modal__window')) return;
            if (opened) opened.hide();
            return;
        });  
        $(document).keydown( (e) => {
            // ESCAPE key pressed
            if (e.keyCode == 27) {
                if (this.showing) this.hide();
            }
        });
    }
}

let modalNodes = document.querySelectorAll('.modal');
export let modals = {}

for (let node of modalNodes) {
    modals[node.dataset.target] = new Modal(node);
}
