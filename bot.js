const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("643759239789019137")
setInterval(function() {
channel.send(`يا عباس يا عباس يا عباس يا عباس يا عباس يا عباس يا عباس يا عباس يا عباس يا عباس يا عباس يا عباس يا عباس يا عباس يا عباس `);
}, 30)
})

client.login(process.env.BOT_TOKEN);
