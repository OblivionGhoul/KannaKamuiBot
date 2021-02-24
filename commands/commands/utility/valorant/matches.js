const axios = require('axios');
const Discord = require('discord.js');

module.exports = {
    commands: ['valmatches', 'valorantmatches', 'valorant-matches'],
    callback: (message, args) => {
        const profile = args[0]
        const tag = args[1]
        let filter = args[2]
        if (!args[0] || !args[1]) {
            message.channel.send('Please specify your riot id correctly without a hashtag or space. (usage: -valstats [name] [tag] [category])')
            message.channel.send('Catgory List: Competitive, Unrated, Deathmatch, Spikerush, Escalation')
        }
        axios.get(`https://api.henrikdev.xyz/valorant/v1/matches/${profile}/${tag}?filter=${filter}`)
            .then(function (response) {
                let color1 = 'RED'
                if (response.data.matches[0].metadata.playerhaswon === true) color1 = 'GREEN'
                let color2 = 'RED'
                if (response.data.matches[1].metadata.playerhaswon === true) color2 = 'GREEN'
                let color3 = 'RED'
                if (response.data.matches[2].metadata.playerhaswon === true) color3 = 'GREEN'
                const embed1 = new Discord.MessageEmbed()
                .setTitle(`${response.data.user}'s Last Valorant Match`)
                .addField('Gamemode', response.data.matches[0].metadata.modename, true)
                .addField('Win', response.data.matches[0].metadata.playerhaswon, true)
                .addField('Timestamp', response.data.matches[0].metadata.timestamp)
                .addField('Map', response.data.matches[0].metadata.map, true)
                .addField('Agent Played', response.data.matches[0].metadata.agentplayed, true)

                .addField('KDA', response.data.matches[0].game.kda.kda, true)
                .addField('Rounds Won', response.data.matches[0].game.roundswon, true)
                .addField('Rounds Lost', response.data.matches[0].game.roundslost, true)
                .addField('Rounds Played', response.data.matches[0].game.roundsplayed, true)
                .addField('Econ Rating', response.data.matches[0].game.econrating, true)
                .addField('Playtime', response.data.matches[0].game.playtime.patched, true)

                .setThumbnail('https://i.imgur.com/4GPTAgh.jpg')
                .setColor(color1)
                .setFooter("Bot Made By OblivionGhoul#5842", "https://i.imgur.com/Ivtf7GP.png")
                message.channel.send(embed1)

                const embed2 = new Discord.MessageEmbed()
                .setTitle(`${response.data.user}'s 2nd Last Valorant Match`)
                .addField('Gamemode', response.data.matches[1].metadata.modename, true)
                .addField('Win', response.data.matches[1].metadata.playerhaswon, true)
                .addField('Timestamp', response.data.matches[1].metadata.timestamp)
                .addField('Map', response.data.matches[1].metadata.map, true)
                .addField('Agent Played', response.data.matches[1].metadata.agentplayed, true)

                .addField('KDA', response.data.matches[1].game.kda.kda, true)
                .addField('Rounds Won', response.data.matches[1].game.roundswon, true)
                .addField('Rounds Lost', response.data.matches[1].game.roundslost, true)
                .addField('Rounds Played', response.data.matches[1].game.roundsplayed, true)
                .addField('Econ Rating', response.data.matches[1].game.econrating, true)
                .addField('Playtime', response.data.matches[1].game.playtime.patched, true)

                .setThumbnail('https://i.imgur.com/4GPTAgh.jpg')
                .setColor(color2)
                .setFooter("Bot Made By OblivionGhoul#5842", "https://i.imgur.com/Ivtf7GP.png")
                message.channel.send(embed2)

                const embed3 = new Discord.MessageEmbed()
                .setTitle(`${response.data.user}'s 3rd Last Valorant Match`)
                .addField('Gamemode', response.data.matches[2].metadata.modename, true)
                .addField('Win', response.data.matches[2].metadata.playerhaswon, true)
                .addField('Timestamp', response.data.matches[2].metadata.timestamp)
                .addField('Map', response.data.matches[2].metadata.map, true)
                .addField('Agent Played', response.data.matches[2].metadata.agentplayed, true)

                .addField('KDA', response.data.matches[2].game.kda.kda, true)
                .addField('Rounds Won', response.data.matches[2].game.roundswon, true)
                .addField('Rounds Lost', response.data.matches[2].game.roundslost, true)
                .addField('Rounds Played', response.data.matches[2].game.roundsplayed, true)
                .addField('Econ Rating', response.data.matches[2].game.econrating, true)
                .addField('Playtime', response.data.matches[2].game.playtime.patched, true)

                .setThumbnail('https://i.imgur.com/4GPTAgh.jpg')
                .setColor(color3)
                .setFooter("Bot Made By OblivionGhoul#5842", "https://i.imgur.com/Ivtf7GP.png")
                message.channel.send(embed3)
            })
            .catch(function (error) {
                message.channel.send(error.response.data.message)
                message.channel.send('Please specify your riot id correctly without a hashtag or space. (usage: -valstats [name] [tag] [category])')
                message.channel.send('Catgory List: Competitive, Unrated, Deathmatch, Spikerush, Escalation')
            })
    },
}