import { type INoteDto } from '../dtos/note.dto'
import { type INotePort } from '../ports/note.ports'

class NoteService {
  constructor (
    private readonly noteAdapter: INotePort
  ) {

  }

  async createNote (text: string): Promise<INoteDto[]> {
    if (!text) throw new Error('Field text is required.')
    await this.noteAdapter.createNote({ text })
    return await this.noteAdapter.getAllNotes()
  }

  async getAllNoteList (): Promise<INoteDto[]> {
    return await this.noteAdapter.getAllNotes()
  }

  async getNoteById (todoId: number): Promise<INoteDto> {
    const todoList = await this.noteAdapter.getNoteById(todoId)
    if (todoList === undefined) throw new Error('Record not found.')

    return todoList
  }

  async deleteNoteById (todoId: number): Promise<INoteDto[]> {
    const deleted = await this.noteAdapter.deleteNote(todoId)
    if (!deleted) throw new Error("Can't delete record")
    return await this.noteAdapter.getAllNotes()
  }
}

export default NoteService
