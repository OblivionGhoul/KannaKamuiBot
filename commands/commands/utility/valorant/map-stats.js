const axios = require('axios');
const Discord = require('discord.js');

module.exports = {
    commands: ['mapstats', 'valmapstats'],
    callback: (message, args) => {
        const profile = args[0]
        const tag = args[1]
        if (!args[0] || !args[1]) {
            message.channel.send('Please specify your riot id correctly without a hashtag or space. (usage: -valmapstats [name] [tag])')
        }
        axios.get(`https://api.henrikdev.xyz/valorant/v2/profile/${profile}/${tag}`)
            .then(function (response) {
                const embed = new Discord.MessageEmbed()
                .setTitle(`${response.data.user}'s Map Stats`)
                .addField(response.data.maps[0].map, `
                **Playtime**: ${response.data.maps[0].playtime.playtimepatched}
                **Matches**: ${response.data.maps[0].matches}
                **Kills**: ${response.data.maps[0].kills}
                **Deaths**: ${response.data.maps[0].deaths}
                **Assists**: ${response.data.maps[0].assists}
                **K/D**: ${response.data.maps[0].kdratio}
                **Headshots**: ${response.data.maps[0].headshots}
                **Headshot Percentage**: ${response.data.maps[0].headshotpercentage}
                **Wins**: ${response.data.maps[0].wins}
                **Win Percentage**: ${response.data.maps[0].winpercentage}
                **First Bloods**: ${response.data.maps[0].firstbloods}
                **Aces**: ${response.data.maps[0].aces}
                **Clutches**: ${response.data.maps[0].clutches}
                **Flawless Rounds**: ${response.data.maps[0].flawless}
                `, true)
                .addField(response.data.maps[1].map, `
                **Playtime**: ${response.data.maps[1].playtime.playtimepatched}
                **Matches**: ${response.data.maps[1].matches}
                **Kills**: ${response.data.maps[1].kills}
                **Deaths**: ${response.data.maps[1].deaths}
                **Assists**: ${response.data.maps[1].assists}
                **K/D**: ${response.data.maps[1].kdratio}
                **Headshots**: ${response.data.maps[1].headshots}
                **Headshot Percentage**: ${response.data.maps[1].headshotpercentage}
                **Wins**: ${response.data.maps[1].wins}
                **Win Percentage**: ${response.data.maps[1].winpercentage}
                **First Bloods**: ${response.data.maps[1].firstbloods}
                **Aces**: ${response.data.maps[1].aces}
                **Clutches**: ${response.data.maps[1].clutches}
                **Flawless Rounds**: ${response.data.maps[1].flawless}
                `, true)
                .addField(response.data.maps[3].map, `
                **Playtime**: ${response.data.maps[3].playtime.playtimepatched}
                **Matches**: ${response.data.maps[3].matches}
                **Kills**: ${response.data.maps[3].kills}
                **Deaths**: ${response.data.maps[3].deaths}
                **Assists**: ${response.data.maps[3].assists}
                **K/D**: ${response.data.maps[3].kdratio}
                **Headshots**: ${response.data.maps[3].headshots}
                **Headshot Percentage**: ${response.data.maps[3].headshotpercentage}
                **Wins**: ${response.data.maps[3].wins}
                **Win Percentage**: ${response.data.maps[3].winpercentage}
                **First Bloods**: ${response.data.maps[3].firstbloods}
                **Aces**: ${response.data.maps[3].aces}
                **Clutches**: ${response.data.maps[3].clutches}
                **Flawless Rounds**: ${response.data.maps[3].flawless}
                `, true)
                .addField(response.data.maps[4].map, `
                **Playtime**: ${response.data.maps[4].playtime.playtimepatched}
                **Matches**: ${response.data.maps[4].matches}
                **Kills**: ${response.data.maps[4].kills}
                **Deaths**: ${response.data.maps[4].deaths}
                **Assists**: ${response.data.maps[4].assists}
                **K/D**: ${response.data.maps[4].kdratio}
                **Headshots**: ${response.data.maps[4].headshots}
                **Headshot Percentage**: ${response.data.maps[4].headshotpercentage}
                **Wins**: ${response.data.maps[4].wins}
                **Win Percentage**: ${response.data.maps[4].winpercentage}
                **First Bloods**: ${response.data.maps[4].firstbloods}
                **Aces**: ${response.data.maps[4].aces}
                **Clutches**: ${response.data.maps[4].clutches}
                **Flawless Rounds**: ${response.data.maps[4].flawless}
                `, true)
                .setThumbnail(response.data.stats.playercard)
                .setColor('RANDOM')
                .setFooter("Bot Made By OblivionGhoul#5842", "https://i.imgur.com/Ivtf7GP.png")
                message.channel.send(embed)
            })
            .catch(function (error) {
                message.channel.send(error.response.data.message)
                message.channel.send('Please specify your riot id correctly without a hashtag or space. (usage: -valmapstats [name] [tag])')
            })
    },
}