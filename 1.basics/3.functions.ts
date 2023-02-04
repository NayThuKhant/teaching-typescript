const functionA: Function = () => console.log('A function')

function add(number1: number, number2: number): number {
  return number1 + number2
}

let addFunction: (number1: number, number2: number) => number
addFunction = add

const aFunctionWithCallback = (
  number1: number,
  number2: number,
  cb: (number1: number, number2: number) => number
) => cb(number1, number2)

aFunctionWithCallback(1, 2, add)

// void
// return types
// callback function types
