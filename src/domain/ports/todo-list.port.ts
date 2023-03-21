import type { ITodoList } from '../entities/ITodoList'

export interface ITodoListPort {
  createTodoList: (data: Pick<ITodoList, 'text'>) => Promise<ITodoList>
  deleteTodoList: (id: number) => Promise<boolean>
  getTodoListById: (id: number) => Promise<ITodoList | undefined>
  getAllTodoList: () => Promise<ITodoList[]>
}
