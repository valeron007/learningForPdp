import { Auto } from './auto.js';
import { EngineV8 } from './enginev8.js';
import { Engine2 } from './engine2.js';
import { EngineV8adapter } from './engineadapter.js'; 

const myCar = new Auto()
const oldEngine = new Engine2()

myCar.startEngine(oldEngine)

const myCarv8 = new Auto()
const engineAdapter = new EngineV8adapter(new EngineV8())

myCarv8.startEngine(engineAdapter)

const myCarv2 = new Auto()
const engineAdapter2 = new EngineV8()

myCarv2.startEngine(engineAdapter2)
