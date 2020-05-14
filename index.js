//https://discordapp.com/oauth2/authorize?client_id=[Your client id here]&scope=bot
//nodemon --inspect index.js

//Instructions
//First go to this site: https://discordapp.com/oauth2/authorize?client_id=[Your client id here]&scope=bot
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
//new leaks?
//new leaks
//new leak?
//new leak

//Preset
// //
// if (message.content.toLowerCase().includes('') && !message.member.roles.cache.some(role => role.name === 'Pure Ones')) {
// message.reply('WE DONT HAVE ANY OF THE LEAKS YOU ASK FOR - PROOF: <https://www.youtube.com/watch?v=5AFVQI8PsQA>'); 
// }


const Discord = require('discord.js');
 const client = new Discord.Client();

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

var Mother = 'Mother'

client.on('message', message => {
	
 //	WE DONT HAVE ANY OF THE LEAKS YOU ASK FOR
	
 //Mother 64
 if (message.content.toLowerCase().includes('mother 64') && !message.member.roles.cache.some(role => role.name === 'Pure Ones')){
 message.reply('WE DONT HAVE ANY OF THE LEAKS YOU ASK FOR - PROOF: <https://www.youtube.com/watch?v=5AFVQI8PsQA>'); 
 }
 
 //Mother64
 if (message.content.toLowerCase().includes('mother64') && !message.member.roles.cache.some(role => role.name === 'Pure Ones')) {
 message.reply('WE DONT HAVE ANY OF THE LEAKS YOU ASK FOR - PROOF: <https://www.youtube.com/watch?v=5AFVQI8PsQA>'); 
 }
 
 //Ura Zelda
 if (message.content.toLowerCase().includes('ura zelda') && !message.member.roles.cache.some(role => role.name === 'Pure Ones')) {
 message.reply('WE DONT HAVE ANY OF THE LEAKS YOU ASK FOR - PROOF: <https://www.youtube.com/watch?v=5AFVQI8PsQA>'); 
 }
 
 //spaceworld
 if (message.content.toLowerCase().includes('spaceworld') && !message.member.roles.cache.some(role => role.name === 'Pure Ones')) {
 message.reply('WE DONT HAVE ANY OF THE LEAKS YOU ASK FOR - PROOF: <https://www.youtube.com/watch?v=5AFVQI8PsQA>'); 
 }
 
 //mario 64 beta
 if (message.content.toLowerCase().includes('mario 64 beta') && !message.member.roles.cache.some(role => role.name === 'Pure Ones')) {
 message.reply('WE DONT HAVE ANY OF THE LEAKS YOU ASK FOR - PROOF: <https://www.youtube.com/watch?v=5AFVQI8PsQA>'); 
 }
 
 //mario64 beta
 if (message.content.toLowerCase().includes('mario64 beta') && !message.member.roles.cache.some(role => role.name === 'Pure Ones')) {
 message.reply('WE DONT HAVE ANY OF THE LEAKS YOU ASK FOR - PROOF: <https://www.youtube.com/watch?v=5AFVQI8PsQA>'); 
 }
 
 //mario64 beta
 if (message.content.toLowerCase().includes('mario64 beta') && !message.member.roles.cache.some(role => role.name === 'Pure Ones')) {
 message.reply('WE DONT HAVE ANY OF THE LEAKS YOU ASK FOR - PROOF: <https://www.youtube.com/watch?v=5AFVQI8PsQA>'); 
 }
 
 //mario 64 proto
 if (message.content.toLowerCase().includes('mario 64 proto') && !message.member.roles.cache.some(role => role.name === 'Pure Ones')) {
 message.reply('WE DONT HAVE ANY OF THE LEAKS YOU ASK FOR - PROOF: <https://www.youtube.com/watch?v=5AFVQI8PsQA>'); 
 }
 
 //mario64 prototype
 if (message.content.toLowerCase().includes('mario64 prototype') && !message.member.roles.cache.some(role => role.name === 'Pure Ones')) {
 message.reply('WE DONT HAVE ANY OF THE LEAKS YOU ASK FOR - PROOF: <https://www.youtube.com/watch?v=5AFVQI8PsQA>'); 
 }
 
 //mario64 prototype
 if (message.content.toLowerCase().includes('mario64 prototype') && !message.member.roles.cache.some(role => role.name === 'Pure Ones')) {
 message.reply('WE DONT HAVE ANY OF THE LEAKS YOU ASK FOR - PROOF: <https://www.youtube.com/watch?v=5AFVQI8PsQA>'); 
 }
 
 // THERE ARE ONLY LEAKS IF ITS ON #leak-tracker
 
 //New leak?
 if (message.content.toLowerCase().includes('new leak?') && !message.member.roles.cache.some(role => role.name === 'Pure Ones')) {
 message.reply('THERE ARE ONLY LEAKS IF ITS ON #leak-tracker - PROOF: <https://www.youtube.com/watch?v=5AFVQI8PsQA>'); 
 }
 
 //new leak
 if (message.content.toLowerCase().includes('new leak') && !message.member.roles.cache.some(role => role.name === 'Pure Ones')) {
 message.reply('THERE ARE ONLY LEAKS IF ITS ON #leak-tracker - PROOF: <https://www.youtube.com/watch?v=5AFVQI8PsQA>'); 
 }
 
 //new leaks?
 if (message.content.toLowerCase().includes('new leaks?') && !message.member.roles.cache.some(role => role.name === 'Pure Ones')) {
 message.reply('THERE ARE ONLY LEAKS IF ITS ON #leak-tracker - PROOF: <https://www.youtube.com/watch?v=5AFVQI8PsQA>'); 
 }
 
 //new leaks
 if (message.content.toLowerCase().includes('new leaks') && !message.member.roles.cache.some(role => role.name === 'Pure Ones')) {
 message.reply('THERE ARE ONLY LEAKS IF ITS ON #leak-tracker - PROOF: <https://www.youtube.com/watch?v=5AFVQI8PsQA>'); 
 }
 
});

client.login('Your Token Here');
