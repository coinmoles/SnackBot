import axios from "axios";
import { MessageEmbed } from "discord.js";
import { DateTime } from "luxon";
import { MEAL_BACKEND_URL } from "../constants";
import { MealData } from "../interfaces/MealData";
import { MealOptions } from "../interfaces/MealOptions";
import { ShortDate } from "../interfaces/ShortDate";

export const addMealData = async (embed: MessageEmbed, date: ShortDate, options: MealOptions): Promise<MessageEmbed> => {
    const mealData: MealData | undefined = (await axios.get(MEAL_BACKEND_URL))
        .data[date.day.toString()];

    if (options.morning){
        if (date.year !== DateTime.now().year || date.month !== DateTime.now().month)
            embed.addField("아침", "이번 달이 아닌 날의 급식 정보는 제공되지 않습니다.")
        else if (mealData === undefined || mealData.morning === undefined)
            embed.addField("아침", "오늘은 아침이 없어요!")
        else
            embed.addField("아침", mealData.morning);
    }
    
    if (options.lunch){
        if (date.year !== DateTime.now().year || date.month !== DateTime.now().month)
            embed.addField("점심", "이번 달이 아닌 날의 급식 정보는 제공되지 않습니다.")
        if (mealData === undefined || mealData.lunch === undefined)
            embed.addField("점심", "오늘은 점심이 없어요!")
        else
            embed.addField("점심", mealData.lunch);
    }

    if (options.dinner){
        if (date.year !== DateTime.now().year || date.month !== DateTime.now().month)
            embed.addField("저녁", "이번 달이 아닌 날의 급식 정보는 제공되지 않습니다.")
        if (mealData === undefined || mealData.dinner === undefined)
            embed.addField("저녁", "오늘은 저녁이 없어요!")
        else
            embed.addField("저녁", mealData.dinner);
    }

    return embed   
}