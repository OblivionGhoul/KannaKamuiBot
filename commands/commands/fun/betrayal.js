module.exports = {
    commands: ['betrayal'],
    callback: async (message, args, arguments, client) => {
        if (message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channelID, 'betrayal').then(async invite => {
                message.channel.send(`${invite.code}`)
                message.channel.send('***NOTE: CLICK ON THE BLUE DISCORD INVITE LINK TO START THE GAME (BETA)***')
            })
        } else {
            message.channel.send('You must be in a vc to use this command!')
        }
    }
}