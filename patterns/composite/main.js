import { Body } from "./body.js";
import { Car } from "./car.js";
import { Engine } from "./engine.js";
import { Tools } from "./tools.js";

const myCar = new Car()

myCar.add(new Engine())
myCar.add(new Body())
myCar.add(new Tools())

console.log(`${myCar.getName()} price is: ${myCar.getPrice()}`)
