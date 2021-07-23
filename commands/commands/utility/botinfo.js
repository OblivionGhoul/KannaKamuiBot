const { MessageEmbed, version: djsversion } = require('discord.js');
const { version } = require('@root/package.json');
const ms = require('ms');

module.exports = {
    commands: ['botinfo', 'bot-info'],
    callback: async (message, args, user, client) => {
        const embed = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setColor(message.guild.me.displayHexColor || 'BLUE')
            .addField('General', [
                `**❯ Client:** ${client.user.tag} (${client.user.id})`,
                `**❯ Servers:** ${client.guilds.cache.size.toLocaleString()} `,
                `**❯ Users:** ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`,
                `**❯ Channels:** ${client.channels.cache.size.toLocaleString()}`,
                `**❯ Creation Date:** ${client.user.createdAt}`,
                `**❯ Node.js:** ${process.version}`,
                `**❯ Version:** v${version}`,
                `**❯ Discord.js:** v${djsversion}`,
                '\u200b'
            ])
            .setFooter("Bot Made By OblivionGhoul", "https://i.imgur.com/Ivtf7GP.png")
            .setTimestamp();

        message.channel.send(embed);
    },
}