import { Todo } from '../../domain/Todo'
import { ITodoOutputSerializer } from './ITodoSerializer'

const serialize = (todo: Todo) => {
  return {
    id: todo.id,
    title: todo.title,
    description: todo.description
  }
}

export class TodoSerializer implements ITodoOutputSerializer {
  todo(todo: Todo) {
    return serialize(todo)
  }
  todos(todo: Todo[]) {
    return todo.map((mTodo) => serialize(mTodo))
  }
}
