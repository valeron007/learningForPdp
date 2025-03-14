import { Model } from './model.js';

export class Audi extends Model {
  constructor(color) {
    super(color)
  }
  paint() {
    return `Auto: Audi, Color: ${this.color.get()}`
  }
}