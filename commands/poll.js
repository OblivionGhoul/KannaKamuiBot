const Discord = require("discord.js");

module.exports = {
    name: 'poll',
    description: "creates a poll for something",
    aliases: [''],
    async execute(client, message, args) {
        if (message.author.bot || message.channel.type === "dm") return;
        const messageArray = message.content.split(' ');
        const cmd = messageArray[0];
        const args1 = messageArray.slice(1);

        if (cmd === '-poll') {
            let pollChannel = message.mentions.channels.first();
            let pollDescription = args1.slice(1).join(' ');

            let embedPoll = new Discord.MessageEmbed()
                .setTitle('😲 New Poll! 😲')
                .setDescription(pollDescription)
                .setColor('YELLOW')
            let msgEmbed = await pollChannel.send(embedPoll);
            await msgEmbed.react('👍')
            await msgEmbed.react('👎')
        }
    }
}