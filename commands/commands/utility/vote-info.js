const Discord = require('discord.js');
const fetchAll = require('discord-fetch-all')
const fs = require('fs')

module.exports = {
    commands: ['voteinfo', 'vote-info'],
    callback: async (message, args, user) => {
        const ct = new Discord.MessageEmbed()
        if (!message.member.hasPermission('ADMINISTRATOR')) {
            return message.channel.send(ct.setColor('RANDOM').setTitle("You do not have permissions to use this command"))
        }

        if (!message.channel.name.includes('vote')) {
            return message.channel.send(ct.setColor('RANDOM').setTitle("This message needs to be sent in a open ticket."))
        }

        const l = await message.channel.send(ct.setColor('RANDOM').setTitle("Here is some info on the ticket").setDescription(`React with ⛔ to delete this channel! \n\nReact with 🎫 to save the transcript of this channel! \n\n React with ✅ to exit this menu!`).setAuthor(message.member.displayName, message.member.user.displayAvatarURL()))
        await l.react('⛔')
        await l.react('🎫')
        await l.react('✅')

        const ct2 = new Discord.MessageEmbed()

        const filter = (reaction, user) => ['⛔', '🎫', '✅'].includes(reaction.emoji.name) && user.id === message.author.id
        const response = await l.awaitReactions(filter, {
            max: 1,
            time: 8.64e+7
        });
        if (!response.size) {
            return undefined;
        }
        const emoji = response.first().emoji.name;

        if (emoji === '✅') {
            message.channel.bulkDelete(2, true)
        }

        if (emoji === '⛔') {
            message.channel.bulkDelete(2, true)
            message.channel.send(ct2.setColor('RANDOM').setTitle("Deleting this channel in 30 seconds. Thank You for voting!"))
            setTimeout(async () => {
                await message.channel.delete()
            }, 30000)
        }

        if (emoji === '🎫') {
            message.channel.send(ct2.setColor('RANDOM').setTitle("Generating transcript..."))

            const msgs = await fetchAll.messages(message.channel, {
                reverseArray: true
            })

            const content = msgs.map(m => `${m.author.tag} - ${m.content}`)

            fs.writeFileSync('transcript.txt', content.join('\n'), error => {
                if (error) throw error
            })

            message.channel.send(new Discord.MessageAttachment('transcript.txt', 'transcript.txt'))
        }
    },
}