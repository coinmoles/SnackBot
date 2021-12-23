import { RunFunction } from '../../utils/interfaces/Command'
import { PREFIX } from '../../utils/constants'
import { MessageEmbed } from 'discord.js'

export const run: RunFunction = async (client, message) => {
    const infoString: string = message.content
        .slice(PREFIX.length)
        .trim()
        .slice(name.length)
        .trim()

    let embed = client.embed({}, message)
    
    if (infoString === "")
        embed = addDefaultInfo(embed);
    else if (infoString === "간식")
        embed = addSnackInfo(embed);
    
    
    await message.channel.send({ embeds: [embed] });
}

const addDefaultInfo = (embed: MessageEmbed) : MessageEmbed => {
    return embed.setTitle("간식봇 세모의 도움말")
    .setDescription("<>은 생략되어도 되는 인자에요\n")
    .addFields([
        { name: "세모야 도움말 <명령어>", value: "명령어에 대한 더 자세한 설명을 해드려요. 명령어를 지정하지 않는 경우 지금 보시는 이 창을 보여드려요."},
        { name: "세모야 간식 <날짜>", value: "그 날짜의 간식 정보를 보여드려요" }
    ]);
}

const addSnackInfo = (embed: MessageEmbed) : MessageEmbed => {
    return embed.setTitle("세모야 간식 <날짜>")
    .setDescription("그 날짜의 간식 정보를 보여드려요")
    .addFields([
        { name: "<날짜>가 없는 경우", value: "당일의 간식 정보를 보여드려요\n \
            ex) 세모야 간식"},
        { name: "<날짜>가 오늘, 내일 등인 경우", value: "그 날짜의 간식 정보를 보여드려요\n \
            가능한 단어: '그끄제', '그제', '어제', '오늘', '내일', '모레', '글피', '그글피'\n \
            ex) 세모야 간식 그글피" },
        { name: "<날짜>가 정확한 날짜인 경우", value: "그 날짜의 간식 정보를 보여드려요\n \
            ex) 세모야 간식 2021 12 23"}
    ]);
}

export const name: string = '도움말';
