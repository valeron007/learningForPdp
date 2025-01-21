import {Square} from "./square.js";
import {Point} from "./point.js";
import {Triangle} from "./triangle.js";

export class ShapeFabricMethod {
    create(type) {
        if (type === 'square') {
            return new Square(new Point(1, 2), new Point(5, 6));
        }

        if (type === 'triangle') {
            return new Triangle(new Point(1, 2), new Point(5, 6), new Point(10, 11));
        }

    }
}
