# StopItDoesntExist
My shitty discord bot for the Mirror House Cornflakes server that filters some words/questions that are answered in the faq

# filtered words as of writing this
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

Now edit `config.json` and put your `Token` after `token` and your ClientID after `BotLink` where it says `[yourClientidhere]`

Copy your UserID, you get this by enabling dev mode and rightclicking on your profile, and the pressing copy ID, and paste it next to UserToPing

The bot will say to ping you with any questions

You can now see the filters and roles that are an exeption in `index.js`, if you want to change these, go ahead, but i won't help you since it takes to long to write



If you pay someone to host it for you just tell them to host this script at this point

Now you have to install node,discord api and nodemon to host the bot



Node: https://nodejs.org/en/

Discord api: After you install node type this in the cmd: `npm install discord.js`

Nodemon: After you install node type this in the cmd: `npm i -g nodemon`

Now go into the directory you have `index.js` with cmd and type: `nodemon --inspect index.js`

Congratulations, your bot is officially hosted, now you just need to add it to your server



First copy the link in `config.json` and paste it in your browser

Select the Discord server you want to add this bot to and click on 'Authorize'

Complete the captcha

Now the bot is added, if anyone types these keywords and is not a 'Pure Ones', the bot will send one of these responses: WE DONT HAVE ANY OF THE LEAKS YOU ASK FOR - PROOF: <https://www.youtube.com/watch?v=5AFVQI8PsQA> or THERE ARE ONLY LEAKS IF ITS ON #leak-tracker - PROOF: <https://www.youtube.com/watch?v=5AFVQI8PsQA>
