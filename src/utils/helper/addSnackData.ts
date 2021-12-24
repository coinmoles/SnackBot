import axios from "axios";
import { MessageEmbed } from "discord.js";
import { SNACK_BACKEND_URL } from "../constants";
import { ShortDate } from "../interfaces/ShortDate";
import { SnackData } from "../interfaces/SnackData";

export const addSnackData = async (embed: MessageEmbed, date: ShortDate): Promise<MessageEmbed> => {
    const snackData: SnackData | undefined = (await axios.get(SNACK_BACKEND_URL+"/snack/daily", {
        data: date
    })).data.shift()

    if (snackData === undefined)
        embed = embed.addField("간식", "오늘은 간식이 없어요!")
    else
        embed = embed.addField("간식", snackData.snack);

    return embed;
}