export class Shape {
    #x = null;
    constructor(x) {
        this.#x = x;
    }

    print() {
        console.log(`${this.#x}`);
    }

}
