// type addFunction = (a: number, b: number) => number

interface addFunction {
  (a: number, b: number): number
}

const addFunctionWithInterface: addFunction = (a: number, b: number): number =>
  a + b
