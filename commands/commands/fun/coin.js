module.exports = {
    commands: ['coin', 'flip'],
    callback: async (message) => {
        let number = Math.floor(Math.random() * 2);
        if (number == 1) {
            message.channel.send('Heads')
        }
        if (number == 0) {
            message.channel.send('Tails')
        }
    },
}