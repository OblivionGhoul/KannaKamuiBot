const fetch = require('node-fetch');
const Discord = require('discord.js');

module.exports = {
    name: 'roast',
    description: "roasts a user",
    aliases: ['burn'],
    async execute(client, message, args) {
        if (!args[0]) return message.channel.send('Invalid Command Format: \`%roast @user`');
        const mentionedMember = message.mentions.members.first();
        if (!mentionedMember) return message.channel.send('Invalid User');
        let msg = await message.channel.send('Finding a roast...');
        fetch('https://evilinsult.com/generate_insult.php?lang=en&type=json')
            .then(res => res.json())
            .then(json => {
                const roastEmbed = new Discord.MessageEmbed()
                    .setTitle(mentionedMember.user.tag + ` ${json.insult}`);
                msg.edit(roastEmbed);
            });
    }
}