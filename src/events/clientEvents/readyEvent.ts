import { ApplicationCommandManager, GuildApplicationCommandManager } from "discord.js";
import { Bot } from "../../client/Client";
import { commands } from "../../commands";
import { PREFIX } from "../../utils/constants";

export const onReady = async (client: Bot) => {
    client.user?.setActivity(`슬래시 커맨드 목록을 확인해 주세요`)
    client.logger.success(`Pudding is now online!`)

    const guild = client.guilds.cache.get(process.env.GUILD_ID!);
    let interactions: GuildApplicationCommandManager | ApplicationCommandManager<any> | undefined;
    if (guild)
        interactions = guild.commands;
    else
        interactions = client.application?.commands;
    
    commands.forEach((command, key) => {
        interactions?.create(command);
    })
}