import { Todo } from '../../domain/Todo'
import { ID } from '../../type'

interface TodoResponse {
  id: ID
  title: string
  description: string
}

export interface ITodoOutputSerializer {
  todo(todo: Todo): TodoResponse
  todos(todo: Todo[]): TodoResponse[]
}
