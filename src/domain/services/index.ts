import { noteAdapter } from '../../adapters'
import NoteService from './note.service'

export const noteService = new NoteService(
  noteAdapter
)
