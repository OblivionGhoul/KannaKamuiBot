const Discord = require('discord.js')

module.exports = (client) => {
    client.on('guildCreate', (guild) => {
        const channel = guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
        const embed = new Discord.MessageEmbed()
            .setTitle('Thanks For Adding Me!')
            .setDescription(
                'Invite Me To Your Server [Here](https://discord.com/api/oauth2/authorize?client_id=757066313406611477&permissions=473427062&scope=bot)\nVisit The Bot Website [Here](https://oblivionghoul.github.io/KannaKamuiWebsite/)\nPlease Vote For My Bot [Here](https://top.gg/bot/757066313406611477)\nPlease Consider Donating [Here](https://www.paypal.com/paypalme/kannabot) To Keep It Running\nJoin My Support Server [Here](https://discord.gg/QpMWndNpse)\nMy Default Prefix Is `-`'
            )
            .setColor('RANDOM')
            .addField('Help', 'Use this Command get the full command list\n`-help`', true)
            .addField('SetPrefix', 'Use this Command to change the default prefix\n`-setprefix [new prefix]`', true)
            .setFooter('Bot Made By OblivionGhoul', 'https://i.imgur.com/Ivtf7GP.png')
            .setThumbnail('https://i.imgur.com/Zmr7TLZ.png')
            .setURL('https://oblivionghoul.github.io/KannaKamuiWebsite/')

        channel.send(embed)
    })
}