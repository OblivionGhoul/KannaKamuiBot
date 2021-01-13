const Discord = require("discord.js");
const axios = require('axios');

module.exports = {
    commands: 'anime',
    callback: (message, args, client, user) => {
        if (!args.length) {
            return message.channel.send("Please Specify An Anime.")
        }
        const url = `https://kitsu.io/api/edge/anime?filter[text]=${args.join(" ")}`;
        const config = {
            headers: {
                'Content-Type': "application/vnd.api+json",
                'Accept': "application/vnd.api+json"
            }
        }

        message.channel.send("Fetching The Info").then(msg => {
            axios.get(url, config).then(res => {
                try {
                    const data = res.data.data[0];
                    let embed = new Discord.MessageEmbed()
                        .setTitle(data.attributes.titles.en)
                        .setColor("RED")
                        .setDescription(data.attributes.synopsis)
                        .setThumbnail(data.attributes.posterImage.original)
                        .addField("Ratings", data.attributes.averageRating)
                        .addField("TOTAL EPISODES", data.attributes.episodeCount)
                        .setImage(data.attributes.coverImage.large)
                        .setFooter("Bot Made By OblivionGhoul#5842", "https://i.imgur.com/Ivtf7GP.png")
                    message.channel.send(embed)
                    msg.delete();

                } catch (err) {
                    msg.delete();
                    return message.channel.send("Unable To Find Anime.");
                }
            }
            )
        })
    },
}