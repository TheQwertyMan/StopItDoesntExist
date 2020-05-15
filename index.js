//https://discordapp.com/oauth2/authorize?client_id=[your token id here]&scope=bot
//nodemon --inspect index.js

//Instructions
//First go to this site: https://discordapp.com/oauth2/authorize?client_id=[your token id here]&scope=bot
//Select the server you want to add the bot to and click on 'Authorize'
//Complete the captcha
//Now the bot is added

const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json')

client.on('ready', () => {
 console.log(`${client.user.tag} Booted succesfully`);
 console.log('-Bot Log-')
 });


		
//Blacklists
let BlacklistBadBot = ['bad bot', 'bot bad', 'stupid bot', 'complaints about bot', 'fuck the bot', 'i hate this bot', 'remove bot', 'why tf did you make this bot', 'fuck this bot']
let BlacklistDrive = ['2tb', '2 tb', '2terabyte', '2 terabyte', 'two terabyte', 'two tb']
let BlacklistTracker = ['new leak', 'anything new', "what's new"]
let BlacklistSearch = ['where can i download', 'download link', 'where are those leaks', 'where can i find']
let BlacklistDontHave = ['ura zelda', 'mother 64', 'mother64', 'mario 64 beta', 'mario64 beta', 'mario 64 proto', 'mario64 proto', 'mario64 prototype',
	'mario 64 prototype', 'earthbound64', 'earthbound 64']

//Blacklist all	
let AllStep1 = BlacklistBadBot.concat(BlacklistDrive)
let AllStep2 = AllStep1.concat(BlacklistTracker)
let AllStep3 = AllStep2.concat(BlacklistSearch)
let All = AllStep3.concat (BlacklistDontHave)


//Variables
var AmountofMessages = 0
var messageBuffer = 'TempVal'
var UsageCount = 0
var Blacklisted = false

client.on('message', message => {
	
	if (message.content.toLowerCase().includes('anonfiles.com/')) {
		message.reply('Please refrain from sending links to sites where there are known to be leaks')
		console.log(`Deleted the message '${message.content}' by '${message.member.user.tag}' for includinig a link to a known filehoster with leaks`)
	}
	
	//Test
	if (message.content.toLowerCase().startsWith('test: ')) {
		
		++UsageCount
		var word = message.content.toLowerCase().replace("test: ", ""); 
		
		for (var i in All) {		
			if(message.content.toLowerCase().includes(All[i])) {
				message.reply (`'${word}' has already been blacklisted`)
				console.log(`'${message.member.user.tag}' asked if '${word}' was blacklisted and it was '${All[i]}'`)
				var Blacklisted = true
				break
			}
		}
		
		if (Blacklisted !== true) {
			message.reply (`'${word}' has not been blacklisted, <@321965387048812544> has been notified on your suggestion`)
			console.log(`'${message.member.user.tag}' asked if '${word}' was blacklisted and it wasnt`)	
		}
		
		Blacklisted = false
		return
	}
	
	//Debug Test
	if (message.content === 'justworkgoddamn'){
		message.reply('Calm down bro'); 
		++UsageCount
	}
	
	//Usage Count
	if (message.content.toLowerCase() === 'usagecount'){
		++UsageCount
		message.reply(`I have been summoned ${UsageCount} times`); 
	}
	
	//Helpbot
	if (message.content === 'i need help with the bot'){
		if (AmountofMessages === 0) {
			message.reply('You asked for help, so here it is:\nThis bot says different thing if it detects that you said a keyword, the keywords at the time of writing it are:\n\n-WE DONT HAVE ANY OF THE LEAKS YOU ASK FOR - PROOF: <https://www.youtube.com/watch?v=5AFVQI8PsQA>-\nUra Zelda, Mother 64, Mother64, Spaceworld, Mario 64 Beta, Mario64 Beta, Mario 64 Proto, Mario64 Proto, Mario 64 Prototype, Mario64 Prototype\n\n-THERE IS NO 2TB OF DATA - PROOF: <https://www.youtube.com/watch?v=5AFVQI8PsQA>-\n2tb, 2 tb, 2Terabyte, 2 Terabyte\n\n-JUST DO A GOOGLE SEARCH RETARD - TUTORIAL: <https://www.youtube.com/watch?v=5AFVQI8PsQA>-\nWhere can i download, Download Link, Where can i find\n\n-THERE ARE ONLY LEAKS IF ITS ON <#708761059388948522> - PROOF: <https://www.youtube.com/watch?v=5AFVQI8PsQA>-\nNew Leaks, New Leak, Anything new\n\nIf you type `UsageCount` you can see how many times i have been summoned\nIf you type `Test: [Whateveryouwanttotest]` you can test if a word is blacklisted\n\nThis bot was created by <@321965387048812544> and is open sourced: https://github.com/TheQwertyMan/StopItDoesntExist');
			AmountofMessages = 3
			console.log(`${message.member.user.tag} requested help and got accepted`)
			++UsageCount
		}
		
		else {
			message.reply('There has already recently been asked for help, please use the searchbar');
			console.log(`${message.member.user.tag} requested help and got denied`)
			++UsageCount
			if (message !== messageBuffer) {
				messageBuffer = message
				--AmountofMessages
			}
		}
	}
	
	//Blacklist filter BadBot
	for (var i in BlacklistBadBot) {
		if (message.content.toLowerCase().includes(BlacklistBadBot[i])) {
			message.reply('THIS SERVER IS PRO BOT SO DONT YOU DARE INSULT IT AGAIN');
			console.log(`'${message.member.user.tag}' said '${message.content}' and the bot found the keyword '${BlacklistBadBot[i]}'`)
			++UsageCount
			break
		}
	}
	
	//Blacklist filter Search
	for (var i in BlacklistSearch) {
		if (message.content.toLowerCase().includes(BlacklistSearch[i]) && !message.member.roles.cache.some(role => role.name === 'Pure Ones')) {
			message.reply('JUST DO A GOOGLE SEARCH RETARD - TUTORIAL: <https://www.youtube.com/watch?v=5AFVQI8PsQA>');
			console.log(`'${message.member.user.tag}' said '${message.content}' and the bot found the keyword '${BlacklistSearch[i]}'`)			
			++UsageCount
			break
		}
	}
	
	//Blacklist filter DontHave
	for (var i in BlacklistDontHave) {
		if (message.content.toLowerCase().includes(BlacklistDontHave[i]) && !message.member.roles.cache.some(role => role.name === 'Pure Ones')) {
			message.reply('WE DONT HAVE ANY OF THE LEAKS YOU ASK FOR - PROOF: <https://www.youtube.com/watch?v=5AFVQI8PsQA>');
			console.log(`'${message.member.user.tag}' said '${message.content}' and the bot found the keyword '${BlacklistDontHave[i]}'`)
			++UsageCount
			break
		}
	}
	
	//Blacklist filter Tracker
	for (var i in BlacklistTracker) {
		if (message.content.toLowerCase().includes(BlacklistTracker[i]) && !message.member.roles.cache.some(role => role.name === 'Pure Ones')) {
			message.reply('THERE ARE ONLY LEAKS IF ITS ON <#708761059388948522> - PROOF: <https://www.youtube.com/watch?v=5AFVQI8PsQA>');
			console.log(`'${message.member.user.tag}' said '${message.content}' and the bot found the keyword '${BlacklistTracker[i]}'`)
			++UsageCount
			break
		}
	}

	for (var i in BlacklistDrive) {
		if (message.content.toLowerCase().includes(BlacklistDrive[i]) && !message.member.roles.cache.some(role => role.name === 'Pure Ones')) {
			message.reply('THERE IS NO 2TB OF DATA - PROOF: <https://www.youtube.com/watch?v=5AFVQI8PsQA>');
			console.log(`'${message.member.user.tag}' said '${message.content}' and the bot found the keyword '${BlacklistDrive[i]}'`)
			++UsageCount
			break
		}
	}	
});

client.login(config.Token);
