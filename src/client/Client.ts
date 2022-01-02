import consola, { Consola } from 'consola'
import { Client, MessageEmbedOptions, Message, MessageEmbed, Intents, Collection} from 'discord.js'
import glob from 'glob'
import { Command } from '../utils/interfaces/Command'
import { Event } from '../utils/interfaces/Event'
import { Config } from '../utils/interfaces/Config'
import { promisify } from 'util'

const globPromise = promisify(glob)

class Bot extends Client {
    public logger: Consola = consola;
    public commands: Collection<string, Command> = new Collection();
    public events: Collection<string, Event> = new Collection();
    public config: Config

    public constructor(_config: Config) {
        super({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES], messageCacheLifetime: 100})
        this.config = _config
    }
 
    public async start(): Promise<void> {
        this.login(this.config.token)
        const commandFiles: string[] = await globPromise(`${__dirname}/../commands/**/*{.ts,.js}`)
        commandFiles.map(async (value: string) => {
            const file: Command = await import(value);
            if (file.name === undefined) 
                return;
            this.commands.set(file.name, file)
        })
        const eventFiles: string[] = await globPromise(`${__dirname}/../events/**/*{.ts,.js}`)
        eventFiles.map(async (value: string) => {
            const file: Event = await import(value);
            this.events.set(file.name, file)
            this.on(file.name, file.run.bind(null, this))
        })
        
    }

    public embed(options: MessageEmbedOptions, message: Message): MessageEmbed {
        return new MessageEmbed({...options, color: "NAVY"})
    }
}

export { Bot }