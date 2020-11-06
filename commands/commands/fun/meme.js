const fetch = require('node-fetch');
const Discord = require('discord.js');

module.exports = {
    commands: ['meme'],
    callback: async (message) => {
        fetch('https://meme-api.herokuapp.com/gimme')
            .then(res => res.json())
            .then(async json => {
                let msg = await message.channel.send('Sending a meme...');
                const memeEmbed = new Discord.MessageEmbed()
                    .setTitle(json.title)
                    .setImage(json.url)
                    .setFooter(`Link: ${json.postLink} | Subreddit: r/${json.subreddit}`);
                msg.edit(memeEmbed);
            });
    },
}