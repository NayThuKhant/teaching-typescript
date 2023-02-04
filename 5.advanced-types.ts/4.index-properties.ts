// When we dont know the properties of the interface, let's say we want the object with {name: 'Invalid Name', 'Position': 'Invalid Position', ...}

interface ErrorBag {
  id: string
  [prop: string]: string // [anyNameOfYourChoice: 'string', 'number', 'symbol', or a template literal type - everything which can be object key] : type
}

const error: ErrorBag = {
  id: 'abcdef',
  name: 'Invalid Name',
  username: 'Invalid Username',
  // ...
}
