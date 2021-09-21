export class Image {
    constructor(selector, active, inactive, base) {
        this.element = document.querySelector(selector);
        this.active = active;
        this.inactive = inactive;
        this.base = base;
    }

    switch(mode) {
        this.element.style = `background-image: url('/build/${this.base}/${mode}.png')`;
        return this.element;
    }

    activate() {
        return this.switch(this.active);
    }

    deactivate() {
        return this.switch(this.inactive);
    }
}