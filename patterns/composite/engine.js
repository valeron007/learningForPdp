import { Equipment } from "./equipment.js"

export class Engine extends Equipment {
    constructor() {
        super()
        this.setName('Engine')
        this.setPrice(800)
    }
}