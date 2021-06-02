const random = require("something-random-on-discord").Random

module.exports = {
    commands: ['joke'],
    callback: async (message) => {
        let data = await random.getJoke()
        message.channel.send(data)
    },
}