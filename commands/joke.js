const {Random} = require('something-random-on-discord');
const random = new Random();

module.exports.run = async (client, message, args) => {
    let data = await random.getJoke()
    message.channel.send(data)
}

module.exports.config = {
    name: "joke",
    description: "sends a  joke",
    aliases: ['']
}