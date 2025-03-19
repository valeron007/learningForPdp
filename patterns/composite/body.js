import { Equipment } from "./equipment.js";

export class Body extends Equipment {
    constructor() {
        super()
        this.setName('Body')
        this.setPrice(3000)
    }
}