const Discord = require('discord.js')
const midDuel = new Set()

module.exports = {
    commands: ['tic-tac-toe', 'ttt', 'tictactoe'],
    callback: async (message, client) => {
        const author = message.author.id
        const authorName = message.author.username
        const member = message.mentions.members.first()
        if (!member) {
            return message.channel.send('Incorrect Syntax! Please mention a user!')
        }
        if (member.id === author) {
            return message.channel.send('Incorrext Syntax! You cannot duel yourself!')
        }
        if (midDuel.has(author)) {
            return message.channel.send(`You're currently in a duel!`)
        } else if (midDuel.has(member.id)) {
            return message.channel.send(`<@${member.id}> is currently in a duel!`)
        }
        midDuel.add(author)
        midDuel.add(member.id)
        let turnName
        let a1 = '⬜'
        let a2 = '⬜'
        let a3 = '⬜'
        let b1 = '⬜'
        let b2 = '⬜'
        let b3 = '⬜'
        let c1 = '⬜'
        let c2 = '⬜'
        let c3 = '⬜'
        let xCircle
        let winner
        let turn
        const Embed = new Discord.MessageEmbed()
            .setTitle('Tic Tac Toe')
            .setDescription(`🎮 **${authorName}** VS ${member} 🎮\n\n🟦🟦🟦🟦🟦\n🟦${a1}${a2}${a3}🟦\n🟦${b1}${b2}${b3}🟦\n🟦${c1}${c2}${c3}🟦\n🟦🟦🟦🟦🟦`)
            .setFooter('You have 20 seconds to reply with your next move!\nYou may type "cancel" at any time to stop the game.\n(Top Left, Top, Top Right, Left, Middle, Right, Bottom Left, Bottom, Bottom Right)')
            .setColor(3426654)
        message.channel.send(`<@${author}>`, Embed).then(async message => {
            for (i = 0; i < 9; i++) {
                if (i % 2 == 0) {
                    turnName = author
                    xCircle = '❌'
                    winner = `<@${author}>`
                } else if (i % 2 > 0) {
                    turnName = member.id
                    xCircle = '🔴'
                    winner = `<@${member.id}>`
                }
                const filter = m => m.author.id === turnName
                try {
                    msg = await message.channel.awaitMessages(filter, {
                        max: 1,
                        time: '30000',
                        errors: ['time']
                    })
                    if (msg.first().content.toLowerCase().trim() === 'cancel') {
                        message.channel.send('Cancelled!')
                        midDuel.delete(author)
                        midDuel.delete(member.id)
                        break
                    } else {
                        if (msg.first().content.toLowerCase().trim() === 'top left' || msg.first().content.toLowerCase().trim() === 'tl') {
                            if (a1 == '🔴' || a1 == '❌') {
                                message.channel.send('That spot is already occupied.. and now you lost lol')
                                midDuel.delete(author)
                                midDuel.delete(member.id)
                                break
                            } else {
                                a1 = xCircle
                            }
                        } else if (msg.first().content.toLowerCase().trim() === 'top' || msg.first().content.toLowerCase().trim() === 't') {
                            if (a2 == '🔴' || a2 == '❌') {
                                message.channel.send('That spot is already occupied.. and now you lost lol')
                                midDuel.delete(author)
                                midDuel.delete(member.id)
                                break
                            } else {
                                a2 = xCircle
                            }
                        } else if (msg.first().content.toLowerCase().trim() === 'top right' || msg.first().content.toLowerCase().trim() === 'tr') {
                            if (a3 == '🔴' || a3 == '❌') {
                                message.channel.send('That spot is already occupied.. and now you lost lol')
                                midDuel.delete(author)
                                midDuel.delete(member.id)
                                break
                            } else {
                                a3 = xCircle
                            }
                        } else if (msg.first().content.toLowerCase().trim() === 'left' || msg.first().content.toLowerCase().trim() === 'l') {
                            if (b1 == '🔴' || b1 == '❌') {
                                message.channel.send('That spot is already occupied.. and now you lost lol')
                                midDuel.delete(author)
                                midDuel.delete(member.id)
                                break
                            } else {
                                b1 = xCircle
                            }
                        } else if (msg.first().content.toLowerCase().trim() === 'middle' || msg.first().content.toLowerCase().trim() === 'm') {
                            if (b2 == '🔴' || b2 == '❌') {
                                message.channel.send('That spot is already occupied.. and now you lost lol')
                                midDuel.delete(author)
                                midDuel.delete(member.id)
                                break
                            } else {
                                b2 = xCircle
                            }
                        } else if (msg.first().content.toLowerCase().trim() === 'right' || msg.first().content.toLowerCase().trim() === 'r') {
                            if (b3 == '🔴' || b3 == '❌') {
                                message.channel.send('That spot is already occupied.. and now you lost lol')
                                midDuel.delete(author)
                                midDuel.delete(member.id)
                                break
                            } else {
                                b3 = xCircle
                            }
                        } else if (msg.first().content.toLowerCase().trim() === 'bottom left' || msg.first().content.toLowerCase().trim() === 'bl') {
                            if (c1 == '🔴' || c1 == '❌') {
                                message.channel.send('That spot is already occupied.. and now you lost lol')
                                midDuel.delete(author)
                                midDuel.delete(member.id)
                                break
                            } else {
                                c1 = xCircle
                            }
                        } else if (msg.first().content.toLowerCase().trim() === 'bottom' || msg.first().content.toLowerCase().trim() === 'b') {
                            if (c2 == '🔴' || c2 == '❌') {
                                message.channel.send('That spot is already occupied.. and now you lost lol')
                                midDuel.delete(author)
                                midDuel.delete(member.id)
                                break
                            } else {
                                c2 = xCircle
                            }
                        } else if (msg.first().content.toLowerCase().trim() === 'bottom right' || msg.first().content.toLowerCase().trim() === 'br') {
                            if (c3 == '🔴' || c3 == '❌') {
                                message.channel.send('That spot is already occupied.. and now you lost lol')
                                midDuel.delete(author)
                                midDuel.delete(member.id)
                                break
                            } else {
                                c3 = xCircle
                            }
                        } else {
                            message.channel.send('Incorrect input, you lost.')
                            midDuel.delete(author)
                            midDuel.delete(member.id)
                            break
                        }
                    }
                    msg.first().delete()
                } catch (ex) {
                    message.channel.send(`<@${turnName}> You took too long to respond, and now you lost. Nice!`)
                    midDuel.delete(author)
                    midDuel.delete(member.id)
                    break
                }
                if (i % 2 == 0) {
                    const updatedEmbed = new Discord.MessageEmbed()
                        .setTitle('Tic Tac Toe')
                        .setDescription(`🎮 ${authorName} VS ${member} 🎮\n\n🟦🟦🟦🟦🟦\n🟦${a1}${a2}${a3}🟦\n🟦${b1}${b2}${b3}🟦\n🟦${c1}${c2}${c3}🟦\n🟦🟦🟦🟦🟦`)
                        .setFooter('You have 20 seconds to reply with your next move!\nYou may type "cancel" at any time to stop the game.\n(Top Left, Top, Top Right, Left, Middle, Right, Bottom Left, Bottom, Bottom Right)')
                        .setColor(3426654)
                    message.edit(updatedEmbed)
                } else if (i % 2 > 0) {
                    const updatedEmbed = new Discord.MessageEmbed()
                        .setTitle('Tic Tac Toe')
                        .setDescription(`🎮 **${authorName}** VS ${member} 🎮\n\n🟦🟦🟦🟦🟦\n🟦${a1}${a2}${a3}🟦\n🟦${b1}${b2}${b3}🟦\n🟦${c1}${c2}${c3}🟦\n🟦🟦🟦🟦🟦`)
                        .setFooter('You have 20 seconds to reply with your next move!\nYou may type "cancel" at any time to stop the game.\n(Top Left, Top, Top Right, Left, Middle, Right, Bottom Left, Bottom, Bottom Right)')
                        .setColor(3426654)
                    message.edit(updatedEmbed)
                }
                if (a1 == '❌' && b1 == '❌' && c1 == '❌' || a1 == '🔴' && b1 == '🔴' && c1 == '🔴') {
                    message.channel.send(`${winner} wins!`)
                    midDuel.delete(author)
                    midDuel.delete(member.id)
                    break
                } else if (a2 == '❌' && b2 == '❌' && c2 == '❌' || a2 == '🔴' && b2 == '🔴' && c2 == '🔴') {
                    message.channel.send(`${winner} wins!`)
                    midDuel.delete(author)
                    midDuel.delete(member.id)
                    break
                } else if (a3 == '❌' && b3 == '❌' && c3 == '❌' || a3 == '🔴' && b3 == '🔴' && c3 == '🔴') {
                    message.channel.send(`${winner} wins!`)
                    midDuel.delete(author)
                    midDuel.delete(member.id)
                    break
                } else if (a1 == '❌' && a2 == '❌' && a3 == '❌' || a1 == '🔴' && a2 == '🔴' && a3 == '🔴') {
                    message.channel.send(`${winner} wins!`)
                    midDuel.delete(author)
                    midDuel.delete(member.id)
                    break
                } else if (b1 == '❌' && b2 == '❌' && b3 == '❌' || b1 == '🔴' && b2 == '🔴' && b3 == '🔴') {
                    message.channel.send(`${winner} wins!`)
                    midDuel.delete(author)
                    midDuel.delete(member.id)
                    break
                } else if (c1 == '❌' && c2 == '❌' && c3 == '❌' || c1 == '🔴' && c2 == '🔴' && c3 == '🔴') {
                    message.channel.send(`${winner} wins!`)
                    midDuel.delete(author)
                    midDuel.delete(member.id)
                    break
                } else if (a1 == '❌' && b2 == '❌' && c3 == '❌' || a1 == '🔴' && b2 == '🔴' && c3 == '🔴') {
                    message.channel.send(`${winner} wins!`)
                    midDuel.delete(author)
                    midDuel.delete(member.id)
                    break
                } else if (a3 == '❌' && b2 == '❌' && c1 == '❌' || a3 == '🔴' && b2 == '🔴' && c1 == '🔴') {
                    message.channel.send(`${winner} wins!`)
                    midDuel.delete(author)
                    midDuel.delete(member.id)
                    break
                } else if (i == 8) {
                    message.channel.send("It's a tie!")
                    midDuel.delete(author)
                    midDuel.delete(member.id)
                    break
                }
            }
        })
    },
}