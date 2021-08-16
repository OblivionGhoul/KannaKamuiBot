const Discord = require('discord.js')
const figlet = require('figlet');

module.exports = {
    commands: ['ascii'],
    callback: async (message, args) => {
        if (!args[0]) return message.channel.send('Please provide some text');

        msg = args.join(" ");

        if(args > 20) return message.channel.send('Please provide text under 20 charecters!')

        figlet.text(msg, function (err, data) {
            if (err) {
                console.log('Something went wrong');
                console.dir(err);
            }
            if (data.length > 2000) return message.channel.send('The message was too long to be sent. Try something shorter.')

            message.channel.send('```' + data + '```')
        })
    },
}