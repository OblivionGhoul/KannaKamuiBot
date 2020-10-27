const ms = require('ms');
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    let messageID = args[0];
    client.giveawaysManager.reroll(messageID).then(() => {
        message.channel.send("Success! Giveaway rerolled!");
    }).catch((err) => {
        message.channel.send("No giveaway found for " + messageID + ", please check and try again");
    });
}

module.exports.config = {
    name: "reroll",
    description: "rerolls a giveaway",
    aliases: ['']
}