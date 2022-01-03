import { Bot } from './client/Client'
import dotenv from 'dotenv'

dotenv.config()

export default new Bot().start()
