const fs = require('fs');
const Discord = require('discord.js');
const config = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);
}

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

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	  if (message.content === `${prefix}ping`) {
        client.commands.get('ping').execute(message);
}   
    else if (message.content === `${prefix}beep`) {
	  message.channel.send('BOOP IM A BOT MOTHER FUCKAAAAAAA');
    
}
    else if (message.content.startsWith(`<@!762725950361305128>`)) {
      message.channel.send(getRandomLine());
    
}   
    else if (message.content.startsWith(`${prefix}what is`)) {
      client.commands.get('whatis').execute(message);
}

});

client.login(config.token);

// credits to my bois over in the noobs discord server ayyy