const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

const activities_list = [
    "with the &help command.", 
    "ping fix developer",
    "By: FEBスカイラーID#4372",
    "https://discord.gg/eA3Jrfa", 
    "Update JavaScript"
    ]; // creates an arraylist containing phrases you want your bot to switch through.

bot.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        bot.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
    }, 10000); // Runs this every 10 seconds.
});

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
