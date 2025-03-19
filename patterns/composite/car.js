import { Composite } from "./composite.js";

export class Car extends Composite {
    constructor() {
        super()
        this.setName('Audi')
    }
}