const axios = require('axios');
const Discord = require('discord.js');

module.exports = {
    commands: ['valserver'],
    callback: (message, args) => {
        let region = args[0]
        if (!region) {
            region = 'NA'
            message.channel.send('Because you did not set a region, it will be automatically set to NA. (usage: -valserver [region])')
            message.channel.send('Region List: NA, EU, AP, KR')
        }
        axios.get(`https://api.henrikdev.xyz/valorant/v1/status/${region}`)
            .then(function (response) {
                const embed = new Discord.MessageEmbed()
                .setTitle(`${region} Valorant Server Status`)
                .addField('Maintenances', ` - ${response.data.data.maintenances}`)
                .addField('Incidents', ` - ${response.data.data.incidents}`)
                .setColor('RANDOM')
                
                message.channel.send(embed)
            })
            .catch(function (error) {
                message.channel.send('Please specify a valid region. (usage: -valserver [region])')
                message.channel.send('Region List: NA, EU, AP, KR')
            })
    },
}