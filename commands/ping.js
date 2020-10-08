const Discord = require('discord.js')

module.exports = {
    name: "ping",
    description: "shows bot ping",
    aliases: [''],
    async execute (client, message, args) {
        const ping = new Discord.MessageEmbed()
        .setDescription(`🏓\`${client.ws.ping}\`ms`);
        message.channel.send(ping);
    }
}