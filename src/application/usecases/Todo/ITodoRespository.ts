import { Todo } from '../../../domain/Todo'
import { UUID } from '../../../type'

// usecase層と interface層(gateways(repository))を繋げるinterface
export interface ITodoRepository {
  findAll():Promise<Array<Todo>>
  find(id:UUID):Promise<Todo>
  create(task:Todo):Promise<Todo>
  update(task:Todo):Promise<Todo>
  delete(task: Todo):Promise<Todo>
}