const Discord = require('discord.js');

module.exports = {
  commands: ['avatar', 'pfp', 'profilepicture'],
  callback: async (message) => {
    let member = message.mentions.users.first() || message.author
    let avatar = member.displayAvatarURL({ dynamic: true, size: 1024 })
    const embed = new Discord.MessageEmbed()
        .setTitle(`${member.username}'s Avatar`)
        .setImage(avatar)
        .setColor("RANDOM")
    message.channel.send(embed);
  },
}