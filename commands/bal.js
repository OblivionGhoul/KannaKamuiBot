const db = require('quick.db');
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    let user = message.mentions.users.first() || message.author;
    let bal = await db.fetch(`money_${message.guild.id}_${user.id}`);
    if (bal === null) bal = 0;
    message.channel.send(`${user} currently has ${bal} coins`)
}

module.exports.config = {
    name: "bal",
    description: "checks user balance",
    aliases: ['balance']
}