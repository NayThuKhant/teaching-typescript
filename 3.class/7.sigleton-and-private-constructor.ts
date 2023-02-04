// Mission is to get the same instance everytime we create a new object using a class
class RandomClass {
  private static instance: RandomClass

  private constructor() {}

  static getInstance() {
    if (this.instance) {
      return this.instance
    }

    this.instance = new RandomClass()
    return this.instance
  }
}

//	new RandomClass() // Constructor of class 'RandomClass' is private and only accessible within the class declaration

console.log(RandomClass.getInstance() === RandomClass.getInstance())
