const Discord = require('discord.js')
const { getdadjoke } = require('get-dadjoke');
module.exports = {
    command: "dadjoke",
    callback: async (client, message, args) => {  

        const joke = await getdadjoke()

       const embed = new Discord.MessageEmbed()
       .setTitle('Dad Joke Machine 9000!')
       .setDescription(joke)
        .setFooter('Super funny am I right??!')

        message.channel.send(embed)
    }
}
