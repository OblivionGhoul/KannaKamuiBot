const sendError = require("@util/musicerror")
const { MessageEmbed } = require("discord.js");

module.exports = {
    commands: ['loop', 'l'],
    callback: async (message, args) => {
        const serverQueue = message.client.queue.get(message.guild.id);
        if (serverQueue) {
            serverQueue.loop = !serverQueue.loop;
            return message.channel.send({
                embed: {
                    color: "GREEN",
                    description: `🔁  **|**  Looping is **\`${serverQueue.loop === true ? "enabled" : "disabled"}\`**`
                }
            });
        };
        return sendError("There is nothing playing in this server.", message.channel);
    },
}