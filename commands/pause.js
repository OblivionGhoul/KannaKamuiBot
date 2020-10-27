const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (serverQueue && serverQueue.playing) {
        serverQueue.playing = false;
        serverQueue.connection.dispatcher.pause();
        let xd = new MessageEmbed()
            .setDescription("⏸ Paused the music for you!")
            .setColor("YELLOW")
            .setTitle("Music has been paused!")
        return message.channel.send(xd);
    }
    return message.channel.send("There is nothing playing in this server.");
}

module.exports.config = {
    name: "pause",
    description: "pauses music",
    aliases: ['']
}