const Discord = require('discord.js');

module.exports = {
    commands: ['purge', 'clear', 'c'],
    callback: async (message) => {
        const messageArray = message.content.split(' ');
        const args1 = messageArray.slice(1);

        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('You need the manage messages permission for this command!');

        if(!message.guild.me.hasPermission('MANAGE_MESSAGES')) {
          message.channel.send('I need permissions to delete messages please.')
        }
        
        let deleteAmount;

        if (isNaN(args1[0]) || parseInt(args1[0]) <= 0) { return message.reply('Please use a number between 1-99.') }

        if (parseInt(args1[0]) >= 100) {
            return message.reply('You can only delete 99 messages at a time.')
        } else {
            deleteAmount = parseInt(args1[0]);
        }
        message.channel.bulkDelete(deleteAmount + 1, true);
    },
}
