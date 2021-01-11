const axios = require('axios');
const Discord = require('discord.js')

module.exports = {
    commands: ['valstats', 'valorantstats', 'valorant-stats'],
    callback: (message, arguments, text, client) => {
        axios.get('https://api.henrikdev.xyz/valorant/v1/profile/kay/VuVu')
            .then(function (response) {
                const embed = new Discord.MessageEmbed()
                .setTitle(`${response.data.user}'s Valorant Profile`)
                .addField('Rank', response.data.stats.rank, true)
                .addField('Playtime', response.data.stats.playtime.playtimepatched, true)
                .addField('Matches Played', response.data.stats.matches, true)
                .addField('Kills', response.data.stats.kills, true)
                .addField('Deaths', response.data.stats.deaths, true)
                .addField('Assists', response.data.stats.assists, true)
                .addField('K/D', response.data.stats.kdratio, true)
                .addField('Headshots', response.data.stats.headshots, true)
                .addField('Headshot Percentage', response.data.stats.headshotpercentage, true)
                .addField('Wins', response.data.stats.wins, true)
                .addField('Win Percentage', response.data.stats.winpercentage, true)
                .addField('First Bloods', response.data.stats.firstbloods, true)
                .addField('Clutch Rounds', response.data.stats.clutches, true)
                .addField('Flawless Rounds', response.data.stats.flawless, true)
                .setThumbnail('https://i.imgur.com/4GPTAgh.jpg')
                .setColor('RANDOM')
                .setFooter("Bot Made By OblivionGhoul#5842", "https://i.imgur.com/Ivtf7GP.png")
                message.channel.send(embed)
            })
            .catch(function (error) {
                console.log(error);
            })
    },
}