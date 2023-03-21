import { type INoteDto } from '../domain/dtos/note.dto'
import { type INotePort } from '../domain/ports/note.ports'

let NOTES_LIST_DB: INoteDto[] = []

export default class NoteAdapter implements INotePort {
  async createNote (data: Pick<INoteDto, 'text'>): Promise<INoteDto> {
    const now = new Date().toISOString()

    const newTodoList: INoteDto = {
      id: NOTES_LIST_DB.length + 1,
      createdAt: now,
      updatedAt: now,
      deletedAt: null,
      ...data
    }
    NOTES_LIST_DB.unshift(newTodoList)

    return await Promise.resolve(newTodoList)
  }

  async deleteNote (id: number): Promise<boolean> {
    NOTES_LIST_DB = NOTES_LIST_DB.filter(it => it.id !== id)
    return await Promise.resolve(true)
  }

  async getNoteById (id: number): Promise<INoteDto | undefined> {
    return await Promise.resolve(NOTES_LIST_DB.find(it => it.id === id))
  }

  async getAllNotes (): Promise<INoteDto[]> {
    return await Promise.resolve(NOTES_LIST_DB)
  }
}
