/* eslint-disable no-underscore-dangle */
export default class HolbertonClass {
  constructor(size = 0, location = '') {
    this._size = size;
    this._location = location;
  }

  // Implement the [Symbol.toPrimitive] method to customize primitive value conversion.
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    }
    if (hint === 'string') {
      return this._location;
    }
    // return the object itself for any other hint or no hint
    return this;
  }
}
