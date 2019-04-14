const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
    bot.user.setActivity("New! SERVER QQ BOT")
  bot.user.setPresence({
        game: { 
            name: 'BY FEB天上女孩ID',
            type: 'STREAMING'
        },
        status: 'idle'
    })
  bot.setPresence({ game: { name: 'GameHere', type: 1 } });
});

bot.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = '//';
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (cmd === `${prefix}ping`){
    message.channel.send("Pong!");
  }
  
});

bot.login(process.env.token);
