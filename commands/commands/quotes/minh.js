const Discord = require("discord.js")
const axios = require('axios');

module.exports = {
    commands: ['compliment'],
    callback: async (message, args) => {
        axios.get('https://complimentr.com/api')
            .then(function (response) {
                message.channel.send(`Minh, ${response.data.compliment}.`)
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}