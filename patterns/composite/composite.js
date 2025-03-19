import { Equipment } from "./equipment.js";

export class Composite extends Equipment {
    constructor() {
        super()
        this.equipments = []
    } 

    add(equipment) {
        this.equipments.push(equipment)
    }

    getPrice() {
        return this.equipments
        .map(equipment => equipment.getPrice()).reduce((a, b) => a + b)
    }

}
