const Discord = require('discord.js');

module.exports = {
    name: 'commands',
    description: "sends the list of commands",
    execute(message, args) {
        const testEmbed = new Discord.MessageEmbed()
          .setColor(0xedb1f2)
          .setTitle('Bot Commands')
          .setDescription('My prefix is (-).')
          .addField('Quotes (Enter name to use this command)', 'Sends quotes from Minh, Bat, Bryce, Ethan, Hanna, Jake, Josh, and Kay (ex: -minh)')
          .addField('Ban', 'Bans a user (ex: -ban @usertag)')
          .addField('Kick', 'Kicks a user (ex: -kick @usertag)')
          .addField('Temp Mute [Work in progress]', 'Temporarily mutes a user (ex: -tempmute [@usertag] [time(s, m, h)])')
          .addField('Poll', 'Creates a poll (ex: -poll [#channelname] [Question])')
          .addField('Meme', 'Sends a meme in the chat (ex: -meme)')
          .addField('Roast', 'Roasts a user (ex: -roast @usertag)')
          .addField('Rules', 'Sends the list of rules (ex: -rules)')
          .addField('Cal', 'Calculator (ex: -cal add 234232 234234))')
          .addField('Info', 'Gets the info of a user (ex: -info @usertag)')
          .addField('Server Info', 'Gets the info of the server (ex: -server [members, boosts, joined])')
          .addField('Insta', 'Sends user OblivionGhouls Insta (ex: -insta)')
          .setFooter('This bot is still a work in progress and new commands are going to be added. Please ask OblivionGhoul#5842 for further questions.')
          .setThumbnail('https://i.imgur.com/Sp2cuZQ.png')
          .setTimestamp()
        try {
            message.author.send({embed:testEmbed});
        } catch {
            message.reply('Unable to send command list, please make sure public DMs are on.')
        }
    } 
}