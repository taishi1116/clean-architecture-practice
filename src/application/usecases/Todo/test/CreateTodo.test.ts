import { CreateTodo } from '../CreateTodo'
import { ITodoRepository } from '../ITodoRespository'
import { ID } from '../../../../type'
import { Todo } from '../../../../domain/Todo'
import moment from 'moment-timezone'

const todoRepository: ITodoRepository = {
  find(id: ID): Promise<Todo | null> {
    throw 'not implemented'
  },
  findAll(): Promise<Array<Todo>> {
    throw 'not implemented'
  },
  create(todo: Todo): Promise<Todo> {
    throw 'not implemented'
  },
  update(todo: Todo): Promise<Todo> {
    throw 'not implemented'
  },
  delete(id: ID): Promise<null> {
    throw 'not implemented'
  }
}

describe('CreateTodoのテスト', function () {
  const title = 'title'
  const description = 'description'

  const todo = new Todo(title, description)
  todo.id = 'dummyId'
  todo.createdAt = moment()
  todo.updatedAt = moment()

  const createSpy = jest.spyOn(todoRepository, 'create').mockReturnValue(new Promise((resolve) => resolve(todo)))

  beforeEach(() => {
    createSpy.mockClear()
  })

  it('interface層のtodoRepository.create()が呼ばれている', async function () {
    const usecase = new CreateTodo(todoRepository)
    expect(await usecase.execute(title, description)).toEqual(todo)
    expect(createSpy).toHaveBeenCalled()
  })

  it('title or descriptionが空文字の場合エラーを返す', async function () {
    const usecase = new CreateTodo(todoRepository)
    expect(() => usecase.execute('', description)).toThrow()
    expect(createSpy).not.toHaveBeenCalled()
    expect(() => usecase.execute(title, '')).toThrow()
    expect(createSpy).not.toHaveBeenCalled()
  })
})
