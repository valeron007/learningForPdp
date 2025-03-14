import { Model } from './model.js';

export class Bmv extends Model {
  constructor(color) {
    super(color)
  }

  paint() {
    return `Auto: Bmv, Color: ${this.color.get()}`
  }
}