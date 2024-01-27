import { SlashCommandBuilder, } from "discord.js";

export const data = new SlashCommandBuilder()
	.setName('rand')
	.setDescription('乱数を返します')
	.addIntegerOption(option =>
		option.setName('randkosu')
			.setDescription('乱数の個数')
			.setRequired(true))

export async function rand(interaction: any) {
	try {
		const randkosu = await interaction.options.getInteger('randkosu');
		const randnumbers: number[] = new Array<number>();
		for(let i=0; i<randkosu; i++) {
			const randnum: number = Math.ceil(Math.random() * 38);
			if (!randnumbers.includes(randnum)) { //値がrandnumbersに追加されていなければ真
				randnumbers.push(randnum);
			}
			else {
				i--;
			}
		}
		
		await interaction.reply(randnumbers);
	}
	catch (e) {
		console.log(e);
	}
}