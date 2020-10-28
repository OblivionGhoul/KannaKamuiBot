module.exports = {
    commands: ['matt', 'joe'],
    callback: async (message) => {
        message.channel.send('shut up')
    },
}