import { RunFunction } from "../../utils/interfaces/Command";
import { Command } from '../../utils/interfaces/Command'
import { Message } from "discord.js";
import { PREFIX } from "../../utils/constants";

export const run: RunFunction = async (client, message: Message) => {
    if (message.author.bot ||
        !message.guild || 
        !message.content.toLowerCase().startsWith(PREFIX)
        )  
        return;
    
    const args: string[] = message.content
        .slice(PREFIX.length)
        .trim()
        .split(/ +/g);

    const cmd: string | undefined = args.shift();
    if (cmd === undefined) return;

    const command: Command | undefined = client.commands.get(cmd);
    
    if (!command) return;

    command.run(client, message, args)
    .catch((reason: any) => message.channel.send('Error'))
}

export const name: string = 'messageCreate';