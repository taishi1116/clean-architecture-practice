import express = require('express')
import { TodoController } from '../interfaces/controller/TodoController'

const todoController = new TodoController()
const router = express.Router()

router.get('/todo', async (req: express.Request, res: express.Response) => {
  const results = await todoController.findAll()
  res.send(results)
})

router.get('/todo/:id', async (req: express.Request, res: express.Response) => {
  const result = await todoController.find({ req })
  res.send(result)
})

router.post('/todo', async (req: express.Request, res: express.Response) => {
  const result = await todoController.create({ req })
  res.send(result)
})

router.patch('/todo/:id', async (req: express.Request, res: express.Response) => {
  const result = await todoController.updateTodo({ req })
  res.send(result)
})

router.delete('/todo/:id', async (req: express.Request, res: express.Response) => {
  const result = await todoController.delete({ req })
  res.send(result)
})

export default router
