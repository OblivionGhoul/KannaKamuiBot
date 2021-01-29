
const { Util, MessageEmbed } = require("discord.js")
const ytdl = require("ytdl-core")
const sendError = require("@util/musicerror")
const ytpl = require('ytpl')

module.exports = {
    commands: ['playlist'],
    callback: async (message, args) => {
        const channel = message.member.voice.channel;
        if (!channel) return sendError("You need to be in a voice channel to play music!", message.channel);
        const url = args[0] ? args[0].replace(/<(.+)>/g, "$1") : "";
        var searchString = args.join(" ");
        const permissions = channel.permissionsFor(message.client.user);
        if (!permissions.has("CONNECT")) return sendError("I cannot connect to your voice channel, make sure I have the proper permissions!", message.channel);
        if (!permissions.has("SPEAK")) return sendError("I cannot speak in this voice channel, make sure I have the proper permissions!", message.channel);

        if (!searchString || !url) return sendError(`Please give the YouTube playlist name or link.`, message.channel);
        if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
            try {
                const playlist = await ytpl(url.split("list=")[1]);
                if (!playlist) return sendError("Playlist not found", message.channel)
                const videos = await playlist.items;
                for (const video of videos) {
                    await handleVideo(video, message, channel, true);
                }
                return message.channel.send({
                    embed: {
                        color: "GREEN",
                        description: `✅  **|**  Playlist: **\`${videos[0].title}\`** has been added to the queue`
                    }
                })
            } catch (error) {
                console.error(error);
                return sendError("Playlist not found :(", message.channel).catch(console.error);
            }
        } else {
            try {
                var searched = await yts.search(searchString)

                if (searched.playlists.length === 0) return sendError("Looks like i was unable to find the playlist on YouTube", message.channel)
                var songInfo = searched.playlists[0];
                let listurl = songInfo.listId;
                const playlist = await ytpl(listurl)
                const videos = await playlist.items;
                for (const video of videos) {
                    await handleVideo(video, message, channel, true); 
                }
                let thing = new MessageEmbed()
                    .setAuthor("Playlist has been added to queue")
                    .setThumbnail(songInfo.thumbnail)
                    .setColor("GREEN")
                    .setDescription(`✅  **|**  Playlist: **\`${songInfo.title}\`** has been added \`${songInfo.videoCount}\` video to the queue`)
                return message.channel.send(thing)
            } catch (error) {
                return sendError("An unexpected error has occurred", message.channel).catch(console.error);
            }
        }

        async function handleVideo(video, message, channel, playlist = false) {
            const serverQueue = message.client.queue.get(message.guild.id);
            const song = {
                id: video.id,
                title: Util.escapeMarkdown(video.title),
                views: video.views ? video.views : "-",
                ago: video.ago ? video.ago : "-",
                duration: video.duration,
                url: `https://www.youtube.com/watch?v=${video.id}`,
                img: video.thumbnail,
                req: message.author
            };
            if (!serverQueue) {
                const queueConstruct = {
                    textChannel: message.channel,
                    voiceChannel: channel,
                    connection: null,
                    songs: [],
                    volume: 80,
                    playing: true,
                    loop: false
                };
                message.client.queue.set(message.guild.id, queueConstruct);
                queueConstruct.songs.push(song);

                try {
                    var connection = await channel.join();
                    queueConstruct.connection = connection;
                    play(message.guild, queueConstruct.songs[0]);
                } catch (error) {
                    console.error(`I could not join the voice channel: ${error}`);
                    message.client.queue.delete(message.guild.id);
                    return sendError(`I could not join the voice channel: ${error}`, message.channel);

                }
            } else {
                serverQueue.songs.push(song);
                if (playlist) return;
                let thing = new MessageEmbed()
                    .setAuthor("Song has been added to queue")
                    .setThumbnail(song.img)
                    .setColor("YELLOW")
                    .addField("Name", song.title, true)
                    .addField("Duration", song.duration, true)
                    .addField("Requested by", song.req.tag, true)
                    .setFooter(`Views: ${song.views} | ${song.ago}`)
                return message.channel.send(thing);
            }
            return;
        }

        async function play(guild, song) {
            const serverQueue = message.client.queue.get(message.guild.id);
            if (!song) {
                message.client.queue.delete(message.guild.id);
                return;
            }
            const dispatcher = serverQueue.connection
                .play(ytdl(song.url, { quality: 'highestaudio', highWaterMark: 1 << 25, type: "opus" }))
                .on("finish", () => {
                    const shiffed = serverQueue.songs.shift();
                    if (serverQueue.loop === true) {
                        serverQueue.songs.push(shiffed);
                    };
                    play(guild, serverQueue.songs[0]);
                })

            dispatcher.setVolume(serverQueue.volume / 100);
            let thing = new MessageEmbed()
                .setAuthor("Started Playing Music!")
                .setThumbnail(song.img)
                .setColor("BLUE")
                .addField("Name", song.title, true)
                .addField("Duration", song.duration, true)
                .addField("Requested by", song.req.tag, true)
                .setFooter(`Views: ${song.views} | ${song.ago}`)
            serverQueue.textChannel.send(thing);
        }
    },
}