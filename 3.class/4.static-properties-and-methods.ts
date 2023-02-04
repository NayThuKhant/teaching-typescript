class AClassWithStaticPropertyAndMethod {
  static id: string = 'AClassWithStaticPropertyAndMethod'

  static doSomething() {
    console.log('You dont have to instantiate an object to call this method')
  }

  static printId() {
    console.log(`ID of this class is ${AClassWithStaticPropertyAndMethod.id}`) // Use the class name directly to access static properties or methods
  }
}

console.log(AClassWithStaticPropertyAndMethod.id)
AClassWithStaticPropertyAndMethod.printId()

AClassWithStaticPropertyAndMethod.doSomething()
