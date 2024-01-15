import { CommandInteraction, SlashCommandBuilder} from "discord.js";

export const data = new SlashCommandBuilder()
	.setName('rand')
	.setDescription('乱数を返します');

export async function execute(interaction: CommandInteraction) {
	await interaction.reply('random number');
}