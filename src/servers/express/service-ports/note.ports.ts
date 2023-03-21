import { Router } from 'express'
import { type INoteDto } from 'src/domain/dtos/note.dto'
import { noteService } from '../../../domain/services'

const router = Router()

router.get('/', async function (req, res) {
  const todoList = await noteService.getAllNoteList()

  return res.json(todoList)
})

router.get('/:id', async function (req, res) {
  return await noteService.getNoteById(+req.params.id).then(todoList => {
    return res.json(todoList)
  }).catch(err => {
    return res.status(404).json({
      message: err.message
    })
  })
})

router.post('/', async function (req, res) {
  try {
    const body: Partial<Pick<INoteDto, 'text'>> = req.body
    if (body?.text === undefined) throw new Error('Text is required.')
    const newList = await noteService.createNote(body.text)

    return res.json(newList)
  } catch (err: any) {
    return res.status(500).json({ message: err.message })
  }
})

router.delete('/:id', async function (req, res) {
  return await noteService.deleteNoteById(+req.params.id)
    .then(todoList => {
      return res.json(todoList)
    })
    .catch(err => {
      return res.status(500).json({ message: err.message })
    })
})

export default router
