const Discord = require('discord.js')
module.exports = {
    command: "vote",
    callback(client, message,) {
             if(!message.guild.me.hasPermission('EMBED_LINKS')) {
          message.channel.send('I need embed links permission please.')
        }
        const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('VOTE FOR US!')
            .addField('Top.gg', '[CLICK ME](https://top.gg/bot/757066313406611477)')
