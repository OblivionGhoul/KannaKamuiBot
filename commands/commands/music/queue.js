const { MessageEmbed } = require("discord.js");
const sendError = require("@util/musicerror")

module.exports = {
    commands: ['queue', 'q'],
    callback: async (message, args, client) => {
        const serverQueue = message.client.queue.get(message.guild.id);
        if (!serverQueue) return sendError("There is nothing playing in this server.", message.channel);

        let queue = new MessageEmbed()
            .setTitle("Server Songs Queue")
            .setColor("BLUE")
            .addField("Now Playing", serverQueue.songs[0].title, true)
            .addField("Text Channel", serverQueue.textChannel, true)
            .addField("Voice Channel", serverQueue.voiceChannel, true)
            .setFooter("Bot made by OblivionGhoul#5842")
            .setDescription(serverQueue.songs.map((song) => {
                if (song === serverQueue.songs[0]) return
                return `**-** ${song.title}`
            }).join("\n"))
        if (serverQueue.songs.length === 1) queue.setDescription(`There are no songs in the queue.`)
        message.channel.send(queue)
    },
}