const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "commands",
    description: "Sends the list of commands",

    async execute(client, message, args) {
        const moderation = new Discord.MessageEmbed()
            .setTitle('Moderation')
            .setDescription('My default prefix is [-]. Click the arrows at the bottom to change categories.')
            .addField('Ban', 'Bans a user (ex: -ban @usertag)')
            .addField('Kick', 'Kicks a user (ex: -kick @usertag)')
            .addField('Temp Mute', 'Temporarily mutes a user (ex: -tempmute [@usertag][time(s, m, h)])')
            .addField('Poll', 'Creates a poll (ex: -poll [#channelname] [Question])')
            .addField('Rules', 'Sends the list of rules (ex: -rules)')
            .addField('Close', 'Deletes a channel (ex: -close)')
            .addField('Giveaway', 'Creates a giveaway (ex: -giveaway [#channelname][time{s,m,h}][# of winners][giveaway prize]')
            .addField('Dgiveaway', 'Deletes a giveaway (ex: -dgiveaway [giveaway ID]')
            .addField('Reroll', 'Rerolls the giveaway (ex: -reroll [giveaway ID])')
            .addField('Warn', 'Warns a user (ex: -warn [@usertag or user ID][reason for warn])')
            .addField('Warnings', 'Checks user\'s amount of warnings (ex: -close)')
            .addField('Dwarns', 'Deletes a member\'s warns (ex: -dwarns [@user or user ID])')
            .addField('Setprefix', 'Changes the prefix of the bot (ex: -setprefix [new prefix])')
            .setTimestamp()
            .setThumbnail('https://i.imgur.com/Cwea8yj.png?1')

        const fun = new Discord.MessageEmbed()
            .setTitle('Fun')
            .setDescription('My default prefix is [-]. Click the arrows at the bottom to change categories.')
            .addField('Quotes (Enter name to use this command)', 'Sends quotes from Minh, Bryce, Ethan, Hanna, Jake, Josh, Fremont, Matt, and Kay (ex: -minh)')
            .addField('Meme', 'Sends a meme in the chat (ex: -meme)')
            .addField('Roast', 'Roasts a user (ex: -roast @usertag)')
            .addField('Ascii', 'Sends cool text (ex: -ascii [text])')
            .addField('Insta', 'Sends user OblivionGhouls Insta (ex: -insta)')
            .setTimestamp()
            .setThumbnail('https://i.imgur.com/Cwea8yj.png?1')

        const utility = new Discord.MessageEmbed()
            .setTitle('Utility')
            .setDescription('My default prefix is [-]. Click the arrows at the bottom to change categories.')
            .addField('Cal', 'Calculator (ex: -cal 234+23432)')
            .addField('Info', 'Gets the info of a user (ex: -info @usertag)')
            .addField('Avatar', 'Sends avatar of a user (ex: -avatar)')
            .addField('Weather', 'Sends the weather forecast of a city (ex: -weather [city name])')
            .addField('Server Info', 'Gets the info of the server (ex: -server [members, boosts, joined])')
            .addField('Ticket', 'Creates a ticket for questions (ex: -ticket [question])')
            .addField('Ping', 'Gets the ping of the bot (ex: -ping)')
            .setTimestamp()
            .setThumbnail('https://i.imgur.com/Cwea8yj.png?1')

        const economy = new Discord.MessageEmbed()
            .setTitle('Economy')
            .setDescription('My default prefix is [-]. Click the arrows at the bottom to change categories.')
            .addField('Bal', 'Checks user balance (ex: -bal)')
            .addField('Buy', 'Buys an item from the snop (ex: -buy [item name])')
            .addField('Daily', 'Redeems daily money (ex: -daily)')
            .addField('Work', 'Work to get money (ex: -work)')
            .addField('Inv', 'Checks user inventory (ex: -inv)')
            .addField('Leaderboard', 'Sends the leaderboard of economy (ex: -leaderboard)')
            .addField('Store', 'Sends list of items in the store (ex: -store)')
            .setTimestamp()
            .setThumbnail('https://i.imgur.com/Cwea8yj.png?1')

        const pages = [
            fun,
            utility,
            economy,
            moderation,
        ]

        const emojiList = ["⏪", "⏩"];
        pagination(message, pages, emojiList)
    }
}