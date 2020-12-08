const Discord = require('discord.js');

module.exports = {
    commands: ['vote'],
    callback: async (message, client, args) => {
        const ticketEmbed = new Discord.MessageEmbed()

        const user = message.author.id; 
        const user2 = message.author.username

        const name = user2 + "s-vote";

        if (message.guild.channels.cache.find(ch => ch.name == name)) {
            message.channel.send(ticketEmbed.setColor('RED').setTitle("Error!").setAuthor(message.member.displayName, message.member.user.displayAvatarURL()).setDescription('You have already voted!').setFooter("Bot Made By OblivionGhoul#5842", "https://i.imgur.com/Ivtf7GP.png"))
        } else {
            message.guild.channels.create(name).then(async (chan) => {
                chan.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: false,
                    VIEW_CHANNEL: false
                })
                chan.updateOverwrite(user, {
                    SEND_MESSAGES: true,
                    VIEW_CHANNEL: true
                })
                message.reply(ticketEmbed.setColor('RANDOM').setTitle('New Vote!').setAuthor(message.member.displayName, message.member.user.displayAvatarURL()).setDescription(`<@${message.author.id}> Your vote channel is in <#${chan.id}>`).setFooter("Bot Made By OblivionGhoul#5842", "https://i.imgur.com/Ivtf7GP.png"));

                await chan.send(ticketEmbed.setColor('RANDOM').setTitle('New Vote!').setAuthor(message.member.displayName, message.member.user.displayAvatarURL()).addField(`Thank you for voting!`, `<@${message.author.id}> Please state who you want to vote for or nominate.`).setDescription('An Admin will be with you shortly').setFooter("Bot Made By OblivionGhoul#5842", "https://i.imgur.com/Ivtf7GP.png"))
            })
        }
    }
}