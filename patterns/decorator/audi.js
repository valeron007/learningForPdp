import { Car } from './car.js';

export class Audi extends Car {
  constructor() {
    super()
    this.price = 18000
    this.model = 'Audi'
  }
}