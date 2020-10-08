const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "volume",
    description: "To change the server song queue volume",
    usage: "[volume]",
    aliases: ["v", "vol"],
    async execute(client, message, args) {
        const channel = message.member.voice.channel;
        if (!channel) return message.channel.send("I'm sorry but you need to be in a voice channel to play music!");
        const serverQueue = message.client.queue.get(message.guild.id);
        if (!serverQueue) return message.channel.send("There is nothing playing in this server.");
        if (!args[0]) return message.channel.send(`The current volume is: **${serverQueue.volume}**`);
        serverQueue.volume = args[0];
        serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 5);
        let xd = new MessageEmbed()
            .setDescription(`I set the volume to: **${args[0] / 5}/5** (It will be divided by 5)`)
            .setTitle("Server Volume Manager")
            .setColor("BLUE")
        return message.channel.send(xd);
    },
};