abstract class AbstractClass {
  doSomething() {
    console.log('Do Something!')
  }

  abstract doSomethingElse(): void
}

class InheritedClass extends AbstractClass {
  // Non-abstract class 'InheritedClass' does not implement all abstract members of 'AbstractClass'
  doSomethingElse(): void {
    console.log('Do something else')
  }
}

//	const abstractClass = new AbstractClass() //	Cannot create an instance of an abstract class
const inheritedClass = new InheritedClass()
