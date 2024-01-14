import { GatewayIntentBits, Client, Partials, Message, SlashCommandBuilder } from "discord.js";
import dotenv from "dotenv";

dotenv.config(); //.envファイルを読み込む

// Botで使うGatewayIntents, partials
export const client = new Client({
    intents: [
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
    partials: [Partials.Message, Partials.Channel],
});

// Botの起動確認
client.once("ready", () => {
    console.log("Ready!");
    if (client.user) {
        module.exports = client.user.tag;
    }
});

/*
// !timeと入力したときに現在時刻を返す
client.on('messageCreate', async (message: Message) => {
    if (message.author.bot) return;
    if (message.content == "!time") {
        const date1 = new Date();
        message.channel.send(date1.toLocaleString());
    }
});
*/

const rand: Promise = require('./rand');

// Bot作成時のトークンでDiscordと接続
client.login(process.env.TOKEN);