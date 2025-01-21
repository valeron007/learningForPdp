import {Shape} from "./shape.js";

export class Square extends Shape{
    #y = null;
    constructor(x, y) {
        super(x);
        this.#y = y;
    }

    get y() {
        return this.#y;
    }

    print() {
        console.log('square');
        super.print();
        console.log(`${this.#y}`);
        console.log('square');
    }
}
