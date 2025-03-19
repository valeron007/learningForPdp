import { CarAccess } from "./caraccess.js";
import { SecuritySystem } from "./securitysystem.js";

const door = new SecuritySystem(new CarAccess)
door.open('Jack')
door.open('Ilon')
door.close()


