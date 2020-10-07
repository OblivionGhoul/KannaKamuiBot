module.exports = {
    name: 'matt',
    description: "matt quote",
    aliases: ['joe'],
    execute(client, message, args) {
        message.channel.send('shut up');
    }
  }