module.exports = {
    name: 'say',
    description: "says a message",
    execute(message, args) {
        if (message.member.hasPermission('BAN_MEMBERS')) {
            const sayMessage = args.join(" ");
            message.delete().catch(err => console.log(err));
            message.channel.send(sayMessage);
        } else {
            message.reply('You do not have permissions for that command.')
            return;
        }
    }
}