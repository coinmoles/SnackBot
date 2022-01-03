import { Command } from '../../utils/interfaces/Command'
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
    
    const cmd = message.content
        .slice(PREFIX.length)
        .trim()
        .split(/ +/g)
        .shift();
    if (cmd === undefined) return;
    
    const argString: string = message.content
        .slice(PREFIX.length)
        .trim()
        .slice(cmd.length)
        .trim()

    const command: Command | undefined = commands.get(cmd);
    
    if (!command) return;

    command(client, message, argString)
    .catch((reason: any) => message.channel.send('Error'))
}