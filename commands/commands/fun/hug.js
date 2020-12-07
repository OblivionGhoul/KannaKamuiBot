const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: ['hug'],
    callback: async (message) => {
        const author = message.author;
        const user = message.mentions.members.first();
        
        const gif = [
        'https://media.giphy.com/media/l4FGpP4lxGGgK5CBW/giphy.gif',
        'https://media.giphy.com/media/GXFDStd2CP1ba/giphy.gif',
        'https://media.giphy.com/media/qLEDGdMoyTT9e/giphy.gif',
        'https://media.giphy.com/media/Hld9vKjLk3irC/giphy.gif',
        'https://media.giphy.com/media/lXiRKBj0SAA0EWvbG/giphy.gif',
        'https://media.giphy.com/media/gnXG2hODaCOru/giphy.gif',
        'https://media.giphy.com/media/NNeyoSjPTDfhe/giphy.gif',
        'https://media.giphy.com/media/jMGxhWR7rtTNu/giphy.gif',
        'https://media.giphy.com/media/2GnS81AihShS8/giphy.gif',
        'https://media.giphy.com/media/3M4NpbLCTxBqU/giphy.gif',
        'https://media.giphy.com/media/9Y1LEFKsbbP4hrLgV3/giphy.gif',
        'https://media.giphy.com/media/9JnRMIFMYAKpaHRXRF/giphy.gif'
        ]

        let index = (Math.floor(Math.random() * Math.floor(gif.length)));

        if(!user) {
            const embed = new MessageEmbed()
            .setAuthor(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription('You didn\'t specify a user to hug :cry: \n Maybe you can try hugging yourself')
            .setFooter("Bot Made By OblivionGhoul#5842", "https://i.imgur.com/Ivtf7GP.png")
            message.channel.send(embed)
        }


        if(user) {
            if (author.username == user.user.username) return message.reply("Damn thats kinda sad...")
            const hug = new MessageEmbed()
            .setDescription(`${author.username} just hugged ${user.user.username}, so wholesome :heart_eyes:`)
            .setImage(gif[index])
            .setFooter("Bot Made By OblivionGhoul#5842", "https://i.imgur.com/Ivtf7GP.png")
            message.channel.send(hug)
        }
    }
}