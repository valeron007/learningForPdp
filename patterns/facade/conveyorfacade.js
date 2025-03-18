export class ConveyorFaced {
    constructor(car) {
        this.car = car
    }

    assempleCar() {
        this.car.setBody()
        this.car.setEngine()
        this.car.setInterior()
        this.car.setExterior()
        this.car.setWheels()
        this.car.addElectronics()
        this.car.paint()
    }
}