export class AutoPilot {
  constructor(car) {
    this.car = car
  }

  getPrice() {
    return this.car.getPrice() + 5000
  }

  getDescription() {
    return `${this.car.getDescription()} with autopilot`
  }

}