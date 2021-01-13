const axios = require('axios');
const Discord = require('discord.js');

module.exports = {
    commands: ['meme'],
    callback: async (message) => {
        axios.get('https://meme-api.herokuapp.com/gimme')
            .then(async res => {
                const json = res.data
                const msg = await message.channel.send('Sending a meme...');
                const memeEmbed = new Discord.MessageEmbed()
                    .setTitle(json.title)
                    .setImage(json.url)
                    .setFooter(`Link: ${json.postLink} | Subreddit: r/${json.subreddit}`);
                msg.edit(memeEmbed);
            });
    },
}