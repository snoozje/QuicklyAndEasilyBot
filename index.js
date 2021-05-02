const Discord = require('discord.js');

const client = new Discord.Client();
client.login('ODM4NTQzMjQ2MjMyNzgwODMx.YI8oQQ.5LL0HAtDumUnMMH6usm3LPFe3f4');

client.once('ready', () => {
  console.log('QuicklyAndEasilyBot is online')
});

client.on('message', msg => {
  if(msg.author.bot) {
    return;
  }

  if(msg.content.toLowerCase().startsWith("how")) {
    msg.channel.send("quickly and easily");
  }
});



