module.exports.run = async (client, message, args) => {
    let number = Math.floor(Math.random() * 2);
    if (number == 1) {
        message.channel.send('Heads')
    }
    if (number == 0) {
        message.channel.send('Tails')
    }
}

module.exports.config = {
    name: "coin",
    description: "flips a coin",
    aliases: ['flip']
}