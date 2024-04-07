function Property() {
  return function (target: any, property: string | Symbol) {
    /*
     *	If we use property decorator on,
     *	- instance properties, target will be prototype
     * 	- static preperties, target will be constructor function of the class
     */
    console.log('Property Decorator')
    console.log(target, property)
  }
}

function Accessor() {
  return function (
    target: any,
    name: string | Symbol,
    descriptor: PropertyDescriptor
  ) {
    /*
     *	If we use Accessor decorator on,
     *	- instance accessor, target will be prototype
     * 	- static accessor, target will be constructor function of the class
     */
    console.log('Accessor Decorator')
    console.log(target, name, descriptor)
  }
}

function Method() {
  return function (
    target: any,
    name: string | Symbol,
    descriptor: PropertyDescriptor
  ) {
    /*
     *	If we use Method decorator on,
     *	- instance Method, target will be prototype
     * 	- static Method, target will be constructor function of the class
     */
    console.log('Method Decorator')
    console.log(target, name, descriptor)
  }
}

function Parameter() {
  return function (target: any, name: string | Symbol, position: number) {
    /*
     *	If we use Parameter decorator on,
     *	- instance Parameter, target will be prototype
     * 	- static Parameter, target will be constructor function of the class
     */
    console.log('Parameter Decorator')
    console.log(target, name, position)
  }
}

class Product {
  private _price: number

  @Property()
  title: string = 'ABC'

  @Property()
  static description: string

  constructor(title: string, price: number) {
    this.title = title
    this._price = price
  }

  @Accessor()
  get price() {
    return this._price
  }

  set price(value: number) {
    this._price = value
  }

  @Method()
  getPrice() {
    return this._price
  }

  setPrice(@Parameter() value: number) {
    this._price = value
  }
}
