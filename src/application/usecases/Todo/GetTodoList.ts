import { ITodoRepository } from './ITodoRespository'


export class GetTodoList {
  private todoRepository:ITodoRepository

  constructor(todoRepository:ITodoRepository) {
    this.todoRepository = todoRepository
  }

  execute(){
    return this.todoRepository.findAll()
  }
}