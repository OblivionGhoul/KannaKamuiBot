const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch') // npm i node-fetch


module.exports = {
  command: "npm",
  callback: async (client, message, args) => { 

        const npm = args[0]
        if(!npm) return message.reply('Please tell a package to search.') // If No Packge In Searched.

        let response
        try {
            response = await fetch('https://api.npms.io/v2/search?q=' + args[0]).then(res => res.json()) // Search For Package
        }
        catch (e) {
            return message.reply('An Error Occured with the api, Try Again Later.')    
        }
        try {
        const pkg = response.results[0].package
        const embed = new MessageEmbed()
        .setTitle(pkg.name)
        .setColor('RANDOM')
        .setURL(pkg.links.npm)
        .setThumbnail('https://images-ext-1.discordapp.net/external/JsiJqfRfsvrh5IsOkIF_WmOd0_qSnf8lY9Wu9mRUJYI/https/images-ext-2.discordapp.net/external/ouvh4fn7V9pphARfI-8nQdcfnYgjHZdXWlEg2sNowyw/https/cdn.auth0.com/blog/npm-package-development/logo.png')
        .setDescription(pkg.description)
        .addField('Author:-', pkg.author ? pkg.author.name : 'None') // 'None' Because If No Author Is Their
        .addField('Version:-', pkg.version)
        .addField('Repository:-', pkg.links.repository ? pkg.links.repository : 'None')  // 'None' Because If No Repository Is Their
        .addField('Maintainers:-', pkg.maintainers ? pkg.maintainers.map(e => e.username).join(', ') : 'None') // 'None' Because If No Maintainer Are Their
        .addField('Keywords:-', pkg.keywords ? pkg.keywords.join(', ') : 'None') // 'None' Because If No keyWords Are Their
        .setTimestamp()
        message.channel.send(embed)
        }
        catch (e) {
            message.reply('Thats Not A Valid Package.') // If No Packges Found
        }
    }
}
