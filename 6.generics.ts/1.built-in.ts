/*
 * 	What is generic?
 *
 *	Placeholder types for the functions, classes & interfaces
 */

// Built in generics
const names: Array<string> = ['A', 'B', 'C', 'D', 'E', 'F']

const promise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve('A string')
  }, 1000)
})
promise.then((value) => value.split(''))
