type StringOrNumber = string | number

// We can add overloads as much as we want
function addTwoNumberOrString(a: number, b: number): number
function addTwoNumberOrString(a: string, b: string): string
function addTwoNumberOrString(a: string, b: number): string
function addTwoNumberOrString(a: number, b: string): string
function addTwoNumberOrString(a: StringOrNumber, b: StringOrNumber) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b
  }
  return a.toString + b.toString()
}

const result = addTwoNumberOrString('AB', 'CD') // Hovering on the fucntion call - function addTwoNumberOrString(a: string, b: string): string (+3 overloads)

result.split(' ') // ts doesnt know if the returing value is string or number depending on the arguments, without the help of overload, if we remove those lines, it will complaint "Property 'split' does not exist on type 'string | number'"
