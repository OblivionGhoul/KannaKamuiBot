const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    const ping = new Discord.MessageEmbed()
        .setDescription(`🏓\`${client.ws.ping}\`ms`);
    message.channel.send(ping);
}

module.exports.config = {
    name: "ping",
    description: "shows bot ping",
    aliases: ['']
}