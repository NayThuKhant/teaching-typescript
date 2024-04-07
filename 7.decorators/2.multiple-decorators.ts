/*
 * We can also have multiple decorators
 * Decorators work in bottom-up mode, the last one will be executed firstly
 */

function Decorator1() {
  return function (constructor: Function) {
    console.log('Decorator 1 is executed')
  }
}

function Decorator2() {
  return function (constructor: Function) {
    console.log('Decorator 2 is executed')
  }
}

@Decorator1()
@Decorator2()
class MultipleDecorators {
  constructor() {
    console.log('Creating multiple decorators object')
  }
}
