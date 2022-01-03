import { PREFIX } from '../../utils/constants'
import { addMealData } from '../../utils/helper/addMealData'
import { addWarning } from '../../utils/helper/addWarning'
import { parseDateString } from '../../utils/helper/parseDateString'
import { Command } from '../../utils/interfaces/Command'

const name: string = '아침';

export const morningCommand: Command = async (client, message, argString) => {
    let embed = client.embed({}, message);
    
    const date = parseDateString(argString)
    console.log(date);

    if (date === undefined) {
        await message.channel.send("날짜 형식이 맞지 않아요!")
    }
    else {
        await addMealData(embed, date, { morning: true, lunch: false, dinner: false });
        addWarning(embed, client);
        embed.setTitle(`${date.year}년 ${date.month}월 ${date.day}일의 아침`);
        
        await message.channel.send({embeds: [ embed ]})
    }
}