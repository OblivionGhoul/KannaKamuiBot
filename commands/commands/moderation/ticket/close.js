const Discord = require('discord.js');

module.exports = {
    commands: ['close'],
    callback: async (message) => {
        if (message.member.hasPermission('BAN_MEMBERS')) {
            message.channel.delete();
        } else {
            message.reply('You do not have permissions for that command.')
            return;
        }
    },
}