const aNumber: number = 1
const aString: string = 'abc'
const aBoolean: boolean = true

const anObject: { title: string } = { title: 'Typescript Fundamentals' }
const anArray: string[] = ['A', 'B', 'C']
const aTuple: [string, number] = ['abc', 1] // Array with fixed length and types for each index

aTuple.push('blah')

enum ANENUM {
  PENDING,
  PROCESSING,
  SHIPPING,
  DELIVERED,
}

const anAny: any = 'abc'

// Custom Type using type keyword
type CustomType = {
  name: string
  age: number
}

const aVariableWithCustomType: CustomType = {
  name: 'ABC',
  age: 1,
}
