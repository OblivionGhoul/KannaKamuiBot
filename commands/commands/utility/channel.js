module.exports = {
    commands: ['channel'],
    callback: async (message, client, args) => {
        let channel = message.channel.id
        message.channel.send(`Channel ID: ${channel}`)
    }
}