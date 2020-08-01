# StopItDoesntExist
My shitty discord bot for the Mirror House Cornflakes server that filters some words/questions that are answered in the faq

# How to add this bot to your own server

First go to this page and make a new application: https://discord.com/developers/

Copy the `ClientID`

Go to the 'Bot' section and copy your `Token`

Rename `config.example.json` to `config.example`

Now edit `config.json` and put your `Token` where it says `Your token here`

Now copy your `clientID` and fill it in where it says `[clientid here]` in the following link: `https://discord.com/api/oauth2/authorize?client_id=[clientid here]&permissions=3072&scope=bot`

Now you need to set up the blacklists

Rename `blacklists.example.json` to `blacklists.json`

In `blacklists.json` fill in the blacklists like the example shows


If you pay someone to host it for you just tell them to host this script at this point

Now you have to install node to host the bot



Node: https://nodejs.org/en/



Now go into the directory you have `index.js` with cmd and type: `npm install`

This will install the dependencies

Now do `npm run start` to start the bot

Congratulations, your bot is officially hosted, now you just need to add it to your server



First copy the link in we created earlier and paste it in your browser

Select the Discord server you want to add this bot to and click on 'Authorize'

Complete the captcha

Done.