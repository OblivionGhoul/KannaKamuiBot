const Fetch = require("node-fetch")
const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: ['sign'],
    callback: async (message) => {
        if (!message.content.includes(" ")) {
            return message.channel.send("Please specify what you want to say.")
        }
        message.channel.send('Creating image...')
        let input = message.content.substring(message.content.indexOf(' ') + 1)

        let res = await Fetch(`https://nekobot.xyz/api/imagegen?type=fact&text=${input}`);
        let json = await res.json();

        if (!json.message) throw new Error(`Something Went Wrong, Try Again Later!`);

        const data = new MessageEmbed()
        .setImage(json.message)
        .setColor('RANDOM')
        message.channel.send(data)
    }
}