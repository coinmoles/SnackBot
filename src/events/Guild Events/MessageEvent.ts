import { RunFunction } from "../../interfaces/Command";
import { Command } from '../../interfaces/Command'
import { Message } from "discord.js";

export const run: RunFunction = async (client, message: Message) => {
    if (message.author.bot ||
        !message.guild || 
        !message.content.toLowerCase().startsWith('간식')
        ) 
        return;

    const args: string[] = message.content
        .slice('간식'.length)
        .trim()
        .split(/ +/g);

    const cmd: string | undefined = args.shift();
    if (cmd === undefined) return;

    const command: Command | undefined = client.commands.get(cmd);
    
    if (!command) return;

    command.run(client, message, args)
    .catch((reason: any) => message.channel.send('hmm'))
}

export const name: string = 'messageCreate';