const valorant = require('valorant-fetch')
const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: ['valagent', 'agent', 'val-agent', 'valorant-agent', 'valorantagent'],
    callback: async (message, args) => {
        let agent = args[0]
        agent = agent.toLowerCase()
        if (agent === 'breach'
            || agent === 'brimstone'
            || agent === 'cypher'
            || agent === 'jett'
            || agent === 'killjoy'
            || agent === 'omen'
            || agent === 'phoenix'
            || agent === 'raze'
            || agent === 'reyna'
            || agent === 'sage'
            || agent === 'sova'
            || agent === 'skye'
            || agent === 'viper'
            || agent === 'yoru') {
            let data = await valorant.getAgent(agent)

            const embed = new MessageEmbed()
                .setAuthor(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
                .setTitle(`${data.name} Agent Info`)
                .setThumbnail(data.photos.icon)
                .setDescription(`
                **Type:** ${data.tags}\n
                **Story:** ${data.biography.story}\n
                **About:** ${data.biography.agent_about}\n
                **Origin:** ${data.biography.region}\n 
                `)
                .addField('Abilities', `\`Q\`: ${data.stats.Q}\n\`E\`: ${data.stats.E}\n\`C\`: ${data.stats.C} - **Signature**\n\`X\`: ${data.stats.X} - **Ultimate**`)

            message.channel.send(embed)
        } else {
            return message.channel.send('Please enter a valid agent.')
        }

    },
} 