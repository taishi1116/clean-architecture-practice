import { ITodoRepository } from './ITodoRespository'
import { Todo } from '../../../domain/Todo'
import moment from 'moment-timezone'
import { ID } from '../../../type'

export class UpdateTodo {
  private todoRepository: ITodoRepository

  constructor(todoRepository: ITodoRepository) {
    this.todoRepository = todoRepository
  }

  async execute(id: ID, title: string, description: string) {
    const task = await this.todoRepository.find(id)
    if (task) {
      task.title = title
      task.description = description
      task.updatedAt = moment()
    }
    return task
  }
}
