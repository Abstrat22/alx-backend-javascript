/* eslint-disable no-underscore-dangle */
const carSymbol = Symbol('Car');
export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this[carSymbol] = Car;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  set brand(value) {
    this._brand = value;
  }

  set motor(value) {
    this._motor = value;
  }

  set color(value) {
    this._color = value;
  }

  cloneCar(){
    // Create a new instance of the class using the symbol
    return new this[carSymbol](this._brand, this._motor, this._color);
  }
}
