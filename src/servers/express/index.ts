import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import servicePorts from './service-ports'

export default function upExpress (): void {
  const app = express()
  const port = process.env.APP_PORT ?? 3030

  app.use(cors())
  app.use(bodyParser.json())

  app.use(servicePorts)

  app.listen(port, () => {
    console.log(`Server listing on port: ${port}`)
  })
}
