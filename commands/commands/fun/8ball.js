const Discord = require('discord.js')

const answers = [
    'Maybe.',
    'Certainly not.',
    'I hope so.',
    'Not in your wildest dreams.',
    'There is a good chance.',
    'Quite likely.',
    'I think so.',
    'I hope not.',
    'I hope so.',
    'Never!',
    'Ahaha! Really?!?',
    'Pfft.',
    'Sorry, bucko.',
    'Hell, yes.',
    'Hell to the no.',
    'The future is bleak.',
    'The future is uncertain.',
    'I would rather not say.',
    'Who cares?',
    'Possibly.',
    'Never, ever, ever.',
    'There is a small chance.',
    'Yes!',
    'Don\'t ask me this ever again.',
    'Don\'t worry about it.',
    'I gotta go pet my fish...'
];

module.exports = {
    commands: ['8ball'],
    callback: async (message, question) => {
        const embed = new Discord.MessageEmbed()
        .setAuthor(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
        .setTitle('🎱 8Ball 🎱')
        .setDescription(`${answers[Math.floor(Math.random() * answers.length)]}`)
        .setFooter("Bot Made By OblivionGhoul#5842", "https://i.imgur.com/Ivtf7GP.png")
        message.channel.send(embed);
    },
}