const db = require('quick.db');
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    let items = await db.fetch(message.author.id);
    if (items === null) items = "Nothing"

    const Embed = new Discord.MessageEmbed()
        .addField('Inventory', items)

    message.channel.send(Embed);
}

module.exports.config = {
    name: "inv",
    description: "views user inv",
    aliases: ['inventory']
}