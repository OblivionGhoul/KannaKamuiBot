const Discord = require('discord.js')

module.exports = {
    commands: ['pp'],
    callback: async (message, author, guild, settings) => {
        try {
            var ppuser = message.mentions.users.first() || message.author;

            let responses = [
            "No PP detected.",
            "Can\'t find your PP cuz it\'s wayy too small for me to see.",
            "8D \n Can You See That?",
            "8=D \n Thats Kinda Cute.",
            "8===D \n Not Bad.",
            "8========D \n Damnnnnn Nice.",
            "8==============D \n Woahhhhhhhh",
            "8====================D \n Nice Shlong.",
            "8-D \n Damn, skinny and short...",
            "8-----------D \n You can do better.",
            "8---------------------D \n Skinny but long... 😏",
            "Your PP is too big for me to comprehend. \n ||Joking looser its small af and I can\'t even see your head from waayy up here||"
            ]

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
