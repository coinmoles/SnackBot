import { Command, RunFunction, InteractionOption } from '../../utils/interfaces/Command'
import { PREFIX } from '../../utils/constants'
import { parseDateString } from '../../utils/helper/parseDateString'
import { addMealData } from '../../utils/helper/addMealData'
import { addSnackData } from '../../utils/helper/addSnackData'
import { addWarning } from '../../utils/helper/addWarning'
import { Constants } from 'discord.js'

const name: string = '급식';
const description: string = "특정 날짜의 급식(아침/점심/저녁/간식) 정보를 보여줍니다";
const options: InteractionOption[] = [
    {
        name: "날짜",
        description: "급식 정보를 원하는 날의 날짜",
        required: false,
        type: Constants.ApplicationCommandOptionTypes.STRING
    }
];

const run: RunFunction = async (client, interaction, options) => {
    let embed = client.embed({});

    const date = parseDateString(options.getString("날짜"));

    if (date === undefined) {
        interaction.editReply("날짜 형식이 맞지 않아요!");
    }
    else {
        await addMealData(embed, date, { morning: true, lunch: true, dinner: true });
        await addSnackData(embed, date);
        addWarning(embed, client);
        embed.setTitle(`${date.year}년 ${date.month}월 ${date.day}일의 급식`);

        interaction.editReply({ embeds: [embed] });
    }
};

export default {
    name,
    description,
    options,
    run
} as Command;