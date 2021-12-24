import { MessageEmbed } from "discord.js";
import { Bot } from "../../client/Client";

export const addWarning = (embed: MessageEmbed, client: Bot): MessageEmbed => {
    return embed.setFooter("급식 또는 간식 정보가 제대로 표시되지 않는 경우 coinmoles#1677에게 문의 바랍니다.", 
        client.user?.displayAvatarURL({ format: "png", dynamic: true })) 
}