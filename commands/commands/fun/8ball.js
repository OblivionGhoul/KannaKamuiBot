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
    'fuck off',
];

module.exports = {
    commands: ['8ball'],
    callback: async (message, question, args) => {
        const embed = new Discord.MessageEmbed()
        .setAuthor(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
        .setTitle('🎱 8Ball 🎱')
        .setDescription(`${answers[Math.floor(Math.random() * answers.length)]}`)

        const error = new Discord.MessageEmbed()
        .setAuthor(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
        .setTitle('🎱 8Ball 🎱')
        .setDescription(`Please provide a question.`)
        .setColor('RED')

        if (!args) return message.channel.send(error)

        message.channel.send(embed);
    },
}