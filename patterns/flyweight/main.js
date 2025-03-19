import { AutoFactory } from "./autofactory.js";

const factory = new AutoFactory()

const bmw = factory.create('bmw')
const audi = factory.create('audi')
const tesla = factory.create('tesla')
const blackTesla = factory.create('tesla')

console.log(factory.getModels())