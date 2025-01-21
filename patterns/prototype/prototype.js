class TestCar {
    constructor(model, price, interior, autopilot) {
        this.model = model;
        this.price = price;
        this.interior = interior;
        this.autopilot = autopilot;
    }

    clone() {
        return new TestCar(this.model, this.price, this.interior, this.autopilot);
    }
}

const car = new TestCar('x5', 8000, 'black', false);
const car1 = car.clone();
const car2 = car.clone();
const car3 = car.clone();
car1.interior = 'white';
car1.autopilot = true;

console.log(car.interior);
console.log(car1.interior);
