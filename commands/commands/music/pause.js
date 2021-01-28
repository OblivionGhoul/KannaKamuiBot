const { MessageEmbed } = require("discord.js");
const sendError = require("@util/musicerror")

module.exports = {
    commands: ['pause'],
    callback: async (message, args) => {
        const serverQueue = message.client.queue.get(message.guild.id);
        if (serverQueue && serverQueue.playing) {
            serverQueue.playing = false;
            try {
                serverQueue.connection.dispatcher.pause()
            } catch (error) {
                message.client.queue.delete(message.guild.id);
                return sendError(`The player has stopped and the queue has been cleared.: ${error}`, message.channel);
            }
            let xd = new MessageEmbed()
                .setDescription("⏸ Paused the music for you!")
                .setColor("YELLOW")
                .setTitle("Music has been paused!")
                .setFooter("Bot Made By OblivionGhoul#5842", "https://i.imgur.com/Ivtf7GP.png")
            return message.channel.send(xd);
        }
        return sendError("There is nothing playing in this server.", message.channel);
    },
}