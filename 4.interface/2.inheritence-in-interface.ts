interface One {
  readonly name: string
}

interface Two extends One {
  readonly age: number
}

class one implements Two {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}
