import Currency from './3-currency';
/* eslint-disable no-underscore-dangle */
export default class Pricing {
  constructor(amount = 0, currency = new Currency()) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(value) {
    this._amount = value;
  }

  set currency(value) {
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} (${this._currency.displayFullCurrency()})`;
  }

  static convertPrice(amount = 0, conversionRate = 0.0) {
    return amount * conversionRate;
  }
}
