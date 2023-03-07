import { Router } from 'express'

import todoListPorts from './todo-list.ports'

const router = Router()

router.use('/todo-list', todoListPorts)

export default router
