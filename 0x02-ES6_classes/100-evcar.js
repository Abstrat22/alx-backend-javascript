/* eslint-disable no-underscore-dangle, class-methods-use-this */
import Car from './10-car';

export default class EVCar extends Car {
  constructor(range, brand, motor, color) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    return new Car();
  }
}
