export class ParkTronic {
  constructor(car) {
    this.car = car
  }

  getPrice() {
    return this.car.getPrice() + 3000
  }

  getDescription() {
    return `${this.car.getDescription()} with parktronic`
  }

}