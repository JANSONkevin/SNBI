export class Page {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }

    hide() {
        this.element.classList.add('visually-hidden');
    }

    show() {
        this.element.classList.remove('visually-hidden');
    }
};