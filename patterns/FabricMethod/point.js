export class Point {
    #x = 0
    #y = 0
    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }

    get x() {
        return this.#x;
    }

    get y() {
        return this.#y;
    }

    toString() {
        return `Point ${this.#x}:${this.#y}`;
    }

}

