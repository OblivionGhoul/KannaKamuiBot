const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: "inv",
    description: "View your inventory",
    async execute(client, message, args) {
        let items = await db.fetch(message.author.id);
        if(items === null) items = "Nothing"

        const Embed = new Discord.MessageEmbed()
        .addField('Inventory', items)

        message.channel.send(Embed);
    }
}