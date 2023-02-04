interface InterfaceWithOptionalParametersAndProperties {
  id?: string

  printSomething: (something?: string) => void
}

class AClassWithStaticPropertyAndMethods
  implements InterfaceWithOptionalParametersAndProperties
{
  printSomething: (something?: string) => void = (something?: string) => {
    console.log(something)
  }
}
