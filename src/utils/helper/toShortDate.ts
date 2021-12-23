import { DateTime } from "luxon";
import { ShortDate } from "../interfaces/ShortDate";

export const toShortDate = (date: DateTime): ShortDate => {
    return {
        year: date.year,
        month: date.month,
        day: date.day
    }
}