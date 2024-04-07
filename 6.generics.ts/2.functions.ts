// Custom generic function
function returnArgument<T>(arg: T): T {
  return arg
}

const returnedArgument = returnArgument<string>('ABC')
const anotherReturnArgument = returnArgument<number>(1)

// Custom generic function
function merge<T, U>(objectA: T, objectB: U) {
  return Object.assign({}, objectA, objectB)
}

const mergedObject = merge({ name: 'ABC' }, { age: 100 })
console.log(mergedObject.name)

const mergedObject1 = merge({ name: 'ABC', age: 100 }, { address: 'ABCDEF' })
console.log(mergedObject1.name)

// You can see that 30 will not be assigned to object since it's number and Object.assign cant work on that
const mergedObject2 = merge({ name: 'ABC', age: 100 }, 30)
console.log(mergedObject2)

// Then how do we prevent it using type constraints?
function merge1<T extends object, U extends object>(objectA: T, objectB: U) {
  return Object.assign({}, objectA, objectB)
}

//  const merge1Object = merge1({ name: 'ABC', age: 100 }, 30) // Argument of type 'number' is not assignable to parameter of type 'object'.

// With Tuples
interface Lengthy {
  length: number
}

function getElementAndLength<T extends Lengthy>(element: T) {
  const count = element.length
  return [element, count]
}

console.log(getElementAndLength('Hello world!'))
console.log(getElementAndLength(['Hello', 'World!']))
//	getElementAndLength[10] // Property '10' does not exist on type '<T extends Lengthy>
