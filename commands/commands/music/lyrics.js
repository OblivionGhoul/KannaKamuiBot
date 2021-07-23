const sendError = require("@util/musicerror")
const { MessageEmbed } = require("discord.js");
const lyricsFinder = require("lyrics-finder");

module.exports = {
    commands: ['lyrics'],
    callback: async (message, args) => {
        const queue = message.client.queue.get(message.guild.id);
        if (!queue) return sendError("There is nothing playing.", message.channel).catch(console.error);

        let lyrics = null;

        try {
            lyrics = await lyricsFinder(queue.songs[0].title, "");
            if (!lyrics) lyrics = `No lyrics found for ${queue.songs[0].title}.`;
        } catch (error) {
            lyrics = `No lyrics found for ${queue.songs[0].title}.`;
        }

        let lyricsEmbed = new MessageEmbed()
            .setAuthor(`${queue.songs[0].title} — Lyrics`)
            .setThumbnail(queue.songs[0].img)
            .setColor("YELLOW")
            .setDescription(lyrics)

        if (lyricsEmbed.description.length >= 2048)
            lyricsEmbed.description = `${lyricsEmbed.description.substr(0, 2045)}...`;
        return message.channel.send(lyricsEmbed).catch(console.error);
    },
}