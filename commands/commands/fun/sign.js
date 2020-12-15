
const Discord = require("discord.js");
const Random = require("srod-v2");
const Fetch = require("node-fetch")
const client = require('alexflipnote.js');
const alexclient = new client('Your-API-Token-Here');

module.exports = {
    commands: ['sign'],
    callback: async (message, args) => {
        if (!message.content.includes(" ")) {
            return message.channel.send("Please specify what you want to say.")
        }
        message.channel.send('Creating image...')
        let input = message.content.substring(message.content.indexOf(' ') + 1)
        let BlushFact = await Random.BlushFact(`${input}`, "BLUE");
        message.channel.send(BlushFact);
    }
}