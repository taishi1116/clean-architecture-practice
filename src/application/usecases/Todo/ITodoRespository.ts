import { Todo } from '../../../domain/Todo'
import { ID } from '../../../type'

// usecase層と interface層(gateways(repository))を繋げるinterface
export interface ITodoRepository {
  findAll():Promise<Array<Todo>>
  find(id:ID):Promise<Todo | null>
  create(task:Todo):Promise<Todo>
  update(task:Todo):Promise<Todo>
  delete(id: ID):Promise<null>
}