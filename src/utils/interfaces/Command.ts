import { Bot } from '../../client/Client'
import { Message } from 'discord.js'

export interface Command {
    (client: Bot, message: Message, argString: string): Promise<void>
}