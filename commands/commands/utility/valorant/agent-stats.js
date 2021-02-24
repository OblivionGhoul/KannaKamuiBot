const axios = require('axios');
const Discord = require('discord.js');

module.exports = {
    commands: ['agentstats', 'valagentstats'],
    callback: (message, args) => {
        const profile = args[0]
        const tag = args[1]
        if (!args[0] || !args[1]) {
            message.channel.send('Please specify your riot id correctly without a hashtag or space. (usage: -valstats [name] [tag])')
        }
        axios.get(`https://api.henrikdev.xyz/valorant/v2/profile/${profile}/${tag}`)
            .then(function (response) {
                const embed = new Discord.MessageEmbed()
                .setTitle(`${response.data.user}'s Agent Stats`)
                .addField(response.data.agents[0].agent, `
                **Playtime**: ${response.data.agents[0].playtime.playtimepatched}
                **Matches**: ${response.data.agents[0].matches}
                **Kills**: ${response.data.agents[0].kills}
                **Deaths**: ${response.data.agents[0].deaths}
                **Assists**: ${response.data.agents[0].assists}
                **K/D**: ${response.data.agents[0].kdratio}
                **Headshots**: ${response.data.agents[0].headshots}
                **Headshot Percentage**: ${response.data.agents[0].headshotpercentage}
                **Wins**: ${response.data.agents[0].wins}
                **Win Percentage**: ${response.data.agents[0].winpercentage}
                **First Bloods**: ${response.data.agents[0].firstbloods}
                **Aces**: ${response.data.agents[0].aces}
                **Clutches**: ${response.data.agents[0].clutches}
                **Flawless Rounds**: ${response.data.agents[0].flawless}
                `, true)
                .addField(response.data.agents[1].agent, `
                **Playtime**: ${response.data.agents[1].playtime.playtimepatched}
                **Matches**: ${response.data.agents[1].matches}
                **Kills**: ${response.data.agents[1].kills}
                **Deaths**: ${response.data.agents[1].deaths}
                **Assists**: ${response.data.agents[1].assists}
                **K/D**: ${response.data.agents[1].kdratio}
                **Headshots**: ${response.data.agents[1].headshots}
                **Headshot Percentage**: ${response.data.agents[1].headshotpercentage}
                **Wins**: ${response.data.agents[1].wins}
                **Win Percentage**: ${response.data.agents[1].winpercentage}
                **First Bloods**: ${response.data.agents[1].firstbloods}
                **Aces**: ${response.data.agents[1].aces}
                **Clutches**: ${response.data.agents[1].clutches}
                **Flawless Rounds**: ${response.data.agents[1].flawless}
                `, true)
                .addField(response.data.agents[2].agent, `
                **Playtime**: ${response.data.agents[2].playtime.playtimepatched}
                **Matches**: ${response.data.agents[2].matches}
                **Kills**: ${response.data.agents[2].kills}
                **Deaths**: ${response.data.agents[2].deaths}
                **Assists**: ${response.data.agents[2].assists}
                **K/D**: ${response.data.agents[2].kdratio}
                **Headshots**: ${response.data.agents[2].headshots}
                **Headshot Percentage**: ${response.data.agents[2].headshotpercentage}
                **Wins**: ${response.data.agents[2].wins}
                **Win Percentage**: ${response.data.agents[2].winpercentage}
                **First Bloods**: ${response.data.agents[2].firstbloods}
                **Aces**: ${response.data.agents[2].aces}
                **Clutches**: ${response.data.agents[2].clutches}
                **Flawless Rounds**: ${response.data.agents[2].flawless}
                `, true)
                .addField(response.data.agents[3].agent, `
                **Playtime**: ${response.data.agents[3].playtime.playtimepatched}
                **Matches**: ${response.data.agents[3].matches}
                **Kills**: ${response.data.agents[3].kills}
                **Deaths**: ${response.data.agents[3].deaths}
                **Assists**: ${response.data.agents[3].assists}
                **K/D**: ${response.data.agents[3].kdratio}
                **Headshots**: ${response.data.agents[3].headshots}
                **Headshot Percentage**: ${response.data.agents[3].headshotpercentage}
                **Wins**: ${response.data.agents[3].wins}
                **Win Percentage**: ${response.data.agents[3].winpercentage}
                **First Bloods**: ${response.data.agents[3].firstbloods}
                **Aces**: ${response.data.agents[3].aces}
                **Clutches**: ${response.data.agents[3].clutches}
                **Flawless Rounds**: ${response.data.agents[3].flawless}
                `, true)
                .addField(response.data.agents[4].agent, `
                **Playtime**: ${response.data.agents[4].playtime.playtimepatched}
                **Matches**: ${response.data.agents[4].matches}
                **Kills**: ${response.data.agents[4].kills}
                **Deaths**: ${response.data.agents[4].deaths}
                **Assists**: ${response.data.agents[4].assists}
                **K/D**: ${response.data.agents[4].kdratio}
                **Headshots**: ${response.data.agents[4].headshots}
                **Headshot Percentage**: ${response.data.agents[4].headshotpercentage}
                **Wins**: ${response.data.agents[4].wins}
                **Win Percentage**: ${response.data.agents[4].winpercentage}
                **First Bloods**: ${response.data.agents[4].firstbloods}
                **Aces**: ${response.data.agents[4].aces}
                **Clutches**: ${response.data.agents[4].clutches}
                **Flawless Rounds**: ${response.data.agents[4].flawless}
                `, true)
                .addField(response.data.agents[5].agent, `
                **Playtime**: ${response.data.agents[5].playtime.playtimepatched}
                **Matches**: ${response.data.agents[5].matches}
                **Kills**: ${response.data.agents[5].kills}
                **Deaths**: ${response.data.agents[5].deaths}
                **Assists**: ${response.data.agents[5].assists}
                **K/D**: ${response.data.agents[5].kdratio}
                **Headshots**: ${response.data.agents[5].headshots}
                **Headshot Percentage**: ${response.data.agents[5].headshotpercentage}
                **Wins**: ${response.data.agents[5].wins}
                **Win Percentage**: ${response.data.agents[5].winpercentage}
                **First Bloods**: ${response.data.agents[5].firstbloods}
                **Aces**: ${response.data.agents[5].aces}
                **Clutches**: ${response.data.agents[5].clutches}
                **Flawless Rounds**: ${response.data.agents[5].flawless}
                `, true)
                .setThumbnail(response.data.stats.playercard)
                .setColor('RANDOM')
                .setFooter("Bot Made By OblivionGhoul#5842", "https://i.imgur.com/Ivtf7GP.png")
                message.channel.send(embed)
            })
            .catch(function (error) {
                message.channel.send(error.response.data.message)
                message.channel.send('Please specify your riot id correctly without a hashtag or space. (usage: -valstats [name] [tag])')
            })
    },
}