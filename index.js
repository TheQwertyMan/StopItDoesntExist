
//Require stuff etc.
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const blacklists = require('./blacklists.json');

//Startup messages
client.once('ready', () => {
	console.log(`${client.user.tag} Booted succesfully`)
	console.log('-Bot Log-')
})

//On message
client.on('message', message => {
	
	//Avoid loop
	if(message.author.bot || !message.guild) return;
	
	//check if user is config.WhitelistedRoleID and return if true
	if (message.member.roles.cache.some(role => role.id === config.WhitelistedRoleID))
		return;
	
	//Do a loop to check stuff
	for(let i = 0; i < blacklists.length; ++i) {
		for(let j = 0; j < blacklists[i].words.length; ++j) {
			if(message.content.includes(blacklists[i].words[j]))
				return message.channel.send(blacklists[i].response);
		}
	}
})

client.login(config.Token);