class Person {
  //  without initialization, ts will force you to initialize the variable here or assign the value through the constructor
  name: string

  // member of the class can have access modifiers which js doesnt have built in support
  nicknames: string[] = []
  private hoobies: string[] = []

  constructor(name: string) {
    this.name = name
  }

  walk(how: 'Faster' | 'Slower') {
    console.log(`${this.name} is instructed to walk ${how}`)
  }

  addHoobies(hoobie: string) {
    this.hoobies.push(hoobie)
  }
}

const person = new Person('ABC')
person.walk('Faster')

person.addHoobies('Playing football')
// person.hoobies[1] = 'Playing guiter' // Property 'hoobies' is private and only accessible within class 'Person'.

person.nicknames[0] = 'CBA'
