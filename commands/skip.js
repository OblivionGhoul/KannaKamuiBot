module.exports = {
    name: "skip",
    description: "To skip the current music",
    usage: "",
    aliases: ["s"],
    async execute(client, message, args) {
        const channel = message.member.voice.channel
        if (!channel) return message.channel.send("I'm sorry but you need to be in a voice channel to play music!");
        const serverQueue = message.client.queue.get(message.guild.id);
        if (!serverQueue) return message.channel.send("There is nothing playing that I could skip for you.");
        serverQueue.connection.dispatcher.end("Skiped the music");
        message.react("✅")
    },
};