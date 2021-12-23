import axios from "axios";
import { MessageEmbed } from "discord.js";
import { BACKEND_URL } from "../utils/constants";
import { ShortDate } from "../utils/interfaces/ShortDate";
import { SnackData } from "../utils/interfaces/SnackData";

export const addSnackData = async (embed: MessageEmbed, date: ShortDate) => {
    const snackData: SnackData | undefined = (await axios.get(BACKEND_URL+"/snack/daily", {
        data: date
    })).data.shift()

    if (snackData === undefined)
        return embed.addField("간식", "오늘은 간식이 없습니다. 있어야 하는데 이 텍스트가 뜨는 경우 coinmoles#1677 에게 문의 바랍니다.")
            .setColor("RED");
    else
        return embed.addField("간식", snackData.snack);
}