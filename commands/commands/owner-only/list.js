const Discord = require('discord.js')
const config = require('../../../config.json')
const ownerID = config.ownerID;
module.exports = {
	cammand: "list",
	callback: async (client, message, args, eco) => {
 
if (ownerID.includes(message.author.id)) { 
const embed = new Discord.MessageEmbed()
.setTitle('List of my servers')
.setDescription(client.guilds.cache.map(g=>g.name).join('\n'))

message.channel.send(embed)
 } else if (!ownerID.includes(message.author.id)) {
     return;
 }
    }
}
