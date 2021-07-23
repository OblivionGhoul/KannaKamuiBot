const {MessageEmbed} = require('discord.js')

module.exports = {
    commands: ['serverpicture', 'server-picture'],
    callback: async (message, args, client) => {
        const embed = new MessageEmbed()
        .setTitle('Server Picture')
        .setImage(message.guild.iconURL({ dynamic: true, size: 1024 }))
        .setColor('RANDOM')
        message.channel.send(embed)
    }
}