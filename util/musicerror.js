const { MessageEmbed } = require("discord.js")

/**
 * @param {String} text 
 * @param {TextChannel} channel 
 */
module.exports = async (text, channel) => {
    let embed = new MessageEmbed()
    .setColor("RED")
    .setDescription(text)
    .setFooter("Bot Made By OblivionGhoul#5842", "https://i.imgur.com/Ivtf7GP.png")
    await channel.send(embed)
}