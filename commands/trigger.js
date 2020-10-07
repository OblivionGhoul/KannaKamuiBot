const canva = require('canvacord');
const Discord = require('discord.js')

module.exports = {
    name: "trigger",
    description: "Trigger yourself",
    async execute(client, message, args) {
        let avatar = message.author.displayAvatarURL({dynamic: false, format: "png"});

        let image = await canva.trigger(avatar);

        let triggered = new Discord.MessageAttachment(image, "triggered.gif")

        message.channel.send(triggered);
    }
}