const axios = require('axios');
const Discord = require('discord.js');

module.exports = {
    commands: ['valleaderboard', 'leaderboard'],
    callback: (message, args) => {
        let region = args[0]
        if (!region) {
            region = 'NA'
            message.channel.send('Because you did not set a region, it will be automatically set to NA. (usage: -valleaderboard [region])')
            message.channel.send('Region List: NA, EU, AP, KR')
        }
        axios.get(`https://api.henrikdev.xyz/valorant/v1/leaderboard/${region}`)
            .then(function (response) {
                const embed = new Discord.MessageEmbed()
                .setTitle(`${region} Valorant Leaderboard`)
                .addField(`1. ${response.data.data[0].gameName}`, `Number of Wins: ${response.data.data[0].numberOfWins}`, true)
                .addField(`2. ${response.data.data[1].gameName}`, `Number of Wins: ${response.data.data[1].numberOfWins}`, true)
                .addField(`3. ${response.data.data[2].gameName}`, `Number of Wins: ${response.data.data[2].numberOfWins}`, true)
                .addField(`4. ${response.data.data[3].gameName}`, `Number of Wins: ${response.data.data[3].numberOfWins}`, true)
                .addField(`5. ${response.data.data[4].gameName}`, `Number of Wins: ${response.data.data[4].numberOfWins}`, true)
                .addField(`6. ${response.data.data[5].gameName}`, `Number of Wins: ${response.data.data[5].numberOfWins}`, true)
                .addField(`7. ${response.data.data[6].gameName}`, `Number of Wins: ${response.data.data[6].numberOfWins}`, true)
                .addField(`8. ${response.data.data[7].gameName}`, `Number of Wins: ${response.data.data[7].numberOfWins}`, true)
                .addField(`9. ${response.data.data[8].gameName}`, `Number of Wins: ${response.data.data[8].numberOfWins}`, true)
                .addField(`10. ${response.data.data[9].gameName}`, `Number of Wins: ${response.data.data[9].numberOfWins}`, true)
                .addField(`11. ${response.data.data[10].gameName}`, `Number of Wins: ${response.data.data[10].numberOfWins}`, true)
                .addField(`12. ${response.data.data[11].gameName}`, `Number of Wins: ${response.data.data[11].numberOfWins}`, true)
                .setColor('RANDOM')
                .setFooter("Bot Made By OblivionGhoul#5842", "https://i.imgur.com/Ivtf7GP.png")
                message.channel.send(embed)
            })
            .catch(function (error) {
                return message.channel.send('Please specify the region correctly. (usage: -valleaderboard [region])')
            })
    },
}