const SnakeGame = require('snakecord');
const Embed = require('discord.js')

module.exports = {
    commands: ['snake'],
    callback: async (message, author, guild, settings) => {
        const snakeGame = new SnakeGame({
            title: '🐍 Snake Game 🐍',
            color: "#ff3333",
            timestamp: true,
            gameOverTitle: "🐍 Game Over 🐍"
        })
        snakeGame.newGame(message);
    },
}