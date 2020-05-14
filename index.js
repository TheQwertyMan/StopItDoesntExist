//https://discordapp.com/oauth2/authorize?client_id=[your token id here]&scope=bot
//nodemon --inspect index.js

//Instructions
//First go to this site: https://discordapp.com/oauth2/authorize?client_id=[your token id here]&scope=bot
//Select the Mirror House Server and click on 'Authorize'
//Complete the captcha
//Now the bot is added, if anyone types these keywords and is not a 'Pure Ones', the bot will send one of these responses: WE DONT HAVE ANY OF THE LEAKS YOU ASK FOR - PROOF: <https://www.youtube.com/watch?v=5AFVQI8PsQA> or THERE ARE ONLY LEAKS IF ITS ON #leak-tracker - PROOF: <https://www.youtube.com/watch?v=5AFVQI8PsQA>

//Filtered words
//ura zelda
//mother 64
//mother64
//spaceworld
//mario 64 beta
//mario64 beta
//mario 64 proto
//mario64 proto
//mario64 prototype
//mario 64 prototype
//new leaks
//new leak
//where can i download
//download link
//2tb
//2 tb
//2terabyte
//2 terabyte

const Discord = require('discord.js');
 const client = new Discord.Client();

//Timeout system variables
var AmountofMessages = 0

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', message => {
	
	//Debug Test
	if (message.content === 'justworkgoddamn'){
		message.reply('Calm down bro'); 
	}
	
	//Blacklists
	let BlacklistDrive = ['2tb', '2 tb', '2terabyte', '2 terabyte']
	let BlacklistTracker = ['new leaks', 'new leak']
	let BlacklistSearch = ['where can i download', 'download link']
	let BlacklistDontHave = ['ura zelda', 'mother 64', 'mother64', 'spaceworld', 'mario 64 beta', 'mario64 beta', 'mario 64 proto', 'mario64 proto', 'mario64 prototype',
	'mario 64 prototype', ]

	//Helpbot
	if (message.content === 'i need help with the bot'){
		if (AmountofMessages === 0) {
			message.reply('You asked for help, so here it is:\nThis bot says different thing if it detects that you said a keyword, the keywords at the time of writing it are:\n\n-WE DONT HAVE ANY OF THE LEAKS YOU ASK FOR - PROOF: <https://www.youtube.com/watch?v=5AFVQI8PsQA>-\nUra Zelda, Mother 64, Mother64, Spaceworld, Mario 64 Beta, Mario64 Beta, Mario 64 Proto, Mario64 Proto, Mario 64 Prototype, Mario64 Prototype\n\n-THERE IS NO 2TB OF DATA - PROOF: <https://www.youtube.com/watch?v=5AFVQI8PsQA>-\n2tb, 2 tb, 2Terabyte, 2 Terabyte\n\n-JUST DO A GOOGLE SEARCH RETARD - TUTORIAL: <https://www.youtube.com/watch?v=5AFVQI8PsQA>-\nWhere can i download, Download Link\n\n-THERE ARE ONLY LEAKS IF ITS ON <#708761059388948522> - PROOF: <https://www.youtube.com/watch?v=5AFVQI8PsQA>-\nNew Leaks, New Leak\n\nThis bot was created by <@321965387048812544> and is open sourced: https://github.com/TheQwertyMan/StopItDoesntExist/blob/master/README.md');
			AmountofMessages = 3
		}
		
		else {
			message.reply('There has already recently been asked for help, please use the searchbar');
			--AmountofMessages
		}
	}	
	
	//Blacklist filter Search
	for (var i in BlacklistSearch) {
		if (message.content.toLowerCase().includes(BlacklistSearch[i]) && !message.member.roles.cache.some(role => role.name === 'Pure Ones')) {
			message.reply('JUST DO A GOOGLE SEARCH RETARD - TUTORIAL: <https://www.youtube.com/watch?v=5AFVQI8PsQA>');
			break
		}
	}
	
	//Blacklist filter DontHave
	for (var i in BlacklistDontHave) {
		if (message.content.toLowerCase().includes(BlacklistDontHave[i]) && !message.member.roles.cache.some(role => role.name === 'Pure Ones')) {
			message.reply('WE DONT HAVE ANY OF THE LEAKS YOU ASK FOR - PROOF: <https://www.youtube.com/watch?v=5AFVQI8PsQA>');
			break
		}
	}
	
	//Blacklist filter Tracker
	for (var i in BlacklistTracker) {
		if (message.content.toLowerCase().includes(BlacklistTracker[i]) && !message.member.roles.cache.some(role => role.name === 'Pure Ones')) {
			message.reply('THERE ARE ONLY LEAKS IF ITS ON #leak-tracker - PROOF: <https://www.youtube.com/watch?v=5AFVQI8PsQA>');
			break
		}
	}

	for (var i in BlacklistDrive) {
		if (message.content.toLowerCase().includes(BlacklistDrive[i]) && !message.member.roles.cache.some(role => role.name === 'Pure Ones')) {
			message.reply('THERE IS NO 2TB OF DATA - PROOF: <https://www.youtube.com/watch?v=5AFVQI8PsQA>');
			break
		}
	}	
});

client.login('your token here');
