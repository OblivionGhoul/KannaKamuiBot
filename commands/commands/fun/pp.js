const Discord = require('discord.js')

module.exports = {
    commands: ['pp'],
    callback: async (message, author, guild, settings) => {
        try {
            var ppuser = message.mentions.users.first() || message.author;

            let responses = ["8D \n Can You See That?", "8=D \n Thats Kinda Cute.", "8===D \n Not Bad.", "8========D \n Damnnnnn Nice.", "8====================D \n Nice Shlong."
                            , "Can't Find Your PP Cuz It\'s Too Small.", "8---------------------D \n Skinny but long... 😏"]

            let answer = Math.floor((Math.random() * responses.length))

            var ppuser = new Discord.MessageEmbed()
                .setTitle('*PP MACHINE*')
                .setDescription(`*${ppuser}'s pp size is:*`)
                .addField(`Result:`, responses[answer], true)
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