const axios = require('axios')

module.exports = {
    commands: ['docs', 'discord.js', 'discordjs'],
    callback: async (message, args) => {
        if (!args[0]) return message.channnel.send('Please provide a search query after the command.')
        const uri = `https://djsdocs.sorta.moe/v2/embed?src=stable&q=${encodeURIComponent(
            args
        )}`

        axios
            .get(uri)
            .then((embed) => {
                const { data } = embed

                if (data && !data.error) {
                    message.channel.send({ embed: data })
                } else {
                    message.reply('Could not find that documentation')
                }
            })
            .catch((err) => {
                console.error(err)
            })
    },
}