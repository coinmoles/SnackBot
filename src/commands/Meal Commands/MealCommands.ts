import { RunFunction } from '../../utils/interfaces/Command'
import { PREFIX } from '../../utils/constants'
import { parseDateString } from '../../utils/helper/parseDateString'
import { addMealData } from '../../utils/helper/addMealData'
import { addSnackData } from '../../utils/helper/addSnackData'

export const run: RunFunction = async (client, message) => {
    let embed = client.embed({}, message);

    const dateString: string = message.content
        .slice(PREFIX.length)
        .trim()
        .slice(name.length)
        .trim()

    const date = parseDateString(dateString)

    if (date === undefined) {
        await message.channel.send("날짜 형식이 맞지 않아요!")
    }
    else {
        embed = (await addMealData(embed, date))
        embed = (await addSnackData(embed, date))
            .setTitle(`${date.year}년 ${date.month}월 ${date.day}일의 급식`);
        await message.channel.send({embeds: [ embed ]})
    }
    
}

export const name: string = '급식';