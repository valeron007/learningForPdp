import { Car } from './car.js';

export class Tesla extends Car {
  constructor() {
    super()
    this.price = 25000
    this.model = 'Tesla'
  }
}