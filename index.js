//nodemon --inspect index.js

//Require stuff
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json')

//Startup messages
client.once('ready', () => {
	console.log(`${client.user.tag} Booted succesfully`)
	console.log('-Bot Log-')
});
 

		
//Blacklists
let BlacklistCussWords = ['flake nude porn', 'flake nude', 'flake porn']
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
let AllStep4 = AllStep3.concat(BlacklistDontHave)
let All = AllStep4.concat(BlacklistCussWords)


//Variables
var AmountofMessages = 0
var messageBuffer = 'TempVal'
var UsageCount = 0
var Blacklisted = false

//On message
client.on('message', message => {
	
	//Check for an anonfiles link
	if (message.content.toLowerCase().includes('anonfiles.com/')) {
		message.reply('Please refrain from sending links to sites where there are known to be leaks')
		//Remove the // if the bot has admin privliges
		//message.delete()
		console.log(`Deleted the message '${message.content}' by '${message.member.user.tag}' for includinig a link to a known filehoster with leaks`)
	}
	
	//Give suggestions
	if(message.content.toLowerCase().includes('suggestion:') && !Help) {
		var word2 = message.content.toLowerCase().replace("suggestion: ", "");
		message.reply ('Thanks for your suggestion')
		console.log(`${word2} has been suggested by ${message.member.user.tag}`)
	}

	//Help = false
	Help = false
	
	//Test words
	if (message.content.toLowerCase().startsWith('test: ')) {
		
		var word = message.content.toLowerCase().replace("test: ", "");
		for (var i in All) {		
			if(message.content.toLowerCase().includes(All[i])) {
				++UsageCount
				message.reply (`'${word}' has already been blacklisted`)
				console.log(`'${message.member.user.tag}' asked if '${word}' was blacklisted and it was '${All[i]}'`)
				var Blacklisted = true
				break
			}
		}	
		if (Blacklisted !== true) {
			++UsageCount
			message.reply (`'${word}' has not been blacklisted`)
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
			message.reply(`you asked for help, so here it is:\n\nI filter through messages on this server in search of specific keywords\nYou can find the list here: <https://pastebin.com/vSCSN7eX>\n*This list might be outdated if i don't feel like updating it\n\nAvailable commands:\n- Test: [Word that you want to test] - Test for a word to see if it is blacklisted\n- Suggestion: [Word that you want to suggest] - Notifies <${config.UserToPing}> of your suggestion for new blacklisted words\n- UsageCount - Tells you how many times the bot has been used this session\n- i need help with the bot - Brings up this messages\n- justworkgoddamn - Simply tells you '<@user>, calm down bro'\n\nIf you have any questions, feel free to ping <${config.UserToPing}>\nThis bot was made by @Not a Piratte and is open sourced: https://github.com/TheQwertyMan/StopItDoesntExist\n(The project is licenced under the GNU General Public License v3.0 licence)`);
			AmountofMessages = 3
			console.log(`${message.member.user.tag} requested help and got accepted`)
			Help = true
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
	
	//Blacklist filter Cusswords
	for (var i in BlacklistCussWords) {
		if (message.content.toLowerCase().includes(BlacklistCussWords[i]) && !message.member.roles.cache.some(role => role.name === 'Pure Ones')) {
			message.reply('No, just no');
			console.log(`'${message.member.user.tag}' said '${message.content}' and the bot found the keyword '${BlacklistCussWords[i]}'`)
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
