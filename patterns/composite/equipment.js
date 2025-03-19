export class Equipment {
    getPrice() {
        return this.price || 0
    }

    getName() {
        return this.name
    }

    setName(name) {
        this.name = name
    }

    setPrice(price) {
        this.price = price
    }
}