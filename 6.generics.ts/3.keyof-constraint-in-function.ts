type ANormalPerson = {
  name: string
  age: 100
}

type APerson = keyof ANormalPerson // same as "name" | "age" , The keyof operator takes an object type and produces a string or numeric literal union of its keys.
const aPerson: APerson = 'name'

// If we do the following, ts dont know if the given object has the given key in it
// function getKeyOfAnObject1<T extends object, U extends string>(
//   object: T,
//   key: U
// ) {
//   return object[key]
// }
//  getKeyOfAnObject({ name: 'ABC' }, 'name')

function getKeyOfAnObject<T extends object, U extends keyof T>(
  object: T,
  key: U
) {
  return object[key]
}

getKeyOfAnObject({ name: 'ABC' }, 'name')
