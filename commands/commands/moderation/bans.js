const Discord = require('discord.js')
module.exports = {
    command: "bans",
    callback: async(client, message, args) => {
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('Must have the right perms to use this!')
        var amount = 1;
        const fetchBans = message.guild.fetchBans();
        const bannedMembers = (await fetchBans)
        .map((member) => `> __${amount++}.__ **${member.user.tag}** | (*${member.user.id}*)`)
        .join("\n");
        const bansEmbed = new Discord.MessageEmbed()
        .setAuthor(`Bans for ${message.guild.name}`, message.guild.iconURL({ dynamic: true }))
        .setDescription(`${bannedMembers}`)
        .setFooter(`Amount: ${amount - 1}`)
        .setTimestamp()
        .setColor("RED")
        message.channel.send(bansEmbed)

    }
}
