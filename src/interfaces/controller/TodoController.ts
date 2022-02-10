import { TodoRepository } from '../gateways/memory/TodoRepository'
import { TodoSerializer } from '../presenters/TodoSerializer'
import { GetTodo } from '../../application/usecases/Todo/GetTodo'
import { GetTodoList } from '../../application/usecases/Todo/GetTodoList'
import { CreateTodo } from '../../application/usecases/Todo/CreateTodo'
import { UpdateTodo } from '../../application/usecases/Todo/UpdateTodo'
import { DeleteTodo } from '../../application/usecases/Todo/DeleteTodo'
import express from 'express'

type Request = {
  req: express.Request
}

export class TodoController {
  private todoSerializer: TodoSerializer
  private todoRepository: TodoRepository

  constructor() {
    this.todoRepository = new TodoRepository()
    this.todoSerializer = new TodoSerializer()
  }

  async find({ req }: Request) {
    const id = req.query.id as string

    const usecase = new GetTodo(this.todoRepository)
    const result = await usecase.execute(id)

    if (result === null) {
      return null
    } else {
      return this.todoSerializer.todo(result)
    }
  }
  async findAll() {
    const usecase = new GetTodoList(this.todoRepository)
    const result = await usecase.execute()

    return this.todoSerializer.todos(result)
  }
  async create({ req }: Request) {
    const { title, description } = req.body
    const usecase = new CreateTodo(this.todoRepository)
    const result = await usecase.execute(title, description)

    return this.todoSerializer.todo(result)
  }
  async updateTodo({ req }: Request) {
    const id = req.query.id as string
    const { title, description } = req.body
    const usecase = new UpdateTodo(this.todoRepository)
    const result = await usecase.execute(id, title, description)

    if (result === null) {
      return null
    } else {
      return this.todoSerializer.todo(result)
    }
  }

  async delete({ req }: Request) {
    const id = req.query.id as string

    const usecase = new DeleteTodo(this.todoRepository)
    const result = await usecase.execute(id)
    return result
  }
}
