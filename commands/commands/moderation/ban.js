const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: ['ban'],
    callback: async (message, args) => {
        if (!message.member.permissions.has('BAN_MEMBERS')) return message.channel.send('You do not have the ban members permission!')
        if (!message.guild.me.permissions.has('BAN_MEMBERS')) return message.channel.send('I do not have the ban members permission!')

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if (!user) return message.channel.send('Please make sure you enter a valid user!')
        
        const reason = args.slice(1).join(" ") || "No reason provided."
        if ((message.member.roles.highest.position <= user.roles.highest.position) && message.guild.ownerID != message.author.id) return message.channel.send('You do not have a high enough role to ban this user!')
        if (message.guild.me.roles.highest.position <= user.roles.highest.position) return message.channel.send('I do not have a high enough role to ban this user!')
        
        try {
            await message.guild.members.ban(user.id, {reason})
            const embed = new MessageEmbed()
            .setTitle(`User Banned!`)
            .setDescription(`Reason: ${reason}`)
            .setColor('RANDOM')
            .setAuthor(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
            return message.channel.send(embed)
        } catch {
            message.channel.send('There was an error, please try again later.')
        }
    },
}