module.exports.run = async (client, message, args) => {
    message.channel.send('Minh is so cute!');
}

module.exports.config = {
    name: "minh",
    description: "quote",
    aliases: ['']
}