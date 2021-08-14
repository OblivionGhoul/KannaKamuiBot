const Discord = require('discord.js')
module.exports = {
	command: "howgay",
	callback: async function(client, message, args) {

        const gayPerson = message.mentions.members.first() || message.author.username;

        const procentage = Math.floor(Math.random() * 101);

        const embed = new Discord.MessageEmbed()
        .setTitle('Gay MACHINE')
        .setDescription(`${gayPerson} is ${procentage}% gay!`)
        .setFooter('Become our patreon and recive premium!')
        .setColor('YELLOW')

        message.channel.send(embed)
    }
}
