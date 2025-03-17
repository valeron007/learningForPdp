import { Audi } from './audi.js';
import { AutoPilot } from './autopilot.js';
import { ParkTronic } from './parktronic.js';
import { Tesla } from './tesla.js';

let tesla = new Tesla()
let audi = new Audi()

tesla = new AutoPilot(tesla)
tesla = new ParkTronic(tesla)

console.log(tesla.getPrice())
console.log(tesla.getDescription())
