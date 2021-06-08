const axios = require('axios')

module.exports = {
    commands: ['chat'],
    callback: async (message, args, arguments, client) => {
        const input = args.join(' ')
        const id = message.author.id
        axios.get(`https://api.monkedev.com/fun/chat?msg=${input}&uid=${id}`)
            .then(function (response) {
                message.lineReply(response.data.response)
            })
            .catch(function (error) {
                console.log(error);
                message.channel.send('Could not fetch response!')
            })
    },
}