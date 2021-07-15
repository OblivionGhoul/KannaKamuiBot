const { MessageEmbed } = require('discord.js')
const axios = require('axios');

module.exports = {
    commands: ['hug'],
    callback: async (message) => {
        const author = message.author;
        const user = message.mentions.members.first();

        axios.get(`https://kawaii.red/api/gif/hug/token=${process.env.kawaiiAPI}`)
            .then(function (response) {
                if (!user) {
                    const embed = new MessageEmbed()
                        .setAuthor(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
                        .setDescription('You didn\'t specify a user to hug :cry: \n Maybe you can try hugging yourself')
                    message.channel.send(embed)
                }

                if (user) {
                    if (author.username == user.user.username) return message.reply("Damn thats kinda sad...")
                    const hug = new MessageEmbed()
                        .setDescription(`${author.username} just hugged ${user.user.username}, so wholesome :heart_eyes:`)
                        .setImage(response.data.response)
                    message.channel.send(hug)
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}