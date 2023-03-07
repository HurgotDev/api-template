import dotenv from 'dotenv'
import upExpress from './servers/express'

if (process.env.NODE_ENV === 'development') {
  dotenv.config()
}

upExpress()
