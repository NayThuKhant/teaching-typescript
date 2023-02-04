/*
 * TS specific feature, not from js
 * Interface is a custom type used to describe structure of the object, we can interface it by a class
 *
 * readonly can be used, but not access modifiers
 */
interface PersonWithSpecificInterface {
  //	name: string = 'ABC' // An interface property cannot have an initializer, unlike class
  name: string
  age: number

  walk(how: 'Slower' | 'Faster'): void
}

// Implementing class must implement all properties and methods from the interface, can implement multiple interfaces which is different from inheritence
class PersonWhoWalkSlowly implements PersonWithSpecificInterface {
  name: string = 'ABC'
  age: number = 100

  walk(how: 'Slower' | 'Faster'): void {
    console.log(`${this.name} with ${this.age} is instructed to walk ${how}`)
  }
}

let personWithSpecificInterface: PersonWithSpecificInterface

personWithSpecificInterface = {
  name: 'ABC',
  age: 100,
  walk(how: 'Slower' | 'Faster'): void {
    console.log(`${this.name} with ${this.age} is instructed to walk ${how}`)
  },
}

personWithSpecificInterface.walk('Slower')

const personWhoWalkSlowly = new PersonWhoWalkSlowly()
personWhoWalkSlowly.walk('Faster')
