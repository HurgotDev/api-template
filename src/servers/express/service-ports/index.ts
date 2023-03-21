import { Router } from 'express'

import notePorts from './note.ports'

const router = Router()

router.use('/notes', notePorts)

export default router
