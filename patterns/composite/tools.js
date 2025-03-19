import { Equipment } from "./equipment.js";

export class Tools extends Equipment {
    constructor() {
        super()
        this.setName('Tools')
        this.setPrice(4000)
    }
}
