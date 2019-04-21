const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

let activityTypes = ['PLAYING','STREAMING','LISTENING','WATCHING']

let randomType = activityTypes[Math.floor((Math.random()*activityTypes.length))]

setInterval(async ()=>{

    await bot.user.setActivity('Your text here.', { type: randomType })

},10000)


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
