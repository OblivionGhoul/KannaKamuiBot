const Discord = require('discord.js')
const { Spawn } = require("pokecord");

module.exports = {
    command: "pokemon",
    callback: async(client, message, args) => {

    const pokemon = await Spawn().catch(e => {});
    if (!pokemon) return message.channel.send("Opps! Something went wrong :(");
    const filter = m => m.author.id === message.author.id;

    const embed = new Discord.MessageEmbed()
        .setAuthor("Whats this pokemon?")
        .setColor("#FFFF00")
        .setImage(pokemon.imageURL);
    
    await message.channel.send(embed);

    message.channel.awaitMessages(filter, {
        max: 1,
        error: ["time"],
        time: 15000
    })
    .then(collected => {
        const m = collected.first();
        if (!m.content || m.content.toLowerCase() !== pokemon.name.toLowerCase()) return message.channel.send(`❌ | Incorrect guess! The answer was **${pokemon.name}**.`);
        return message.channel.send(`✅ | Correct guess!`);
    })
    .catch(() => {
        message.channel.send(`❌ | You did not answer in time. The correct answer was **${pokemon.name}**!`);
    });

    }
}
