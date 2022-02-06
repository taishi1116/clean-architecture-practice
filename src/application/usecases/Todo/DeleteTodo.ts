import { ITodoRepository } from './ITodoRespository'
import { Todo } from '../../../domain/Todo'

export class DeleteTodo {
  private todoRepository:ITodoRepository
  constructor(todoRepository:ITodoRepository) {
    this.todoRepository = todoRepository
  }

  execute(task:Todo){
    return this.todoRepository.delete(task)
  }
}