module.exports = {
    commands: ['snake'],
    callback: async (message, args, arguments, client) => {
        const { Snake } = require('weky');
        new Snake({
            message: message,
            embed: {
                title: 'Snake',
                color: "#gt4668",
                gameOverTitle: "Game Over",
            },
            emojis: {
                empty: '⬛',
                snakeBody: '🟢',
                food: '🍎',
                up: '⬆️',
                right: '⬅️',
                down: '⬇️',
                left: '➡️',
            },
        }).start()
    },
}