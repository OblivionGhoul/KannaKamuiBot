//Made by ChannelUndefined#0001
module.exports = {
  command: "credits",
    callback(client, message, args) {
      if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send("Bot needs permissions to send embeds!!") 

        const Discord = require('discord.js')
        const info = new Discord.MessageEmbed()
        
        .setTitle('Credits')
        .addFields(
          { name: 'Total contributors', value:'3 [OblivionGhoul#6969, SmugTheKiler#0001, GrpeApple]', inline:false},
          )
        .addFields(
          { name:'OblivionGhoul#6969', value: "Owner of the bot, original and on-going programmer. ([Oblivions bot(me) support servers](https://discord.gg/rxpecJeeHY))", inline:false},
          { name:'SmugTheKiler#0001', value: "Hired developer that helps adding features to the bot and fixing bugs. ([Their bots invite link](https://discord.com/oauth2/authorize?client_id=743292394237329440&scope=bot&permissions=8))", inline:false},
          { name:'GrpeApple', value: "A proffesional developer helping this bot to be created and de-bugged. ([Their github profile link](https://github.com/GrpeApple))"}
        )
          message.channel.send(info);
 }
}
