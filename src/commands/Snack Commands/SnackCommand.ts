import { DateTime } from 'luxon'
import { RunFunction } from '../../utils/interfaces/Command'
import { PREFIX } from '../../utils/constants'
import { toShortDate } from '../../utils/helper/toShortDate'
import { addSnackData } from '../../embed/addSnackData'
import { ShortDate } from '../../utils/interfaces/ShortDate'
import { parseDateString } from '../../utils/helper/parseDateString'

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
        embed = (await addSnackData(embed, date))
            .setTitle(`${date.year}년 ${date.month}월 ${date.day}일의 간식`);
        await message.channel.send({embeds: [ embed ]})
    }
    
    console.log(date);
}

export const name: string = '간식';