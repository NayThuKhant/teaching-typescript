/*
 *	Decorators are just functions that we apply to something (for example, to a class) in a certain way
 *
 * 	Decorators are executed when our class is defined, not when instantiated
 *	Decorators run when js define your class definition, we dont even need to instantiate the object for decorators to work
 *
 */

function Logger(constructor: Function) {
  console.log('Logging...')
  console.log(constructor)
}

@Logger
class City {
  name = 'ABC'

  constructor() {
    console.log('Creating City Object...')
  }
}

const city = new City()
console.log(city)

/*
 *	Decorator Factory
 *
 * 	Useful if we want to pass custom arguments to the Decorator
 */

function Logger1(string: string) {
  return function (constructor: Function) {
    console.log('Creating City Object...')
    console.log(constructor)
    console.log(string)
  }
}

@Logger1('City 1')
class City1 {
  name = 'ABC1'

  constructor() {
    console.log('Creating City1 Object...')
  }
}
