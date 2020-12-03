const Discord = require("discord.js")
const axios = require('axios');

module.exports = {
    commands: ['christmas', 'christmascountdown'],
    callback: async (message, args) => {
        axios.get('https://christmas-days.anvil.app/_/api/get_days')
            .then(function (response) {
                const embed = new Discord.MessageEmbed()
                .setTitle('🎄 Days Till Christmas 🎄')
                .setDescription(`${Object.values(response.data)} Days Until Christmas!`)
                .setColor('GREEN')
                .setThumbnail('https://i.imgur.com/FXW0oTi.jpg')
                .setFooter('Bot made by OblivionGhoul#5842')
                .setTimestamp()
                message.channel.send(embed)
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}