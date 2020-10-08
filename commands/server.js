const Discord = require('discord.js');

module.exports = {
    name: 'server',
    description: "displays server info",
    aliases: ['serverinfo'],
    execute(client, message, args) {
        if (args[0] === 'members') {
            const serverMembers = message.guild.memberCount;
            const memberEmbed = new Discord.MessageEmbed()
            .setTitle(`${message.guild.name} has ${serverMembers} members in the server.`);

            message.channel.send(memberEmbed).catch(err => console.log(err))
        }
        if (args[0] === 'boosts') {
            const serverBoosts = message.guild.premiumSubscriptionCount;
            const boostEmbed = new Discord.MessageEmbed()
            .setTitle(`${message.guild.name} has ${serverBoosts} boosts on the server.`);

            message.channel.send(boostEmbed).catch(err => console.log(err))
        }
        if (args[0] === 'joined') {
            const joinedEmbed = new Discord.MessageEmbed()
            .setTitle(`You joined ${message.guild.name} at ${message.member.joinedAt}`);

            message.channel.send(joinedEmbed).catch(err => console.log(err))
        }
    } 
}