const {Random} = require('something-random-on-discord');
const random = new Random();

module.exports = {
    commands: ['joke'],
    callback: async (message) => {
        let data = await random.getJoke()
        message.channel.send(data)
    },
}