const Discord = require('discord.js');

module.exports = {
  commands: ['avatar'],
  callback: async (message) => {
    let member = message.mentions.users.first() || message.author
    let avatar = member.displayAvatarURL({ size: 1024 })
    const embed = new Discord.MessageEmbed()
        .setTitle(`${member.username}'s avatar`)
        .setImage(avatar)
        .setColor("RANDOM")
        .setFooter("Bot Made By OblivionGhoul#5842", "https://i.imgur.com/Ivtf7GP.png")
    message.channel.send(embed);
  },
}