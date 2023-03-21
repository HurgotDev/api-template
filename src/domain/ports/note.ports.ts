import type { INoteDto } from '../dtos/note.dto'

export interface INotePort {
  createNote: (data: Pick<INoteDto, 'text'>) => Promise<INoteDto>
  deleteNote: (id: number) => Promise<boolean>
  getNoteById: (id: number) => Promise<INoteDto | undefined>
  getAllNotes: () => Promise<INoteDto[]>
}
