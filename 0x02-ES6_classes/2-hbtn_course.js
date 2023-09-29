/* eslint-disable no-underscore-dangle */
export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof (name) !== 'string') {
      throw new Error('Type Error: String required for name');
    }
    this._name = name;

    if (typeof (length) !== 'number') {
      throw new Error('Type Error: Number required for length');
    }
    this._length = length;

    if (Array.isArray(students)) {
      for (const value of students) {
        if (typeof (value) !== 'string') {
          throw new Error('Type Error: String required');
        }
      }
    } else {
      throw new Error('Type Error: Array of String required students');
    }

    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(value) {
    if (typeof (value) !== 'string') {
      throw new Error('Type Error: String required for name');
    }
    this._name = value;
  }

  set length(value) {
    if (typeof (value) !== 'number') {
      throw new Error('Type Error: Number required for length');
    }
    this._length = value;
  }

  set students(values) {
    if (Array.isArray(values)) {
      for (const value of values) {
        if (typeof (value) !== 'string') {
          throw new Error('Type Error: String required');
        }
      }
    } else {
      throw new Error('Type Error: Array of String required students');
    }

    this._students = values;
  }
}
