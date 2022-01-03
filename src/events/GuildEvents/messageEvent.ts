import { RunFunction } from '../../utils/interfaces/Command'
import { Message } from "discord.js";
import { PREFIX } from "../../utils/constants";
import { Bot } from "../../client/Client";
import { commands } from '../../commands';

export const onMessageCreate = async (client: Bot, message: Message) => {
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

    const command: RunFunction | undefined = commands.get(cmd);
    
    if (!command) return;

    command(client, message, args)
    .catch((reason: any) => message.channel.send('Error'))
}