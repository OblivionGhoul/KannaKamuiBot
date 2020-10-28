module.exports = {
    commands: 'nickname',
    permissions: ['MANAGE_NICKNAMES', 'CHANGE_NICKNAME'],
    callback: (message, args, text, client) => {
        const target = message.mentions.users.first()
        const member = message.guild.members.cache.get(target.id)

        args.shift()
        const nickname = args.join(' ')

        member.setNickname(nickname)

        message.reply(`Successfully changed the nickname to ${nickname}`)
    },
}
