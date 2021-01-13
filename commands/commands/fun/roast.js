const axios = require('axios');
const Discord = require('discord.js');

module.exports = {
    commands: ['roast', 'burn'],
    callback: async (message, args) => {
        if (!args[0]) return message.channel.send('Invalid Command Format: \`%roast @user`');
        const mentionedMember = message.mentions.members.first();
        if (!mentionedMember) return message.channel.send('Invalid User');
        let msg = await message.channel.send('Finding a roast...');
        axios.get('https://evilinsult.com/generate_insult.php?lang=en&type=json')
            .then(res => {
                const json = res.data;
                const roastEmbed = new Discord.MessageEmbed()
                    .setTitle(mentionedMember.user.tag + ` ${json.insult}`)
                    .setFooter("Bot Made By OblivionGhoul#5842", "https://i.imgur.com/Ivtf7GP.png")
                msg.edit(roastEmbed);
            });
    },
}