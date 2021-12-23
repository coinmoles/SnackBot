import { DateTime } from "luxon"
import { ShortDate } from "../interfaces/ShortDate";
import { isNumber } from "./isNumber";
import { toShortDate } from "./toShortDate"

export const parseDateString = (dateString: string): ShortDate | undefined => {
    if (dateString === "")
        return toShortDate(DateTime.now());
    else if (dateString === "어제" || dateString === "어저께")
        return toShortDate(DateTime.now().minus({ days: 1 }));   
    else if (dateString === "그제" || dateString === "그저꼐")
        return toShortDate(DateTime.now().minus({ days: 2 }));
    else if (dateString === "그끄제" || dateString === "그끄저께")
        return toShortDate(DateTime.now().minus({ days: 3 }))        
    else if (dateString === "내일")
        return toShortDate(DateTime.now().plus({ days: 1 }));
    else if (dateString === "모레" || dateString === "내일모레")
        return toShortDate(DateTime.now().plus({ days: 2 }));
    else if (dateString === "글피")
        return toShortDate(DateTime.now().plus({ days: 3 }));
    else if (dateString === "그글피")
        return toShortDate(DateTime.now().plus({ days: 4 }));
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