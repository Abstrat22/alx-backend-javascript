import Building from './5-building';
/* eslint-disable no-underscore-dangle */
export default class SkyHighBuilding extends Building {
  constructor(sqft = 0, floors = 0) {
    super(sqft);
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(value) {
    this._floors = value;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}
