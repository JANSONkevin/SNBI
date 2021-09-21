export class Rewriter {
    constructor(input, output, isWhiteSpaceAllowed = true) {
        this.input = document.querySelector(input);
        this.output = document.querySelector(output);
        this.isWhiteSpaceAllowed = isWhiteSpaceAllowed;
        this.allowedChars = "azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBN!0123456789";
    }
    watch() {
        this.input.addEventListener('input', (e) => {
            document.querySelector('#bouton-number-audio').currentTime = 0;
            document.querySelector('#bouton-number-audio').play();
            if (!this.isWhiteSpaceAllowed) {
                if (this.allowedChars.indexOf(e.data) == -1)
                this.input.value = this.input.value.replace(e.data, "");
            }
            this.output.innerHTML = this.input.value.toLowerCase();
        })
    }
    
    finalOutput() {
        document.querySelector('#touche-valider-audio').currentTime = 0;
        document.querySelector('#touche-valider-audio').play();
        return this.input.value.toLowerCase();
    }

    reset() {
        this.input.value = "";
        this.output.innerHTML = "";
        document.querySelector('#touche-effacer-audio').currentTime = 0;
        document.querySelector('#touche-effacer-audio').play();
    }
};