/*
 * Why generic classes are useful?
 * Imagine we need a class to interact with Data, and we want to manage strings, numbers & booleans in an array
 */

class CommonStorage<T> {
  private data: T[] = []

  add(data: T) {
    this.data.push(data)
  }

  remove(data: T) {
    this.data.splice(this.data.indexOf(data), 1)
  }

  getData() {
    return this.data
  }
}

const stringStorage = new CommonStorage<string>()
stringStorage.add('ABC')
console.log(stringStorage.getData())
stringStorage.remove('ABC')
console.log(stringStorage.getData())

const numberStorage = new CommonStorage<number>()
numberStorage.add(0)
console.log(numberStorage.getData())
numberStorage.remove(0)
console.log(numberStorage.getData())

const booleansStorage = new CommonStorage<boolean>()
booleansStorage.add(true)
console.log(booleansStorage.getData())
booleansStorage.remove(true)
console.log(booleansStorage.getData())

// NOTE - if we pass generic type as object and try to remove it, the program will not be able to because objects in javascript are passed by reference

const objectsStorage = new CommonStorage<object>()
objectsStorage.add({ name: 'ABC' })
objectsStorage.add({ name: 'DEF' })
objectsStorage.remove({ name: 'ABC' }) // You will see that only the last index will be removed
console.log(objectsStorage.getData())

// To solve this behaviour, we have to pass the reference, not the new object
const object = { name: 'ABC' }
const anotherObject = { name: 'DEF' }
const anotherObjectStorage = new CommonStorage<object>()
anotherObjectStorage.add(object)
anotherObjectStorage.add(anotherObject)
anotherObjectStorage.remove(object) // This will work
console.log(anotherObjectStorage.getData())

// Improvement
// We could also define constraints in CommonStorage<T extends string|number|boolean> if we want to support only primitive types
