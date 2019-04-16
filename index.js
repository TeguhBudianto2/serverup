const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
    bot.user.setActivity("New! SERVER QQ BOT")
  bot.user.setStatus('idle') // Can be 'available', 'idle', 'dnd', or 'invisible'
  bot.user.setActivity("QQ HELP ME.",  {type: "LISTENING"}) ; // sets the activity of the bot. 

// we need a variable to track on what activity it's on. 
let activNum = 0; // zero is the first activity.

// Tick event: Runs every so often the argument of the lnterval tells it to. 
set lnterval(function() { if 
{activNum === 0) { // checking on what activity it's on.
bot.user.setActivity{"with QQ Help server in"}; // changing it's on.
activNum = 1; // changing the tracking variable to change the activity later on.
} else if (activNum === 1) { bot.user.setActivity("with online now."); // changing the activity again.
activNum = 0; // changes back the tracking variable.
}

}, 3 * 1000); // Every 3 seconds. the '* 1000' is here so the  '3' is going to be converted from millisecords to seconds.
});
  
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
