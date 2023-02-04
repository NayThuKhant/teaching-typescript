class AClass {
  //  we dont manually have to create a member property 'id' here with the help of shorthand initialization

  constructor(public id: string, private readonly tags: string[]) {
    this.id = id
    this.tags = tags
  }

  doSomething() {
    this.id = 'cba'
    //	this.tags = ['a', 'b', 'c'] // Cannot assign to 'tags' because it is a read-only property.
  }
}

const anObjectFromAClass = new AClass('abc', ['a', 'b', 'c'])
