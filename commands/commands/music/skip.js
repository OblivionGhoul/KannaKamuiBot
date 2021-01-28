const sendError = require("@util/musicerror")
const { MessageEmbed } = require("discord.js");

module.exports = {
    commands: ['skip'],
    callback: async (message, args) => {
        const channel = message.member.voice.channel
        if (!channel) return sendError("I'm sorry but you need to be in a voice channel to play music!", message.channel);
        const serverQueue = message.client.queue.get(message.guild.id);
        if (!serverQueue) return sendError("There is nothing playing that I could skip for you.", message.channel);
        if (!serverQueue.connection) return
        if (!serverQueue.connection.dispatcher) return
        try {
            serverQueue.connection.dispatcher.end()
        } catch (error) {
            serverQueue.voiceChannel.leave()
            message.client.queue.delete(message.guild.id);
            return sendError(`The player has stopped and the queue has been cleared.: ${error}`, message.channel);
        }
        message.react("✅")
    },
}