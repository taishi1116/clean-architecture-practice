import { ITodoRepository } from './ITodoRespository'
import { Todo } from '../../../domain/Todo'


export class GetTodo {
  private todoRepository:ITodoRepository

  constructor(todoRepository:ITodoRepository) {
    this.todoRepository = todoRepository
  }

  execute(todo:Todo){
    return this.todoRepository.find(todo.id)
  }
}