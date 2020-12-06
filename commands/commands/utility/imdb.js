const discord = require("discord.js");
const imdb = require("imdb-api");

module.exports = {
    commands: ['imdb'],
    callback: async (message, args) => {
        if (!args.length) {
            return message.channel.send("Please give the name of movie or series")
        }
        const imob = new imdb.Client({ apiKey: "5e36f0db" })
        let movie = await imob.get({ 'name': args.join(" ") })
        let embed = new discord.MessageEmbed()
            .setTitle(movie.title)
            .setColor("#ff2050")
            .setThumbnail(movie.poster)
            .setDescription(movie.plot)
            .setFooter(`Ratings: ${movie.rating}`)
            .addField("Country", movie.country, true)
            .addField("Languages", movie.languages, true)
            .addField("Type", movie.type, true)
            .setFooter("Bot Made By OblivionGhoul#5842", "https://i.imgur.com/Ivtf7GP.png")
        message.channel.send(embed)
    },
}