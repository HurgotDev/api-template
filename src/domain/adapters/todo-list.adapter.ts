import { type ITodoList } from '../entities/ITodoList'
import { type ITodoListPort } from '../ports/todo-list.port'

let TODO_LIST_DB: ITodoList[] = []

export default class TodoListAdapter implements ITodoListPort {
  async createTodoList (data: Pick<ITodoList, 'text'>): Promise<ITodoList> {
    const newTodoList: ITodoList = {
      id: TODO_LIST_DB.length + 1,
      createdAt: new Date().toISOString(),
      ...data
    }
    TODO_LIST_DB.unshift(newTodoList)

    return await Promise.resolve(newTodoList)
  }

  async deleteTodoList (id: number): Promise<boolean> {
    TODO_LIST_DB = TODO_LIST_DB.filter(it => it.id !== id)
    return await Promise.resolve(true)
  }

  async getTodoListById (id: number): Promise<ITodoList | undefined> {
    return await Promise.resolve(TODO_LIST_DB.find(it => it.id === id))
  }

  async getAllTodoList (): Promise<ITodoList[]> {
    return await Promise.resolve(TODO_LIST_DB)
  }
}
