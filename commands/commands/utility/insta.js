const Discord = require('discord.js');

module.exports = {
    commands: ['insta', 'instagram'],
    callback: async (message) => {
        const testEmbed = new Discord.MessageEmbed()
            .setColor(0x8fa9ff)
            .setTitle('Instagram')
            .setDescription('Follow OblivionGhoul on Insta')
            .setURL('https://www.instagram.com/minh.kien.dinh/')
            .setFooter("Bot Made By OblivionGhoul#5842", "https://i.imgur.com/Ivtf7GP.png")
            .setThumbnail('https://i.imgur.com/Ivtf7GP.png')
            .setTimestamp()
        try {
            message.reply(testEmbed);
        } catch {
            message.reply(`Sorry <@${message.author.username}>, Message cannot be sent.`)
        }
    },
}