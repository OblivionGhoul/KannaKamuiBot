const Discord = require('discord.js');

module.exports = {
    commands: ['rules', 'rule'],
    callback: async (message) => {
        const testEmbed = new Discord.MessageEmbed()
            .setColor(0x12ffff)
            .setTitle('Server Rules')
            .setDescription('1st Offense: Warning \n 2nd Offense: 3hr Mute \n 3rd Offense: Kick (Can Only Be Invited Back By Moderator) \n 4th Offense: Ban \n ')
            .addField('Rule #1', 'No racial slurs (immediate permanent ban & no n-word variations).')
            .addField('Rule #2', 'No spamming gifs or words.')
            .addField('Rule #3', 'No repetitve profanity.')
            .addField('Rule #4', 'Don\'t be toxic (Don\'t attack people personally).')
            .addField('Rule #5', 'No begging for higher roles (Server rank does not directly correspond to roles).')
            .addField('Rule #6', 'Do not ping anyone unless necessary.')
            .setFooter('Bot made by OblivionGhoul#5842')
            .setFooter("Bot Made By OblivionGhoul#5842", "https://i.imgur.com/Ivtf7GP.png")
            .setTimestamp()
        try {
            message.reply(testEmbed);
        } catch {
            message.reply(`Sorry <@${message.author.username}>, Message cannot be sent.`)
        }
    },
}