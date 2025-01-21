import {Shape} from "./shape.js";

export class Triangle extends Shape{
    #y = null;
    #z = null;
    constructor(x, y, z) {
        super(x);
        this.#y = y;
        this.#z = z;
    }

    get y() {
        return this.#y;
    }

    get z() {
        return this.#z;
    }

    print() {
        console.log('triangle');
        super.print();
        console.log(`${this.#y}:${this.#z}`);
        console.log('triangle');
    }

}