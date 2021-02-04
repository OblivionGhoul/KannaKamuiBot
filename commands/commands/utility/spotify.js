const Discord = require('discord.js')
const convert = require('parse-ms')

module.exports = {
    commands: ['spotify'],
    callback: async (message) => {
        let user;
        if (message.mentions.users.first()) {
            user = message.mentions.users.first();
        } else {
            user = message.author;
        }

        let status;
        if (user.presence.activities.length === 1) status = user.presence.activities[0];
        else if (user.presence.activities.length > 1) status = user.presence.activities[1];

        if (user.presence.activities.length === 0 || status.name !== "Spotify" && status.type !== "LISTENING") {
            const nostatus = new Discord.MessageEmbed()
                .setAuthor(user.tag, user.displayAvatarURL({ dynamic: true }))
                .setColor('RED')
                .setDescription('This user is not listening to Spotify!')
                
            return message.channel.send(nostatus);
        }

        if (status !== null && status.type === "LISTENING" && status.name === "Spotify" && status.assets !== null) {
            let image = `https://i.scdn.co/image/${status.assets.largeImage.slice(8)}`,
                url = `https:/open.spotify.com/track/${status.syncID}`,
                name = status.details,
                artist = status.state,
                album = status.assets.largeText,
                timeStart = status.timestamps.start,
                timeEnd = status.timestamps.end,
                timeConvert = convert(timeEnd - timeStart);

            let minutes = timeConvert.minutes < 10 ? `0${timeConvert.minutes}` : timeConvert.minutes;
            let seconds = timeConvert.seconds < 10 ? `0${timeConvert.seconds}` : timeConvert.seconds;
            let time = `${minutes}:${seconds}`;

            const information = new Discord.MessageEmbed()
                .setAuthor(user.tag, user.displayAvatarURL({ dynamic: true }))
                .setTitle("Spotify Status")
                .setColor('RANDOM')
                .setThumbnail(image)
                .addField("Name:", name, true)
                .addField("Album:", album, true)
                .addField("Artist:", artist, true)
                .addField("Duration:", time, false)
                .addField("Listening Now!", `[\`${artist} - ${name}\`](${url})`, false)
                .setFooter("Bot Made By OblivionGhoul#5842", "https://i.imgur.com/Ivtf7GP.png")
            return message.channel.send(information)
        }
    }
}