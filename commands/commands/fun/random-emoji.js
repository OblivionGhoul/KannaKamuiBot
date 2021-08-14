const emojiList = require('../../../extra/justEmojis.json')
const Discord = require('discord.js')
   module.exports = {
    command: "random-emoji",
    callback: async (client, message, args) => {

        const random = Math.floor(Math.random() * 4332)

        const embed = new Discord.MessageEmbed()
        .setTitle('Random Emoji')
        .setDescription(emojiList[random])
        .setFooter('Fetchs an emoji from a file with over 4330 emojis!')
        message.channel.send(embed)
       }
   }
