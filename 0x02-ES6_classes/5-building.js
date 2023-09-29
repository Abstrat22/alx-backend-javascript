/* eslint-disable no-underscore-dangle */
export default class Building {
  constructor(sqft = 0) {
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }

  evacuationWarningMessage() {
    if (this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
