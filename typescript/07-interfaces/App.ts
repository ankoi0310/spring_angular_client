import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";

let circle = new Circle(5);
let rectangle = new Rectangle(2, 5);

let shapes: Shape[] = [circle, rectangle];

for (let shape of shapes) {
    console.log(shape.calculateArea());
}