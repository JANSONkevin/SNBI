export class Hint {
    constructor(number) {
        this.number = number;
        this.easy = false;
        this.hard = false;
        this.solution = false;
    }

    seeEasy() {
        this.easy = true;
        return this;
    }

    seeHard() {
        this.hard = true;
        return this;
    }

    seeSolution() {
        this.solution = true;
        return this;
    }
}
