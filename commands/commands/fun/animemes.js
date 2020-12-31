const { MessageEmbed } = require('discord.js');
const somethingRandom = require('some-random-cat').Random

module.exports = {
    commands: ['animemes', 'animeme', 'animememe', 'anime-meme'],
    callback: async (message, args, client) => {
        const subreddits = ["Animemes"]
        let randomSubReddit = subreddits[Math.floor(Math.random() * subreddits.length)]
        somethingRandom.getMeme(randomSubReddit).then(res => {
            const embed = new MessageEmbed()
                .setTitle(res.title)
                .setURL(`https://www.reddit.com/r/${randomSubReddit}`)
                .setImage(res.img)
                .setFooter(`👍 ${res.upvotes} | 👎 ${res.downvotes} | 💬 ${res.comments}`)
                .setAuthor(`From ${res.author}`)
                .setColor('RANDOM')
            message.channel.send(embed)
        }).catch(e => message.channel.send('API Error. Please try again.'))
    }
}