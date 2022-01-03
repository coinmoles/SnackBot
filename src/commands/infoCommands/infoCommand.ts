import { Command } from '../../utils/interfaces/Command'
import { BOTNAME, PREFIX } from '../../utils/constants'
import { MessageEmbed } from 'discord.js'

const name: string = '도움말';

export const infoCommand: Command = async (client, message, argString) => {
    let embed = client.embed({}, message)

    if (argString === "")
        addDefaultInfo(embed);
    else if (argString === "급식") 
        addInfoWithDate("급식", "급식 및 간식", embed)    
    else if (argString === "아침") 
        addInfoWithDate("아침", "아침", embed) 
    else if (argString === "점심") 
        addInfoWithDate("점심", "점심", embed) 
    else if (argString === "저녁") 
        addInfoWithDate("저녁", "저녁", embed) 
    else if (argString === "간식") 
        addInfoWithDate("간식", "간식", embed)
    else
        addErrorInfo(embed);

    await message.channel.send({ embeds: [embed] });
}

const addDefaultInfo = (embed: MessageEmbed): MessageEmbed => {
    return embed.setTitle(`간식봇 ${BOTNAME}의 도움말`)
        .setDescription("<>은 생략되어도 되는 인자에요\n")
        .addFields([
            { name: `${PREFIX} 도움말 <명령어>`, value: "명령어에 대한 더 자세한 설명을 해드려요. 명령어를 지정하지 않는 경우 지금 보시는 이 창을 보여드려요." },
            { name: `${PREFIX} 급식 <날짜>`, value: "그 날짜의 급식 및 간식 정보를 보여드려요" },
            { name: `${PREFIX} 아침 <날짜>`, value: "그 날짜의 아침 정보를 보여드려요" },
            { name: `${PREFIX} 점심 <날짜>`, value: "그 날짜의 점심 정보를 보여드려요" },
            { name: `${PREFIX} 저녁 <날짜>`, value: "그 날짜의 저녁 정보를 보여드려요" },
            { name: `${PREFIX} 간식 <날짜>`, value: "그 날짜의 간식 정보를 보여드려요" }
        ]);
}

const addInfoWithDate = (command: string, description: string, embed: MessageEmbed): MessageEmbed => {
    return embed.setTitle(`${PREFIX} ${command} <날짜>`)
        .setDescription(`그 날짜의 ${description} 정보를 보여드려요`)
        .addFields([
            {
                name: "<날짜>가 없는 경우", value: `당일의 ${description} 정보를 보여드려요\n \
                ex) ${PREFIX} ${command}`
            },
            {
                name: "<날짜>가 오늘, 내일 등인 경우", value: `그 날짜의 ${description} 정보를 보여드려요\n \
                가능한 단어: '그끄제', '그제', '어제', '오늘', '내일', '모레', '글피', '그글피'\n \
                ex) ${PREFIX} ${command} 그글피`
            },
            {
                name: "<날짜>가 정확한 날짜인 경우", value: `그 날짜의 ${description} 정보를 보여드려요\n \
                ex) ${PREFIX} ${command} 2021 12 23`
            }
        ]);
}

const addErrorInfo = (embed: MessageEmbed): MessageEmbed => {
    return embed.setTitle("푸?딩")
        .setDescription("그런 명령어는 없어요!");
}