module.exports.run = async (client, message, args) => {
    message.channel.send('shut up');
}

module.exports.config = {
    name: "matt",
    description: "quote",
    aliases: ['joe']
}