const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

fs = require('fs')
var data;
fs.readFile('insults.txt', 'utf8', function (err,rawData) {
  if (err) {
    return console.log(err);
  }
  data = rawData.split('\n');
});

function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

function getRandomLine(){
  return data[randomInt(0,data.length)];
}

prefix = "<"
taggedUser = "@alphaMimicBot"

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === `${prefix}ping`) {
        // sends back ur MOM
        message.channel.send('shut the fuck up im not mee6 dumbass');
}   else if (message.content === `${prefix}beep`) {
	message.channel.send('BOOP IM A BOT MOTHER FUCKAAAAAAA');
    
}
    else if (message.content.startsWith(`<@!762725950361305128>`)) {
    message.channel.send(getRandomLine());
}

});

client.login(config.token);