import { DateTime } from "luxon"
import { ShortDate } from "../interfaces/ShortDate";
import { isNumber } from "./isNumber";
import { toShortDate } from "./toShortDate"

export const parseDateString = (dateString: string): ShortDate | undefined => {
    if (dateString === "")
        return toShortDate(DateTime.now());
    else {
        const dateSplit = dateString.split(/ +/g)
        if (!isNumber(dateSplit[0]) || !isNumber(dateSplit[1]) || !isNumber(dateSplit[2]))
            return
        else
            return {
                year: Number(dateSplit[0]),
                month: Number(dateSplit[1]),
                day: Number(dateSplit[2]) 
            }
    }
}