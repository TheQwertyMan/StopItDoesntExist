# StopItDoesntExist
My shitty discord bot for the Mirror House Cornflakes server that filters some words/questions that are answered in the faq

# filtered words
- ura zelda
- mother 64
- mother64
- spaceworld
- mario 64 beta
- mario64 beta
- mario 64 proto
- mario64 proto
- mario64 prototype
- mario 64 prototype
- new leaks?
- new leaks
- new leak?
- new leak

# How to add this bot to your own server
Ok, so i'm not hosting this for you, so here are instructions on how to host and add it to your own server:

First go to this page and make a new application: https://discord.com/developers/

Copy the `ClientID`

Go to the 'Bot' section and copy your `Token`

Now edit `index.js` and put your `ClientID` and `Token` into the places where you need them

You can now see the filters and roles that are an exeption, if you want to change these, go ahead, but i won't help you since it takes to long to write


If you pay someone to host it for you just tell them to host this script at this point

Now you have to install node and the discord api to host the bot


Node: https://nodejs.org/en/

Discord api: After you install node type this in the cmd: `npm install discord.js`


Now go into the directory you have `index.js` with cmd and type: `nodemon --inspect index.js`

Congratulations, your bot is officially hosted, now you just need to add it to your server


From `index.js`:

First go to this site: https://discordapp.com/oauth2/authorize?client_id=[your client id here]&scope=bot

Select the Discord server you want to add this bot to and click on 'Authorize'

Complete the captcha

Now the bot is added, if anyone types these keywords and is not a 'Pure Ones', the bot will send one of these responses: WE DONT HAVE ANY OF THE LEAKS YOU ASK FOR - PROOF: <https://www.youtube.com/watch?v=5AFVQI8PsQA> or THERE ARE ONLY LEAKS IF ITS ON #leak-tracker - PROOF: <https://www.youtube.com/watch?v=5AFVQI8PsQA>
