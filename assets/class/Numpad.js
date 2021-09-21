export class Numpad {
    constructor(pad, output, limit = 4) {
        this.element = document.querySelector(pad);
        this.output = document.querySelector(output);
        this.limit = limit;
        this.children = this.element.children;
    }
    
    listen(child, callback) {
        child.addEventListener('click', callback);
    }

    start() {
        this.children.forEach((child, index) => {
            this.listen(child, () => {
                switch (index) {
                    case 10:
                        this.write('0');
                        document.querySelector('#bouton-number-audio').currentTime = 0;
                        document.querySelector('#bouton-number-audio').play();
                        break;
                    case 9:
                        this.reset();
                        document.querySelector('#touche-effacer-audio').currentTime = 0;
                        document.querySelector('#touche-effacer-audio').play();
                        break;
                    case 11:
                        break;
                    default:
                        this.write((index + 1).toString());
                        document.querySelector('#bouton-number-audio').currentTime = 0;
                        document.querySelector('#bouton-number-audio').play();
                        break;
                }
            })
        });
        return this.element;
    };

    write(value) {
        if (this.output.innerHTML.length < this.limit)
        {
            this.output.innerHTML += value;
        }
        return this.element;
    }

    reset() {
        this.output.innerHTML = "";
        return this.element;
    }

};
