import { CommandInteraction, CommandInteractionOptionResolver, MessageOptions, MessagePayload } from 'discord.js'
import { ApplicationCommandOptionTypes } from 'discord.js/typings/enums'
import { Bot } from '../../client/Client'

export interface RunFunction {
    (
        client: Bot, 
        interaction: CommandInteraction,
        options: CommandInteractionOptionResolver
    ): Promise<void>,
}

export interface InteractionOption {
    name: string
    description: string
    required: boolean
    type: ApplicationCommandOptionTypes
}

export interface Command {
    name: string
    description: string
    options: InteractionOption[]
    run: RunFunction
}