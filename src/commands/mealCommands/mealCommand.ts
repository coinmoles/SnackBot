import { Command } from '../../utils/interfaces/Command'
import { PREFIX } from '../../utils/constants'
import { parseDateString } from '../../utils/helper/parseDateString'
import { addMealData } from '../../utils/helper/addMealData'
import { addSnackData } from '../../utils/helper/addSnackData'
import { addWarning } from '../../utils/helper/addWarning'

const name: string = '급식';

export const mealCommand: Command = async (client, message, argString) => {
    let embed = client.embed({}, message);

    const date = parseDateString(argString);

    if (date === undefined) {
        await message.channel.send("날짜 형식이 맞지 않아요!")
    }
    else {
        await addMealData(embed, date, { morning: true, lunch: true, dinner: true });
        await addSnackData(embed, date)
        addWarning(embed, client);
        embed.setTitle(`${date.year}년 ${date.month}월 ${date.day}일의 급식`);
        
        await message.channel.send({embeds: [ embed ]})
    }
       
}