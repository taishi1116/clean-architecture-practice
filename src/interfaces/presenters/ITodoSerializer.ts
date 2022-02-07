import { Todo } from '../../domain/Todo'
import { UUID } from '../../type'

interface TodoResponse{
  id:UUID,
  title:string,
  description:string
}

export interface ITodoOutputSerializer {
  todo(todo:Todo):TodoResponse
  todos(todo:Todo[]):TodoResponse[]
}