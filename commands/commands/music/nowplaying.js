const { MessageEmbed } = require("discord.js");
const sendError = require("@util/musicerror")

module.exports = {
    commands: ['np', 'now playing'],
    callback: async (message, args) => {
        const serverQueue = message.client.queue.get(message.guild.id);
        if (!serverQueue) return sendError("There is nothing playing in this server.", message.channel);
        let song = serverQueue.songs[0]
        let thing = new MessageEmbed()
            .setAuthor("Now Playing", song.req.displayAvatarURL({ dynamic: true }))
            .setThumbnail(song.img)
            .setColor("BLUE")
            .addField("Name", song.title, true)
            .addField("Duration", song.duration, true)
            .addField("Requested by", song.req.tag, true)
            .setFooter(`Views: ${song.views} | ${song.ago}`)
        return message.channel.send(thing)
    },
}