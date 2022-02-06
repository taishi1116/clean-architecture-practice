import { ITodoRepository } from './ITodoRespository'
import { Todo } from '../../../domain/Todo'
import moment from 'moment-timezone'


export class UpdateTodo {
  private todoRepository:ITodoRepository

  constructor(todoRepository:ITodoRepository) {
    this.todoRepository = todoRepository
  }

  async execute(todo:Todo){
    const task = await this.todoRepository.find(todo.id)
    task.title = todo.title
    task.description = todo.description
    task.updatedAt = moment()

    return this.todoRepository.update(task)

  }
}