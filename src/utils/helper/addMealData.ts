import axios from "axios";
import { MessageEmbed } from "discord.js";
import { DateTime } from "luxon";
import { MEAL_BACKEND_URL } from "../constants";
import { MealData } from "../interfaces/MealData";
import { ShortDate } from "../interfaces/ShortDate";

export const addMealData = async (embed: MessageEmbed, date: ShortDate): Promise<MessageEmbed> => {
    if (date.year !== DateTime.now().year || date.month !== DateTime.now().month) {
        return embed.addFields([
            { name: "아침", value: "이번 달이 아닌 날의 급식 정보는 제공되지 않습니다." },
            { name: "점심", value: "이번 달이 아닌 날의 급식 정보는 제공되지 않습니다." },
            { name: "저녁", value: "이번 달이 아닌 날의 급식 정보는 제공되지 않습니다." }
        ])
    }

    const mealData: MealData | undefined = (await axios.get(MEAL_BACKEND_URL))
        .data[date.day.toString()];

    if (mealData === undefined || mealData.morning === undefined)
        embed = embed.addField("아침", "오늘은 아침이 없어요!")
    else
        embed = embed.addField("아침", mealData.morning);
    
    if (mealData === undefined || mealData.lunch === undefined)
        embed = embed.addField("점심", "오늘은 점심이 없어요!")
    else
        embed =  embed.addField("점심", mealData.lunch);

    if (mealData === undefined || mealData.dinner === undefined)
        embed = embed.addField("저녁", "오늘은 저녁이 없어요!")
    else
        embed.addField("저녁", mealData.dinner);

    return embed   
}