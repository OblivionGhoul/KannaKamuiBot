const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');

module.exports = {
    commands: ['banner'],
    callback: async (message, args, arguments, client) => {
        const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

        let uid = user.id

        let response = fetch(`https://discord.com/api/v9/users/${uid}`, {
            method: 'GET',
            headers: {
                Authorization: `Bot ${process.env.token}`
            }
        })

        let receive = ''
        let banner = 'https://cdn.discordapp.com/attachments/829722741288337428/834016013678673950/banner_invisible.gif'

        response.then(a => {
            if (a.status !== 404) {
                a.json().then(data => {
                    receive = data['banner']

                    if (receive !== null) {

                        let response2 = fetch(`https://cdn.discordapp.com/banners/${uid}/${receive}.gif`, {
                            method: 'GET',
                            headers: {
                                Authorization: `Bot ${process.env.token}`
                            }
                        })
                        let statut = ''
                        response2.then(b => {
                            statut = b.status

                            banner = `https://cdn.discordapp.com/banners/${uid}/${receive}.gif?size=1024`
                            if (statut === 415) {
                                banner = `https://cdn.discordapp.com/banners/${uid}/${receive}.png?size=1024`
                            }

                        })
                    }
                })
            }
        })

        setTimeout(() => {
            let embed = new MessageEmbed()
                .setColor('RANDOM')
                .setImage(banner)
            message.channel.send(embed)
        }, 1000)
    },
}