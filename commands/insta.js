const Discord = require('discord.js');

module.exports = {
    name: 'insta',
    description: "sends insta",
    aliases: ['instagram'],
    execute(client, message, args) {
        const testEmbed = new Discord.MessageEmbed()
          .setColor(0x8fa9ff)
          .setTitle('Instagram')
          .setDescription('Follow OblivionGhoul on Insta')
          .setURL('https://www.instagram.com/minh.kien.dinh/')
          .setFooter('@lovemaster_ofcl on snap')
          .setThumbnail('https://i.imgur.com/Ivtf7GP.png')
          .setTimestamp()
        try {
            message.reply(testEmbed);
        } catch {
            message.reply(`Sorry <@${message.author.username}>, Message cannot be sent.`)
        }
    } 
}