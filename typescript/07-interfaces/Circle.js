"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
class Circle {
    constructor(_radius) {
        this._radius = _radius;
    }
    get radius() { return this._radius; }
    set radius(value) { this._radius = value; }
    getInfo() {
        return `, radius = ${this._radius}`;
    }
    calculateArea() {
        return Math.PI * Math.pow(this._radius, 2);
    }
}
exports.Circle = Circle;
//# sourceMappingURL=Circle.js.map