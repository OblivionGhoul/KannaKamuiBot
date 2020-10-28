const { Random } = require('something-random-on-discord');
const random = new Random();

module.exports = {
  commands: ['advice'],
  callback: async (message) => {
    let data = await random.getAdvice()
    message.channel.send(data)
  },
}