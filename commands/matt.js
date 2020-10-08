module.exports = {
    name: 'matt',
    description: "quote",
    aliases: ['joe'],
    execute(client, message, args) {
        message.channel.send('shut up');
    }
  }