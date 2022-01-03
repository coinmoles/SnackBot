import { Command } from "../utils/interfaces/Command";
import mealCommand from "./mealCommands/mealCommand";
import lunchCommand from "./mealCommands/lunchCommand";
import dinnerCommand from "./mealCommands/dinnerCommand";
import morningCommand from "./mealCommands/morningCommand";
import snackCommand from "./mealCommands/snackCommand";

export const commands: Map<string, Command> = new Map();

commands.set("급식", mealCommand);
commands.set("아침", morningCommand);
commands.set("점심", lunchCommand);
commands.set("저녁", dinnerCommand);
commands.set("간식", snackCommand);