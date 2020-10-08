const Discord = require('discord.js');

module.exports = {
    name: 'ban',
    description: "bans a user",
    aliases: [''],
    execute(client, message, args) {
        if (message.member.hasPermission('BAN_MEMBERS')) {
            const userBan = message.mentions.users.first();
            if (userBan) {
                var member = message.guild.member(userBan);
                if (member) {
                    member.ban({
                        reason: 'You broke the rules.'
                    }).then(() => {
                        message.reply(`${userBan.tag} was banned from the server.`)
                    })
                } else {
                    message.reply('That user is not in the server.');
                }
            } else {
                message.reply('Please state a user to ban.')
            }
        } else {
            message.reply('You do not have permissions for that command.')
            return;
        }
    }
}