const {Random} = require('something-random-on-discord');
const random = new Random();

module.exports.run = async (client, message, args) => {
    let data = await random.getKpop()
    message.channel.send(data)
}

module.exports.config = {
    name: "kpop",
    description: "sends kpop artist and name",
    aliases: ['']
}