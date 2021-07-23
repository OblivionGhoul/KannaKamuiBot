const axios = require('axios');
const Discord = require('discord.js');

module.exports = {
    commands: ['valstats', 'valorantstats', 'valorant-stats'],
    callback: (message, args) => {
        return message.channel.send('The API is currently deprecated, please wait for a fix.')
        const profile = args[0]
        const tag = args[1]
        if (!args[0] || !args[1]) {
            message.channel.send('Please specify your riot id correctly without a hashtag or space. (usage: -valstats [name] [tag])')
        }
        axios.get(`https://api.henrikdev.xyz/valorant/v2/profile/${profile}/${tag}`)
            .then(function (response) {
                let kd = response.data.stats.kills / response.data.stats.deaths
                kd = kd.toFixed(2)

                let hs = (response.data.stats.headshots / response.data.stats.kills) 
                hs = hs.toFixed(2) * 100

                const embed = new Discord.MessageEmbed()
                .setTitle(`${response.data.user}'s Valorant Profile`)
                .addField('Rank', response.data.stats.rank, true)
                .addField('Playtime', response.data.stats.playtime.playtimepatched, true)
                .addField('Matches Played', response.data.stats.matches, true)
                .addField('Kills', response.data.stats.kills, true)
                .addField('Deaths', response.data.stats.deaths, true)
                .addField('Assists', response.data.stats.assists, true)
                .addField('K/D', kd, true)
                .addField('Headshots', response.data.stats.headshots, true)
                .addField('Headshot Percentage', hs, true)
                .addField('Wins', response.data.stats.wins, true)
                .addField('Win Percentage', response.data.stats.winpercentage, true)
                .addField('First Bloods', response.data.stats.firstbloods, true)
                .addField('Clutch Rounds', response.data.stats.clutches, true)
                .addField('Flawless Rounds', response.data.stats.flawless, true)
                .addField('# Agents Unlocked', (response.data.agents).length, true)
                .setThumbnail(response.data.stats.playercard)
                .setColor('RANDOM')
                
                message.channel.send(embed)
            })
            .catch(function (error) {
                message.channel.send(error.response.data.message)
                message.channel.send('Please specify your riot id correctly without a hashtag or space. (usage: -valstats [name] [tag])')
            })
    },
}