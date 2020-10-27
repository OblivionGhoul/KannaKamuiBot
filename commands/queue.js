const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
  const serverQueue = message.client.queue.get(message.guild.id);
  if (!serverQueue) return message.channel.send("There is nothing playing in this server.");

  let queue = new MessageEmbed()
    .setTitle("Server Songs Queue")
    .setColor("BLUE")
    .addField("Now Playing", serverQueue.songs[0].title, true)
    .addField("Text Channel", serverQueue.textChannel, true)
    .addField("Voice Channel", serverQueue.voiceChannel, true)
    .setDescription(serverQueue.songs.map((song) => {
      if (song === serverQueue.songs[0]) return
      return `**-** ${song.title}`
    }).join("\n"))
    .setFooter("Bot made by OblivionGhoul#5842")
  if (serverQueue.songs.length === 1) queue.setDescription(`No songs to play next.`)
  message.channel.send(queue)
}

module.exports.config = {
  name: "queue",
  description: "music queue",
  aliases: ['q']
}
