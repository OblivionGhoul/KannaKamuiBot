# Snakecord

Make your create snake game on discord easy

# Installation

```bash
npm install snakecord
```

# Features
- Super easy to use 😀


# Examples

```js
const SnakeGame = require('snakecord');
const Discord = require("discord.js")
const client = new Discord.Client()

const snakeGame = new SnakeGame({
    title: 'Snake Game',
    color: "GREEN",
    timestamp: false,
    gameOverTitle: "Game Over"
})

const config = {
    token: "TOKEN",
    prefix: "t!"
}
client.on('ready', () => {
    console.log("Clear Console")
    console.clear()
    console.log('Ready!');
    client.user.setActivity(`${config.prefix}help`)
});

client.on('message', message => {
	if (!message.content.startsWith(config.prefix) || message.author.bot) return;

	const args = message.content.slice(config.prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'test') {
		message.channel.send('Test command work.');
	} else if (command === 'snake' || command === 'snakegame') {
		snakeGame.newGame(message);
	} else if (command === 'help' || command === 'h') {
        const embed = new Discord.MessageEmbed()
        .setTitle("Help Menu")
        .addFields(
            { name: 'test', value: "Check the command handler", inline: true },
            { name: 'snake', value: "Play snake game", inline: true },
            { name: 'help', value: "Show this list", inline: true }
        )

        message.reply(embed)
    }
});

client.login(config.token)
```

# Picture
![1](/images/1.PNG)

![2](/images/2.PNG)

# Authors
* **[1GPEX](https://github.com/1GPEX)** - *Original Idea*
* **[Science Spot](https://github.com/Scientific-Guy)** - *Make a options* 
