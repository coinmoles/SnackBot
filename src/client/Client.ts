import consola, { Consola } from 'consola'
import { Client, MessageEmbedOptions, Message, MessageEmbed, Intents } from 'discord.js'
import { onMessageCreate } from '../events/GuildEvents/messageEvent'
import { onReady } from '../events/ClientEvents/readyEvent'

class Bot extends Client {
    public logger: Consola = consola;

    public constructor() {
        super({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
    }

    public async start(): Promise<void> {
        await this.login(process.env.TOKEN);

        this.on("messageCreate", onMessageCreate.bind(null, this));
        this.on("ready", onReady.bind(null, this));
    }

    public embed(options: MessageEmbedOptions, message: Message): MessageEmbed {
        return new MessageEmbed({...options, color: "NAVY"})
    }
}

export { Bot }