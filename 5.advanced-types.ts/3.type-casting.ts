const input = document.querySelector('input')! // ts will infer type as HTMLInputElement | null
input.value = 'ABC'

const element = document.getElementById('input')! // ts will infer type as HTMLElement | null becuase it has no idea of what kind of element this could be
//	element.value = 'ABC' // Property 'value' does not exist on type 'HTMLElement'

// Type Casting
const anElement = <HTMLInputElement>document.getElementById('input')! // casting using <>
anElement.value = 'ABC'

const anotherElement = document.getElementById('input')! as HTMLInputElement // casting using as keyword
anotherElement.value = 'ABC'
