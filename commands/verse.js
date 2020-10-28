const axios = require('axios');
const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    axios.get('https://beta.ourmanna.com/api/v1/get/?format=text&order=random')
        .then(function (response) {
            const verse = new Discord.MessageEmbed()
                .setTitle('📕 Bible Verse 📕')
                .setDescription(response.data)
                .setColor('RANDOM')
            message.channel.send(verse)
        })
        .catch(function (error) {
            console.log(error);
        })
}

module.exports.config = {
    name: "verse",
    description: "sends a bible verse",
    aliases: ['bible']
}