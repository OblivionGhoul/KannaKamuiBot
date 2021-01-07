const { MessageEmbed } = require('discord.js')
const animeQuotes = require('animequotes')
const KITSU = require('node-kitsu')

module.exports = {
    commands: ['animequote', 'anime-quote'],
    callback: async (message) => {
        let quote;
        
        quote = animeQuotes.randomQuote();

        if (quote.length > 1) {
            quote = quote[Math.floor(Math.random() * (quote.length - 1))]
        }

        message.channel.send('Generating quote...')
        KITSU.searchAnime(quote.anime, 0).then(async results => {
            const embed = new MessageEmbed()
                .setColor("RANDOM")
                .addField(`Quoted from ${quote.anime}`, `**"${quote.quote}"**\n\n-*${quote.name}*`)
                .setFooter("Bot Made By OblivionGhoul#5842", "https://i.imgur.com/Ivtf7GP.png")

            if (!results) {
            } else if (!results[0].attributes) {
            } else if (!results[0].attributes.coverImage) {
            } else if (!results[0].attributes.coverImage.original) {
            } else embed.setImage(results[0].attributes.coverImage.original)

            const sent = await message.channel.send(embed)
            let reactions = ['👍', '👎'];
            for (let i = 0; i < reactions.length; i++) await sent.react(reactions[i]);
        })
    }
}