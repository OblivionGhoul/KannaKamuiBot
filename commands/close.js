const Discord = require('discord.js');

module.exports = {
    name: 'close',
    description: "closes a ticket",
    async execute(message, args) {
        if (message.member.hasPermission('BAN_MEMBERS')) {
            message.channel.delete();
        } else {
            message.reply('You do not have permissions for that command.')
            return;
        }
    }
}