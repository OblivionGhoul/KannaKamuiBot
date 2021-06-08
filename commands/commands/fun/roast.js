const axios = require('axios')

module.exports = {
    commands: ['roast', 'burn'],
    callback: async (message, args, arguments, client) => {
        const mentionedMember = message.mentions.members.first();
        if (!mentionedMember) return message.channel.send('Please mention a valid user to roast!');
        axios.get(`https://evilinsult.com/generate_insult.php?lang=en&amp;type=json`)
            .then(function (response) {
                message.channel.send(`${mentionedMember.user}, ${response.data}`)
            })
            .catch(function (error) {
                console.log(error);
                message.channel.send('Could not fetch response!')
            })
    },
}