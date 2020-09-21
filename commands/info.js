const Discord = require('discord.js');

module.exports = {
    name: 'info',
    description: "displays user info",
    execute(message, args) {
        let mentionedMember = message.mentions.first();
        let mentionedUser = message.mentions.users.first();

        const userEmbed = new DiscordAPIError.RichEmbed()
        .setTitle(`User information for ${mentionedUser.username}`)
        .addField('Username: ', `${mentionedUser.username}`)
        .addField('User ID: ', `${mentionedUser.id}`)
        .addField('Account Created: ', `${mentionedUser.createdAt}`)
        .addField('Joined the server at: ', `${mentionedMember.joinAt}`)
        .addField('User status: ', `${mentionedUser.presence.status}`)
    }
}