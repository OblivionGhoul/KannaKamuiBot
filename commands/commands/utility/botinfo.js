const { MessageEmbed, version: djsversion } = require('discord.js');
const { version } = require('@root/package.json');
const { utc } = require('moment');
const os = require('os');
const ms = require('ms');

module.exports = {
    commands: ['botinfo', 'bot-info'],
    callback: async (message, args, user, client) => {
        const core = os.cpus()[0];
        const embed = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setColor(message.guild.me.displayHexColor || 'BLUE')
            .addField('General', [
                `**❯ Client:** ${client.user.tag} (${client.user.id})`,
                `**❯ Servers:** ${client.guilds.cache.size.toLocaleString()} `,
                `**❯ Users:** ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`,
                `**❯ Channels:** ${client.channels.cache.size.toLocaleString()}`,
                `**❯ Creation Date:** ${utc(client.user.createdTimestamp).format('Do MMMM YYYY HH:mm:ss')}`,
                `**❯ Node.js:** ${process.version}`,
                `**❯ Version:** v${version}`,
                `**❯ Discord.js:** v${djsversion}`,
                '\u200b'
            ])
            .addField('System', [
                `**❯ Platform:** ${process.platform}`,
                `**❯ Uptime:** ${ms(os.uptime() * 1000, { long: true })}`,
                `**❯ CPU:**`,
                `\u3000 Cores: ${os.cpus().length}`,
                `\u3000 Model: ${core.model}`,
                `\u3000 Speed: ${core.speed}MHz`,
                `**❯ Memory:**`,
                `\u3000 Available Memory: ${os.freemem()} Bytes`,
                `\u3000 Total Memory: ${os.totalmem()} Bytes`,
            ])
            .setFooter('Bot made by OblivionGhoul#5842')
            .setTimestamp();

        message.channel.send(embed);
    },
}