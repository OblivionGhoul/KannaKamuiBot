const Discord = require('discord.js');

module.exports = {
    name: 'info',
    description: "displays user info",
    aliases: ['user-info', 'information', 'userinfo'],
    execute(client, message, args) {
        let mentionedMember = message.mentions.members.first();
        let mentionedUser = message.mentions.users.first();

        const userEmbed = new Discord.MessageEmbed()
        .setTitle(`User information for ${mentionedUser.username}`)
        .addField('Username: ', `${mentionedUser.username}`)
        .addField('User ID: ', `${mentionedUser.id}`)
        .addField('Account Created: ', `${mentionedUser.createdAt}`)
        .addField('Joined the server at: ', `${mentionedMember.joinedAt}`)
        .addField('User status: ', `${mentionedUser.presence.status}`)

        message.channel.send(userEmbed).catch(err => console.log(err));
    }
}