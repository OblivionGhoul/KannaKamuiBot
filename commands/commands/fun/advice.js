const random = require("something-random-on-discord").Random

module.exports = {
  commands: ['advice'],
  callback: async (message) => {
    let data = await random.getAdvice()
    message.channel.send(data)
  },
}