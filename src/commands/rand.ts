import { CommandInteraction, SlashCommandBuilder } from "discord.js";

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rand')
		.setDescription('Replies Random Number'),
	async execute(interaction: CommandInteraction) {
		await interaction.reply('random num');
	},
};