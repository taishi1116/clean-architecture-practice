import { ITodoRepository } from '../../../application/usecases/Todo/ITodoRespository'
import { Todo } from '../../../domain/Todo'
import { UUID } from '../../../type'
import { inMemoryTodo } from './InMemoryTodo'

export class TodoRepository implements  ITodoRepository{
  private inmemoryTodo:Todo[]
  constructor() {
    // @ts-ignore
    inMemoryTodo = [
      new Todo('todo01', 'インメモリtodo01'),
      new Todo('todo02', 'インメモリtodo02')
    ]
    this.inmemoryTodo = inMemoryTodo
  }
  async findAll(): Promise<Array<Todo>> {
    new Promise(()=> setTimeout(()=>{},1000));
    return  this.inmemoryTodo
  }
 async find(id: UUID): Promise<Todo | null> {
    new Promise(()=> setTimeout(()=>{},1000));
    return this.inmemoryTodo.find(todo => todo.id === id) || null
  }
  async create(todo: Todo): Promise<Todo> {
    new Promise(()=> setTimeout(()=>{},1000));
    this.inmemoryTodo.push(todo);
    return todo
  }
  async update(todo: Todo): Promise<Todo> {
    new Promise(()=> setTimeout(()=>{},1000));
    this.inmemoryTodo = this.inmemoryTodo.map(mTodo => {
      if(mTodo.id === todo.id) return todo
      return mTodo
    })
    return todo
  }
  async delete(id: UUID): Promise<null> {
    new Promise(()=> setTimeout(()=>{},1000));
    this.inmemoryTodo = this.inmemoryTodo.filter(fTodo => fTodo.id !==id);
    return null
  }
}