const Discord = require('discord.js')
module.exports = {
	command: "howsmart",
  callback: async function(client, message, args) {

        const dumbGuy = message.mentions.members.first() || message.author.username;

        const percentage = Math.floor(Math.random() * 481);

        const embed = new Discord.MessageEmbed()
        .setTitle('IQ TEST!')
        .setDescription(`${dumbGuy} has passed the test, and has ${percentage} IQ!`)
        .setFooter('Become our patreon and recive premium!')
        .setColor('YELLOW')

        message.channel.send(embed)
    }
}
