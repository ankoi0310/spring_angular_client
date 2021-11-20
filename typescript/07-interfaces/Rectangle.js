"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
class Rectangle {
    constructor(_width, _height) {
        this._width = _width;
        this._height = _height;
    }
    get width() { return this._width; }
    set width(value) { this._width = value; }
    get height() { return this._height; }
    set height(value) { this._height = value; }
    getInfo() {
        return `, width = ${this._width}, height = ${this._height}`;
    }
    calculateArea() {
        return this._width * this._height;
    }
}
exports.Rectangle = Rectangle;
//# sourceMappingURL=Rectangle.js.map