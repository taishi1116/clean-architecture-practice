import { ITodoRepository } from './ITodoRespository'
import { UUID } from '../../../type'

export class DeleteTodo {
  private todoRepository:ITodoRepository
  constructor(todoRepository:ITodoRepository) {
    this.todoRepository = todoRepository
  }

  execute(id:UUID){
    return this.todoRepository.delete(id)
  }
}