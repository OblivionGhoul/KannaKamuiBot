module.exports = {
    commands: ['tic-tac-toe', 'ttt', 'tictactoe'],
    callback: async (message, client) => {
        const opponent = message.mentions.users.first();
        if (!opponent) return message.channel.send(`Please mention who you want to challenge at tictactoe.`);
        const { TicTacToe } = require('weky')
        const game = new TicTacToe({
            message: message,
            opponent: opponent, // opponent
            xColor: 'red', // x's color
            oColor: 'blurple', //zero's color
            xEmoji: '❌',  //t he x emoji
            oEmoji: '0️⃣',// the zero emoji
        })
        game.start()// start da game
    },
}