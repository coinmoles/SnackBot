import { RunFunction } from '../../utils/interfaces/Command'
import { PREFIX } from '../../utils/constants'
import { addSnackData } from '../../utils/helper/addSnackData'
import { parseDateString } from '../../utils/helper/parseDateString'
import { addWarning } from '../../utils/helper/addWarning'

export const run: RunFunction = async (client, message) => {
    let embed = client.embed({}, message);

    const dateString: string = message.content
        .slice(PREFIX.length)
        .trim()
        .slice(name.length)
        .trim()

    const date = parseDateString(dateString)

    if (date === undefined) {
        await message.channel.send("Invalid Date Format")
    }
    else {
        await addSnackData(embed, date);
        addWarning(embed, client);
        embed.setTitle(`${date.year}년 ${date.month}월 ${date.day}일의 간식`);
        await message.channel.send({embeds: [ embed ]})
    }
    
}

export const name: string = '간식';