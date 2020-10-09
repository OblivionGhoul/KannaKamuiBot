const {Random} = require('something-random-on-discord');
const random = new Random();

module.exports = {
    name: 'joke',
    description: "sends a joke",
    async execute(client, message, args) {
        let data = await random.getJoke()
        message.channel.send(data)
    }
}