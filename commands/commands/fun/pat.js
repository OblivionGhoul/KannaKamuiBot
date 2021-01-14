const Discord = require('discord.js');
const snpm = require('sakuranpm');

module.exports = {
    commands: ['pat'],
    callback: async (message, client) => {
        let imgKiss = await snpm.pat();
        let slaps = [imgKiss];
        let slapR = slaps[Math.floor(Math.random() * slaps.length)];
        let personslap = message.mentions.members.first();
        let quote = ['Happy now?', 'UwU', "I will always be here to pat you!", 'Very wholesome!', 'AWWWWWWWWWWWW!', 'How cute.'];
        let quoter = quote[Math.floor(Math.random() * quote.length)];

        if (!personslap) {
            let personslap = 'nobody';

            let embed = new Discord.MessageEmbed()
                .setDescription(`**<@${message.author.id}> just patted ${personslap}! ${quoter}!**`)
                .setImage(slapR)
                .setColor('RANDOM')
                .setFooter("Bot Made By OblivionGhoul#5842", "https://i.imgur.com/Ivtf7GP.png")
            message.channel.send(embed);
            return;
        }

        if (personslap.id === message.author.id) {
            let personslap = 'them own damnselves!';
            let embed = new Discord.MessageEmbed()
                .setDescription(`**<@${message.author.id}> just patted ${personslap}! I think they are on serious need of affection!**`)
                .setImage(slapR)
                .setColor('RANDOM')
                .setFooter("Bot Made By OblivionGhoul#5842", "https://i.imgur.com/Ivtf7GP.png")
            message.channel.send(embed);
            return;
        }

        let embed = new Discord.MessageEmbed()
            .setDescription(`**<@${message.author.id}> just patted ${personslap}! ${quoter}!**`)
            .setImage(slapR)
            .setColor('RANDOM')
            .setFooter("Bot Made By OblivionGhoul#5842", "https://i.imgur.com/Ivtf7GP.png")
        message.channel.send(embed);
    }
}