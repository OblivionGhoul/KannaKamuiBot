const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('I am ready!');
    client.user.setActivity("Simping for Minh");
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLocaleLowerCase();

    if(command === 'ping') {
        client.commands.get('ping').execute(message, args);
    } else if (command == 'minh') {
        client.commands.get('minh').execute(message, args);
    } else if (command == 'kay') {
        client.commands.get('kay').execute(message, args);
    } else if (command == 'bryce') {
        client.commands.get('bryce').execute(message, args);
    } else if (command == 'ethan') {
        client.commands.get('ethan').execute(message, args);
    }
});

client.login(process.env.token);