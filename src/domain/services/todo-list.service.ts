import { todoListAdapter } from '../adapters'
import { type ITodoList } from '../entities/ITodoList'

export const createTodoList = async (text: string): Promise<ITodoList[]> => {
  await todoListAdapter.createTodoList({ text })
  return await todoListAdapter.getAllTodoList()
}

export const getAllTodoList = async (): Promise<ITodoList[]> => {
  return await todoListAdapter.getAllTodoList()
}

export const getTodoListById = async (todoId: number): Promise<ITodoList> => {
  const todoList = await todoListAdapter.getTodoListById(todoId)
  if (todoList === undefined) throw new Error('Record not found.')

  return todoList
}

export const deleteTodoList = async (todoId: number): Promise<ITodoList[]> => {
  const deleted = await todoListAdapter.deleteTodoList(todoId)
  if (!deleted) throw new Error("Can't delete record")
  return await todoListAdapter.getAllTodoList()
}
