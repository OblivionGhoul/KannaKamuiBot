const Discord = require('discord.js');

module.exports = {
    name: 'commands',
    description: "sends the list of commands",
    execute(message, args) {
        const testEmbed = new Discord.MessageEmbed()
          .setColor(0xedb1f2)
          .setTitle('Bot Commands')
          .setDescription('My prefix is (-).')
          .addField('Quotes (Enter name to use this command)', 'Sends quotes from Minh, Bryce, Ethan, Hanna, Jake, Josh, Fremont, and Kay (ex: -minh)')
          .addField('Ban', 'Bans a user (ex: -ban @usertag)')
          .addField('Kick', 'Kicks a user (ex: -kick @usertag)')
          .addField('Temp Mute', 'Temporarily mutes a user (ex: -tempmute [@usertag][time(s, m, h)])')
          .addField('Poll', 'Creates a poll (ex: -poll [#channelname] [Question])')
          .addField('Meme', 'Sends a meme in the chat (ex: -meme)')
          .addField('Roast', 'Roasts a user (ex: -roast @usertag)')
          .addField('Rules', 'Sends the list of rules (ex: -rules)')
          .addField('Cal', 'Calculator (ex: -cal add 234232 234234))')
          .addField('Info', 'Gets the info of a user (ex: -info @usertag)')
          .addField('Server Info', 'Gets the info of the server (ex: -server [members, boosts, joined])')
          .addField('Insta', 'Sends user OblivionGhouls Insta (ex: -insta)')
          .addField('Ticket', 'Creates a ticket for questions (ex: -ticket [question])')
          .addField('Close', 'Deletes a channel (ex: -close)')
          .setFooter('This bot is still a work in progress and new commands are going to be added. Please do [-ticket {question}] for further questions.')
          .setThumbnail('https://i.imgur.com/Sp2cuZQ.png')
          .setTimestamp()
        try {
            message.author.send({embed:testEmbed});
        } catch {
            message.reply('Unable to send command list, please make sure server DMs are on.')
        }
    } 
}