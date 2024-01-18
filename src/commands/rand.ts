import { CommandInteraction, SlashCommandBuilder} from "discord.js";

export const data = new SlashCommandBuilder()
	.setName('rand')
	.setDescription('乱数を返します')
	.addIntegerOption(option =>
		option.setName('randkosu')
			.setDescription('乱数の個数')
			.setRequired(true))

export async function rand(interaction: CommandInteraction) {
	try {
		const randkosu = await interaction.options.
		for(let i=0; i<)
		const randnum: number = Math.ceil(Math.random() * 38);
		await interaction.reply(randnum.toString());
	}
	catch (e) {
		console.log(e);
	}
}