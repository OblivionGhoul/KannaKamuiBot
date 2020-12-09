const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: ['discord'],
    callback: async (message, args) => {
        const embed = new MessageEmbed()
        .setTitle('Minh\'s Inn')
        .setAuthor(message.member.displayName, message.member.user.displayAvatarURL())
        .setURL('https://discord.com/invite/VNAQrkQ')
        .setDescription('Join the Discord support server!')
        .setFooter("Bot Made By OblivionGhoul#5842", "https://i.imgur.com/Ivtf7GP.png")
        .setColor('RANDOM')
        message.channel.send(embed)
    },
}