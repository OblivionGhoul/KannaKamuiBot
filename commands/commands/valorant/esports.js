const axios = require('axios');
const Discord = require('discord.js');

module.exports = {
    commands: ['valesports', 'val-esports'],
    callback: (message, args) => {
        axios.get(`https://api.henrikdev.xyz/valorant/v1/website/en-us?filter=esports`)
            .then(function (response) {
                const embed = new Discord.MessageEmbed()
                .setTitle('Valorant Esport Updates')
                .addField(response.data.data[0].title, response.data.data[0].url)
                .addField(response.data.data[1].title, response.data.data[1].url)
                .addField(response.data.data[2].title, response.data.data[2].url)
                .setThumbnail(response.data.data[0].banner_url)
                .setColor('RANDOM')
                message.channel.send(embed)
            })
            .catch(function (error) {
                message.channel.send('Something went wrong, please try again later.')
            })
    },
}