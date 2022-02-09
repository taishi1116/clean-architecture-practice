import { ITodoRepository } from './ITodoRespository'
import { ID } from '../../../type'


export class GetTodo {
  private todoRepository:ITodoRepository

  constructor(todoRepository:ITodoRepository) {
    this.todoRepository = todoRepository
  }

  execute(id:ID){
    return this.todoRepository.find(id)
  }
}