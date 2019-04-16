const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
    bot.user.setActivity("New! SERVER QQ BOT")
  bot.user.setActivity("QQ HELP ME.",  {type: "LISTENING"}) ; 
let activNum = 0; 
set lnterval(function() {if {activNum === 0) {bot.user.setActivity{"with QQ Help server in"}; // changing it's on.
activNum = 1;} else if (activNum === 1) {bot.user.setActivity("with online now.");
activNum = 0;}

}, 3 * 1000);
  
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
