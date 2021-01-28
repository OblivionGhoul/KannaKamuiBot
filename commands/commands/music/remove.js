const sendError = require("@util/musicerror")
const { MessageEmbed } = require("discord.js");

module.exports = {
    commands: ['remove'],
    callback: async (message, args) => {
        const queue = message.client.queue.get(message.guild.id);
        if (!queue) return sendError("There is no queue.", message.channel).catch(console.error);
        if (!args.length) return sendError(`Please give a valid Queue Number`, message.channel);
        if (isNaN(args[0])) return sendError(`Please give a valid Queue Number`, message.channel);
        if (queue.songs.length == 1) return sendError("There is no queue.", message.channel).catch(console.error);
        if (args[0] > queue.songs.length)
            return message.channel.send(`The queue is only ${queue.songs.length} songs long!`)
        try {
            const song = queue.songs.splice(args[0] - 1, 1);
            sendError(`❌ **|** Removed: **\`${song[0].title}\`** from the queue.`, queue.textChannel).catch(console.error);
            message.react("✅")
        } catch (error) {
            return message.channel.send(`An unexpected error occurred.\nPossible type: ${error}`)
        }
    },
}