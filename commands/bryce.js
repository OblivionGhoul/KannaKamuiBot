module.exports.run = async (client, message, args) => {
    message.channel.send('ok tomorrow');
}

module.exports.config = {
    name: "bryce",
    description: "quote",
    aliases: ['bruce']
}