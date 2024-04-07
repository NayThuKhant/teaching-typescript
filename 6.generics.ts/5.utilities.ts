//	Read more at https://www.typescriptlang.org/docs/handbook/utility-types.html
//	Extra Strict, Extra Helpers

interface Todo {
  title: string
  description: string
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate }
}

const todo1 = {
  title: 'Do ABC',
  description: 'ABC',
}

const todo2 = updateTodo(todo1, {
  description: 'Do DEF',
})
