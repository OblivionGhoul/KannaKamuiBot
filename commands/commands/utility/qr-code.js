const { MessageEmbed, MessageAttachment } = require('discord.js')

module.exports = {
    commands: ['qr', 'qrcode', 'qr-code'],
    callback: async (message, args) => {
        let weblink = (args[0])
        let link = `http://api.qrserver.com/v1/create-qr-code/?data=${weblink}&size=200x200`

        if (!weblink) return message.channel.send('Please provide a link.')
        if (require('is-url')(weblink)) {
            const attachment = new MessageAttachment(link, 'qrcode.png');
            const embed = new MessageEmbed()
                .setTitle(`Generated QRCode!`)
                .attachFiles(attachment)
                .setColor('RANDOM')
                .setImage('attachment://qrcode.png')
            message.channel.send(embed);
        } else { message.channel.send('Error! The input is not a valid link! Please make sure it is a valid link.\nWhen inputting the link please add `https://`!'); }
    }
}   