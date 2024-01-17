import { CommandInteraction, SlashCommandBuilder} from "discord.js";

export const data = new SlashCommandBuilder()
	.setName('rand')
	.setDescription('乱数を返します');

export async function rand(interaction: CommandInteraction) {
	try {
		await interaction.reply('random number');
	}
	catch (e) {
		console.log(e);
	}
}