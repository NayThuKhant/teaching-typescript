// -- Unknown --

let anUnknown: unknown
anUnknown = 'abc'
anUnknown = 1

let aKnown: string
// aKnown = anUnknown (Error)
if (typeof anUnknown === 'string') aKnown = anUnknown

/**
 * -- Never --
 * The never type is used when you are sure that something is never going to occur. For example,
 * you write a function which will not return to its end point or always throws an exception.
 */
function throwSomething(): never {
  throw new Error('something')
}
