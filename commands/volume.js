const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send("You need to be in a vc to play music.");
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return message.channel.send("There is nothing playing in this server.");
    if (!args[0]) return message.channel.send(`The current volume is: **${serverQueue.volume}**`);
    serverQueue.volume = args[0];
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 5);
    if (serverQueue.volume > 5) {
        serverQueue.connection.dispatcher.setVolumeLogarithmic(1);
        return message.channel.send('The max volume is 5');
    }
    let xd = new MessageEmbed()
        .setDescription(`The volume is now: **${args[0]}**`)
        .setTitle("Music Volume")
        .setColor("BLUE")
    return message.channel.send(xd);
}

module.exports.config = {
    name: "volume",
    description: "changes music volume",
    aliases: ['vol']
}