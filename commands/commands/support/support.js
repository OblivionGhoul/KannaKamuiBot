const Discord = require('discord.js')
module.exports = {
  commands: "support",
  callback(client, message, args) {
            if(!message.guild.me.hasPermission('EMBED_LINKS')) {
          message.channel.send('I need embed links permission please.')
        }
        const supportE = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('Support Options')
        .addField('Support Server', '[CLICK ME](https://discord.gg/tu49dp6nut)') // goes to kanna bot support server btw dont worry
        .addField('Donate', '[CLICK ME (PAYPAL)](https://www.paypal.com/paypalme/kannabot)')
        message.channel.send(supportE)
}
}
