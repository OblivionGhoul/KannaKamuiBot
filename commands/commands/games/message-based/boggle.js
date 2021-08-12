const BOGGLE = require('pepper-boggle')

    module.exports = {
    name: "boggle",
    category: "games",
    description: "Play the boggle game!",
    usage: "boggle",
    execute: async (client, message, args) => {

const game = new BOGGLE({
      message: message,
      stopCommand: "stop"
    })

    message.channel.send('The boogle game is about to start! Type **stop** to stop it!')
    
    game.start()

    }
    }
