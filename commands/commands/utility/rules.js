const Discord = require('discord.js');

module.exports = {
    commands: ['rules', 'rule'],
    callback: async (message) => {
        const testEmbed = new Discord.MessageEmbed()
            .setColor(0x12ffff)
            .setTitle('Server Rules')
            .setDescription('If you do not follow these rules, you will be warned. If you continue to break these rules, you will be kicked or banned.')
            .addField('Rule #1', 'Do not be offensive.')
            .addField('Rule #2', 'Just use common sense and do not be a jerk. (It is not that hard to not be a jerk.)')
            .addField('Rule #3', 'Do not beg for a higher role.')
            .addField('Rule #4', 'Do not ping anyone unless necessary.')
            .setFooter('Use the -rules command to access the rules in a text channel')
            .setThumbnail('https://i.imgur.com/Cwea8yj.png?1')
            .setTimestamp()
        try {
            message.reply(testEmbed);
        } catch {
            message.reply(`Sorry <@${message.author.username}>, Message cannot be sent.`)
        }
    },
}