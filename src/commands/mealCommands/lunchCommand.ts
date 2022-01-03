import { Constants } from 'discord.js'
import { addMealData } from '../../utils/helper/addMealData'
import { addWarning } from '../../utils/helper/addWarning'
import { parseDateString } from '../../utils/helper/parseDateString'
import { RunFunction, InteractionOption } from '../../utils/interfaces/Command'

const name: string = '점심';
const description: string = "특정 날짜의 점심 정보를 보여줍니다";
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
        await addMealData(embed, date, { morning: false, lunch: true, dinner: false });
        addWarning(embed, client);
        embed.setTitle(`${date.year}년 ${date.month}월 ${date.day}일의 점심`);

        interaction.editReply({ embeds: [embed] });
    }
}

export default {
    name,
    description,
    options,
    run
};