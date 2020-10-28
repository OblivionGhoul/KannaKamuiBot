const {Random} = require('something-random-on-discord');
const random = new Random();

module.exports = {
    commands: ['kpop'],
    callback: async (message) => {
        let data = await random.getKpop()
        message.channel.send(data)
    },
}