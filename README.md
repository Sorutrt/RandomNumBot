# RandomNumBot
乱数を生成するDiscordBot


https://github.com/Sorutrt/RandomNumBot/assets/101448157/003dd63c-cc15-4aa3-855a-c2bdb29e136e

2024-06-06 現在、1~38までの番号を出力可能
## Using
乱数の出し方
`/rand {出力したい乱数の個数}`

乱数の範囲の設定（未実装）
`/range {最小値} {最大値}`

## Run
After cloning  
1. set node version 18.x.x
2. `npm i`
3. create `.env` file and set `TOKEN`, `CLIENT_ID`, and `GUILD_ID` (refer to "For Developer")
4. `npm run newcommand` to deploy commands
5. `npm run test` to start

## For Developer
.env file
```.env
TOKEN = "ここにトークンを入力"
CLIENT_ID = "clientid"
GUILD_ID = "guildid"
```
