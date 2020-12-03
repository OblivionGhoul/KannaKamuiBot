const Discord = require('discord.js')

module.exports = {
    commands: ['pp'],
    callback: async (message, author, guild, settings) => {
        try {
            var ppuser = message.mentions.users.first() || message.author;

            let reponses = ["8===D", "8=====D", "8========D", "8=D", "8==D", "8==========D", "8========D"]

            let answer = Math.floor((Math.random() * reponses.length))

            var ppuser = new Discord.MessageEmbed()
                .setTitle('*PP MACHINE*')
                .setDescription(`*${ppuser}'s pp size is:*`)
                .addField(`Result:`, reponses[answer], true)
                .setColor("RED")
            message.channel.send(ppuser)
        } catch (err) {
            var bug = new Discord.MessageEmbed()
                .setDescription(err)
                .setColor("RED")
            message.channel.send(bug)
        }
    }
}