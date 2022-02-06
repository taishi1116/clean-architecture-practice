import uuid4 from "uuid4";
import moment from 'moment-timezone'
import { Todo } from '../../../domain/Todo'
import {ITodoRepository} from './ITodoRespository'

export class CreateTodo {
  private taskRepository: ITodoRepository

  constructor(taskRepository: ITodoRepository) {
  this.taskRepository = taskRepository
  }

  execute(title:string,description:string){
    const task = new Todo(title,description);

    // アプリケーション要件的な要素はインスタンス化で設定せず、setterで設定
    task.id = uuid4()
    task.createdAt = moment()
    task.updatedAt= moment()

    return this.taskRepository.create(task)
  }
}