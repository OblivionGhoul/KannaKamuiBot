const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('Store')
        .setDescription(`Car - 500 coins \n Watch - 250 coins`)
        .setTimestamp();

    message.channel.send(embed);
}

module.exports.config = {
    name: "store",
    description: "view the store",
    aliases: ['shop']
}