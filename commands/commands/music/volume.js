const sendError = require("@util/musicerror")
const { MessageEmbed } = require("discord.js");

module.exports = {
    commands: ['volume', 'vol'],
    callback: async (message, args) => {
        const channel = message.member.voice.channel;
        if (!channel) return sendError("I'm sorry but you need to be in a voice channel to play music!", message.channel);
        const serverQueue = message.client.queue.get(message.guild.id);
        if (!serverQueue) return sendError("There is nothing playing in this server.", message.channel);
        if (!args[0]) return message.channel.send(`The current volume is: **${serverQueue.volume}**`);
        serverQueue.volume = args[0];
        serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 5);
        if (serverQueue.volume > 5) {
            serverQueue.connection.dispatcher.setVolumeLogarithmic(1);
            return message.channel.send('The max volume is 5');
        }
        let xd = new MessageEmbed()
            .setDescription(`The Volume is now: **${args[0]}**`)
            .setTitle("Server Volume Manager")
            .setColor("BLUE")
            .setFooter("Bot made by OblivionGhoul#5842")
        return message.channel.send(xd);
    },
}