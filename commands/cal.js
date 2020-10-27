const Discord = require('discord.js')
const math = require('mathjs');

module.exports.run = async (client, message, args) => {
    if (!args[0]) return message.channel.send('Please provide a question');

    let resp;

    try {
        resp = math.evaluate(args.join(" "))
    } catch (e) {
        return message.channel.send('Please provide a **valid** question')
    }

    const embed = new Discord.MessageEmbed()
        .setColor(0x808080)
        .setTitle('Calculator')
        .addField('Question', `\`\`\`css\n${args.join(' ')}\`\`\``)
        .addField('Answer', `\`\`\`css\n${resp}\`\`\``)

    message.channel.send(embed);
}

module.exports.config = {
    name: "cal",
    description: "does math",
    aliases: ['calc', 'calculate']
}