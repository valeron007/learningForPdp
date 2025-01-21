class Singleton {
    static #instance = null;
    #waterAmount = 0;
    constructor(amount) {
        this.#waterAmount = amount;
    }

    get waterAmount() {
        return this.#waterAmount;
    }

    static getInstance(amount) {
        if (Singleton.#instance) {
            return Singleton.#instance;
        }
        Singleton.#instance = new Singleton(amount);
        return Singleton.#instance;
    }
}

let instance1 = Singleton.getInstance(300);
let instance2 = Singleton.getInstance(400);

console.log(Singleton.waterAmount);
console.log(Singleton.waterAmount);
console.log(instance1 === instance2);
