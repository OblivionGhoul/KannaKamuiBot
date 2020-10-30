const sendError = require("@util/musicerror")
const { MessageEmbed } = require("discord.js");

module.exports = {
    commands: ['stop'],
    callback: async (message, args) => {
        const channel = message.member.voice.channel
        if (!channel) return sendError("You need to be in a voice channel to play music!", message.channel);
        const serverQueue = message.client.queue.get(message.guild.id);
        if (!serverQueue) return sendError("There is nothing playing that I could stop for you.", message.channel);
        serverQueue.songs = [];
        serverQueue.connection.dispatcher.end("Stopped the music");
        message.react("✅")
    },
}