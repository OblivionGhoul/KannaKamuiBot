module.exports = {
    commands: ['say'],
    callback: async (message, args) => {
        if (message.member.hasPermission('BAN_MEMBERS')) {
            let msg;
            let textChannel = message.mentions.channels.first()
            message.delete()
    
            if (textChannel) {
                msg = args.slice(1).join(" ");
                textChannel.send(msg)
            } else {
                msg = args.join(" ");
                message.channel.send(msg)
            }
        } else {
            message.delete().catch(err => console.log(err));
            message.reply('You do not have permissions for that command.')
            return;
        }
    },
}