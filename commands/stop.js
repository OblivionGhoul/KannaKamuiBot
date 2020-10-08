const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "stop",
    description: "To stop the music and clearing the queue",
    usage: "",
    aliases: [''],
  async execute(client, message, args) {
    const channel = message.member.voice.channel
    if (!channel)return message.channel.send("You need to be in a voice channel to play music!");
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue)return message.channel.send("There is nothing playing that I could stop for you.");
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end("Stop the music");
    message.react("✅")
  },
};