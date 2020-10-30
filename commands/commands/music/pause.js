const { MessageEmbed } = require("discord.js");
const sendError = require("@util/musicerror")

module.exports = {
    commands: ['pause'],
    callback: async (message, args) => {
        const serverQueue = message.client.queue.get(message.guild.id);
        if (serverQueue && serverQueue.playing) {
            serverQueue.playing = false;
            serverQueue.connection.dispatcher.pause();
            let xd = new MessageEmbed()
                .setDescription("⏸ Paused the music for you!")
                .setColor("YELLOW")
                .setTitle("Music has been paused!")
                .setFooter("Bot made by OblivionGhoul#5842")
            return message.channel.send(xd);
        }
        return sendError("There is nothing playing in this server.", message.channel);
    },
}