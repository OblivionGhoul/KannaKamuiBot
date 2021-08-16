  
const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch') // npm i node-fetch

module.exports = {
  name: ["github", 'gh'],
    callback: async (client, message, args) => { 

        const name = args.join(' ')
        if(!name) return message.reply('Please provide a user to search.') // If User Is Not Found On GitHub
        const url = `https://api.github.com/users/${name}` // Link From BOT Will Get Info

        let response
        try{
            response = await fetch(url).then(res => res.json())
        }
        catch(e) {
            return message.reply('An error accured in the api. Please try again later..')
        }

        try{
        const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`${response.login}(${response.id})`)
        .setURL(response.html_url)
        .setThumbnail(response.avatar_url)
        .setDescription(response.bio ? response.bio : 'No Bio') // Bio Of User Searched
        .addField('Public Repositories:-', response.public_repos.toLocaleString() || "none") // Repos Of User Searched
        .addField('Followers:-', response.followers.toLocaleString()) // Followers Of User Searched
        .addField('Following:-', response.following.toLocaleString()) // How Many Following Of User Searched
        .addField('Email:-', response.email ? response.email : 'No Email') // Email Of User Searched
        .addField('Company:-', response.company ? response.commands : 'No Company') // Company Of User Searched
        .addField('Location:-', response.location ? response.location : 'No Location') // Location Of User Searched
        message.channel.send(embed)
        }
        catch(e) {
            return message.channel.send('Cannot find that user.')
        }

    }
}
