import { Interaction } from "discord.js";
import { Bot } from "../../client/Client";
import { commands } from "../../commands";

export const onInteractionCreate = async (client: Bot, interaction: Interaction) => {
    if (!interaction.isCommand()) {
        return;
    }
    
    const { commandName, options } = interaction;

    const command = commands.get(commandName);
    
    if (!command) return;

    await interaction.deferReply();
    await command.run(client, interaction, options)
    .catch((reason: any) => interaction.editReply("알 수 없는 에러가 발생했어요!"));
};