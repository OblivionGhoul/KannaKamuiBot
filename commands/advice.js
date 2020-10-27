const { Random } = require('something-random-on-discord');
const random = new Random();

module.exports.run = async (client, message, args) => {
    let data = await random.getAdvice()
    message.channel.send(data)
}

module.exports.config = {
    name: "advice",
    description: "sends advice",
    aliases: []
}