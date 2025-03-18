import { Conveyor } from "./conveyor";
import { ConveyorFaced } from "./conveyorfacade";

const conveyor = new ConveyorFaced(new Conveyor())
const car = conveyor.assempleCar()
console.log(car)
