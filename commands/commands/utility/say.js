module.exports = {
    commands: ['say'],
    callback: async (message, args) => {
        if (message.member.hasPermission('ADMINISTRATOR')) {
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
            message.reply('You need the admin permission to use this command.')
            return;
        }
    },
}