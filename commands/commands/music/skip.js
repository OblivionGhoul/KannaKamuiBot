const sendError = require("@util/musicerror")

module.exports = {
    commands: ['skip'],
    callback: async (message, args) => {
        const channel = message.member.voice.channel
        if (!channel) return sendError("You need to be in a voice channel to play music!", message.channel);
        const serverQueue = message.client.queue.get(message.guild.id);
        if (!serverQueue) return sendError("There is nothing playing that I could skip for you.", message.channel);
        serverQueue.connection.dispatcher.end("Skiped the music");
        message.react("✅")
    },
}