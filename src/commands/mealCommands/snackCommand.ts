import { Command } from '../../utils/interfaces/Command'
import { PREFIX } from '../../utils/constants'
import { addSnackData } from '../../utils/helper/addSnackData'
import { parseDateString } from '../../utils/helper/parseDateString'
import { addWarning } from '../../utils/helper/addWarning'

const name: string = '간식';

export const snackCommand: Command = async (client, message, argString) => {
    let embed = client.embed({}, message);

    const date = parseDateString(argString)

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