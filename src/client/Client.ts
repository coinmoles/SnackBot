import consola, { Consola } from 'consola';
import { Client, Guild, Intents, MessageEmbed, MessageEmbedOptions } from 'discord.js';
import { onReady } from '../events/clientEvents/readyEvent';
import { onInteractionCreate } from '../events/guildEvents/interactionEvent';

class Bot extends Client {
    public logger: Consola = consola;
    public guild: Guild | undefined;
    public constructor() {
        super({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
    }

    public async start(): Promise<void> {
        await this.login(process.env.TOKEN);

        this.on("ready", onReady.bind(null, this));
        this.on("interactionCreate", onInteractionCreate.bind(null, this));
    }

    public embed(options: MessageEmbedOptions): MessageEmbed {
        return new MessageEmbed({...options, color: "NAVY"})
    }
}

export { Bot };
