const Discord = require('discord.js');
const axios = require('axios');

module.exports = {
    commands: ['pat'],
    callback: async (message, client) => {
        let personslap = message.mentions.members.first();
        let quote = ['Happy now?', 'UwU', "I will always be here to pat you!", 'Very wholesome!', 'AWWWWWWWWWWWW!', 'How cute'];
        let quoter = quote[Math.floor(Math.random() * quote.length)];

        axios.get(`https://kawaii.red/api/gif/hug/token=${process.env.kawaiiAPI}`)
            .then(function (response) {
                if (!personslap) {
                    let personslap = 'nobody';
        
                    let embed = new Discord.MessageEmbed()
                        .setDescription(`**<@${message.author.id}> just patted ${personslap}! ${quoter}!**`)
                        .setImage(response.data.response)
                        .setColor('RANDOM')
                    message.channel.send(embed);
                    return;
                }
        
                if (personslap.id === message.author.id) {
                    let personslap = 'them own damnselves!';
                    let embed = new Discord.MessageEmbed()
                        .setDescription(`**<@${message.author.id}> just patted ${personslap}! I think they are on serious need of affection!**`)
                        .setImage(response.data.response)
                        .setColor('RANDOM')
                    message.channel.send(embed);
                    return;
                }
        
                let embed = new Discord.MessageEmbed()
                    .setDescription(`**<@${message.author.id}> just patted ${personslap}! ${quoter}!**`)
                    .setImage(response.data.response)
                    .setColor('RANDOM')
                message.channel.send(embed);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}