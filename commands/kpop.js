const {Random} = require('something-random-on-discord');
const random = new Random();

module.exports = {
    name: 'kpop',
    description: "sends a random kpop artist picture and name",
    async execute(client, message, args) {
        let data = await random.getKpop()
        message.channel.send(data)
    }
}