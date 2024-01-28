import { GatewayIntentBits, Client, Partials, Interaction, Message, Events, CacheType } from "discord.js";
import dotenv from "dotenv";
import { data, rand } from './commands/rand'


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

// スラッシュコマンド'rand' (まだ動かない)
client.on(Events.InteractionCreate, async (interaction: Interaction<CacheType>) => {
    //console.log(interaction); //test code
    
    if (!interaction.isCommand()) {
        return;
    }
    const { commandName } = interaction;

    if (commandName === data.name) {
        try {
            await rand(interaction);
        }
        catch(e) {
            console.log('main.ts error')
            console.error(e);
        }
    }
})

// Bot作成時のトークンでDiscordと接続
client.login(process.env.TOKEN);