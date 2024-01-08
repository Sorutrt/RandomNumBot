import { client } from "./main";

// Botの起動確認
client.once("ready", () => {
    console.log("Ready!");
    if (client.user) {
        module.exports = client.user.tag;
    }
});
