export class Switch {
    constructor(selector, current, after, isBack = false) {
        this.element = document.querySelector(selector);
        this.current = document.querySelector(current);
        this.after = document.querySelector(after);
        this.isBack = isBack
    }

    watch() {
        this.element.addEventListener('click', () => {
            this.change()
            if (this.isBack) {
                document.querySelector('#touche-retour-audio').currentTime = 0;
                document.querySelector('#touche-retour-audio').play();
            } else {
                document.querySelector('#page-audio').currentTime = 0;
                document.querySelector('#page-audio').play();
            }
        });
        return this.element;
    }

    change() {
        this.current.classList.add('visually-hidden');
        this.after.classList.remove('visually-hidden');
        return this.element;
    }
};
