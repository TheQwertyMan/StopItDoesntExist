//nodemon --inspect index.js

//Require stuff
const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')

//Startup messages
client.once('ready', () => {
	console.log(`${client.user.tag} Booted succesfully`)
	console.log('-Bot Log-')
})

//Embed
const EmbedRick = new Discord.MessageEmbed()
	.setTitle('Link')
	.setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
	.setImage('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mariowiki.com%2Fimages%2Fthumb%2F2%2F26%2FYoungLink_SSBU.png%2F1200px-YoungLink_SSBU.png&f=1&nofb=1');
	
//Blacklists
let BlacklistLink = ["anonfiles.com/", "mega.nz/"]
let BlacklistCussWords = ['flake nude porn', 'flake nude', 'flake porn']
let BlacklistBadBot = ['bad bot', 'bot bad', 'stupid bot', 'complaints about bot', 'fuck the bot', 'i hate this bot', 'remove bot', 'why tf did you make this bot', 'fuck this bot']
let BlacklistDrive = ['2tb', '2 tb', '2terabyte', '2 terabyte', 'two terabyte', 'two tb']
let BlacklistTracker = ['new leak', 'anything new', "what's new"]
let BlacklistSearch = ['where can i download', 'download link', 'where are those leaks', 'where can i find']
let BlacklistDontHave = ['ura zelda', 'mother 64', 'mother64', 'mario 64 beta', 'mario64 beta', 'mario 64 proto', 'mario64 proto', 'mario64 prototype',
	'mario 64 prototype', 'earthbound64', 'earthbound 64', 'mother3', 'mother 3', 'earthbound3', 'earthbound 3']

//Blacklist all	
let AllStep1 = BlacklistBadBot.concat(BlacklistDrive)
let AllStep2 = AllStep1.concat(BlacklistTracker)
let AllStep3 = AllStep2.concat(BlacklistSearch)
let AllStep4 = AllStep3.concat(BlacklistDontHave)
let All = AllStep4.concat(BlacklistCussWords)

//Downloads arrays
let Downloads = ['<https://drive.google.com/open?id=14vwtcahLiRuBHzq4EOOYMmOAYn6AiHS4>', '<https://drive.google.com/open?id=1L7-T_oCnh2Nna6_MG_whkz9j1n6qrovu>', '<https://github.com/TheQwertyMan/StopItDoesntExist/archive/1.zip>']
let Descriptions = ['Conker video files', 'Mirror House Cornflakes: Roblox Edition Source code (v4)', "This bot's source code"]

//Variables
var messageBuffer = 'TempVal'
var UsageCount = 0
var Blacklisted = false

//On message
client.on('message', message => {
	
	//Rickroll/linktest
	if(message.content === 'testlink') {
		message.reply(EmbedRick)
		console.log(`'${message.member.user.tag}' Rickrolled someone`)	
	}

	//Check for links
	for (var i in BlacklistLink) {
		if (message.content.toLowerCase().includes(BlacklistLink[i]))			{
			//message.delete()
			//message.reply('Please refrain from sending links in this discord server')
			console.log(`'${message.member.user.tag}' said '${message.content}' and the bot found the keyword '${BlacklistLink[i]}'`)
			++UsageCount
			break
		}
	}
	
	//Give suggestions
	if(message.content.toLowerCase().startsWith('suggestion:')) {
		var word2 = message.content.toLowerCase().replace("suggestion: ", "")
		message.reply ('Thanks for your suggestion')
		console.log(`${word2} has been suggested by ${message.member.user.tag}`)
	}
	
	//Test words
	if (message.content.toLowerCase().startsWith('test: ')) {
		
		var word = message.content.toLowerCase().replace("test: ", "")
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
		message.reply('Calm down bro') 
		++UsageCount
	}
	
	//Usage Count
	if (message.content.toLowerCase() === 'usagecount'){
		++UsageCount
		message.reply(`I have been summoned ${UsageCount} times`) 
	}
	
	//Downloads
	if (message.content.toLowerCase() === 'download' || message.content.toLowerCase() === 'downloads') {
			message.reply(`Here are the current downloads:\n\n`)
			
			for(var i in Downloads) {
				message.channel.send (`${Descriptions[i]}\n${Downloads[i]}\n\n`)
			}
			
			console.log(`${message.member.user.tag} requested the Downloads page`)
			++UsageCount
	}
	
	//FAQ
	if (message.content.toLowerCase() === 'faq') {
			message.reply(`You asked for the faq, so here it is:\n\nWhat do all the slashes mean?\npaths (/depot/depot/etc/etc) usually stands for a location in the iQue source leak, names between the slashes mean the folder that there is, in the example the location would be in the folder 'depot', then 'depot', then 'etc' and lastly 'etc'\n\nWhat does /vp/ or /ppg/ mean?\n/[letters]/ usually refers to a board on 4chan.org, this is the site that most leaks come from, /ppg/ in this case stands for 'Pokemon Prototype General', which is a kind of subboard for pokemon leaks on the /vp/ board\n\nHow do i use 4chan?\nGo to 4chan.org and select the board that you want to visit, if you are looking for leaks, the best boards are 'Video Games' (/v/), 'Pokemon' (/vp/) and 'Retro Games' (/vr/), now you can search for some keywords by pressing 'ctrl + f' or clicking on '[search]' in the top right of the site, my goto keywords are: 'leak', 'http' and 'anonfile'`)
			console.log(`${message.member.user.tag} requested the faq`)
			++UsageCount
	}
	
	//Helpbot
	if (message.content === 'i need help with the bot'){
			message.reply(`you asked for help, so here it is:\n\nI filter through messages on this server in search of specific keywords\nYou can find the list here: <https://pastebin.com/vSCSN7eX>\n*This list might be outdated if i don't feel like updating it\n\nAvailable commands:\n\n- Faq - a little faq\n- Download(s) - Some download links to legal files\n- Test: [Word that you want to test] - Test for a word to see if it is blacklisted\n- Suggestion: [Word that you want to suggest] - Notifies <${config.UserToPing}> of your suggestion for new blacklisted words\n- UsageCount - Tells you how many times the bot has been used this session\n- i need help with the bot - Brings up this messages\n- justworkgoddamn - Simply tells you '<@user>, calm down bro'\n\nIf you have any questions, feel free to ping <${config.UserToPing}>\nThis bot was made by <@321965387048812544> and is open sourced: https://github.com/TheQwertyMan/StopItDoesntExist\n(The project is licenced under the GNU General Public License v3.0 licence)`)
			console.log(`${message.member.user.tag} requested help`)
			++UsageCount
	}
	
	//check if user is config.WhitelistedRole and return if true
	if (message.member.roles.cache.some(role => role.name === config.WhitelistedRole)) {
		return
	}
	
	//Blacklist filter BadBot
	for (var i in BlacklistBadBot) {
		if (message.content.toLowerCase().includes(BlacklistBadBot[i])) {
			message.reply('THIS SERVER IS PRO BOT SO DONT YOU DARE INSULT IT AGAIN')
			console.log(`'${message.member.user.tag}' said '${message.content}' and the bot found the keyword '${BlacklistBadBot[i]}'`)
			++UsageCount
			break
		}
	}
	
	//Blacklist filter Search
	for (var i in BlacklistSearch) {
		if (message.content.toLowerCase().includes(BlacklistSearch[i])) {
			message.reply('JUST DO A GOOGLE SEARCH RETARD - TUTORIAL: <https://www.youtube.com/watch?v=R0DQfwc72PM>')
			console.log(`'${message.member.user.tag}' said '${message.content}' and the bot found the keyword '${BlacklistSearch[i]}'`)			
			++UsageCount
			break
		}
	}
	
	//Blacklist filter Cusswords
	for (var i in BlacklistCussWords) {
		if (message.content.toLowerCase().includes(BlacklistCussWords[i])) {
			message.reply('No, just no')
			console.log(`'${message.member.user.tag}' said '${message.content}' and the bot found the keyword '${BlacklistCussWords[i]}'`)
			++UsageCount
			break
		}
	}
	
	//Blacklist filter DontHave
	for (var i in BlacklistDontHave) {
		if (message.content.toLowerCase().includes(BlacklistDontHave[i])) {
			message.reply('WE DONT HAVE ANY OF THE LEAKS YOU ASK FOR - PROOF: <https://www.youtube.com/watch?v=5AFVQI8PsQA>')
			console.log(`'${message.member.user.tag}' said '${message.content}' and the bot found the keyword '${BlacklistDontHave[i]}'`)
			++UsageCount
			break
		}
	}
	
	//Blacklist filter Tracker
	for (var i in BlacklistTracker) {
		if (message.content.toLowerCase().includes(BlacklistTracker[i])) {
			message.reply('THERE ARE ONLY LEAKS IF ITS ON <#708761059388948522> - PROOF: <https://www.youtube.com/watch?v=5AFVQI8PsQA>')
			console.log(`'${message.member.user.tag}' said '${message.content}' and the bot found the keyword '${BlacklistTracker[i]}'`)
			++UsageCount
			break
		}
	}

	for (var i in BlacklistDrive) {
		if (message.content.toLowerCase().includes(BlacklistDrive[i])) {
			message.reply('THERE IS NO 2TB OF DATA - PROOF: <https://www.youtube.com/watch?v=5AFVQI8PsQA>')
			console.log(`'${message.member.user.tag}' said '${message.content}' and the bot found the keyword '${BlacklistDrive[i]}'`)
			++UsageCount
			break
		}
	}	
})

client.login(config.Token)
