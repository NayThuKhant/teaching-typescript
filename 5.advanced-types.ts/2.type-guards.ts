const unionVariable: string | number = 1

if (typeof unionVariable === 'number') {
  console.log('union variable is number')
}

type AType = {
  name: string
  doSomething: () => void
}

type BType = {
  name: string
  doSomethingElse: () => void
}

const printSomething = (parameter: AType | BType) => {
  /*
   * Following check wont work because typeof returns only js types, not the ts types, in this case, it will be object
   *
   * if(typeof parameter === 'AType') {}
   *
   * We have to use other narrowing down methods
   */

  if ('doSomething' in parameter) {
    parameter.doSomething()
  }

  if ('doSomethingElse' in parameter) {
    parameter.doSomethingElse()
  }
}

// Descriminated interfaces, giving same to interfaces which will be used as union to form another type
interface Bird {
  type: 'bird' // could be any name, just a literal
  flyingSpeed: number
}

interface Horse {
  type: 'horse' // could be any name, just a literal
  runningSpeed: number
}

type Animal = Bird | Horse

function moveAnimal(animal: Animal) {
  let speed: number
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed
      break
    case 'horse':
      speed = animal.runningSpeed
      break
  }

  console.log(`Moving at speed : speed`)
}
