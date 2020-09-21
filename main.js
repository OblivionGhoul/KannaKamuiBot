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
client.once('ready', async() => {
    try {
        let serverIn = client.guilds.size;
        console.log('I am ready!');

        function pickStatus() {
            let status = ['Simping for Minh', 'Why is Minh so cute?', 'Welcome to the Inn'];
            let Status = Math.floor(Math.random() * status.length);

            client.user.setActivity(status[Status], {
                type: "WATCHING"
            });
        };
        setInterval(pickStatus, 5000);
    } catch (err) {
        console.log(error)
    }
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
    } else if (command == 'say') {
        client.commands.get('say').execute(message, args);
    } else if (command == 'user-info') {
        client.commands.get('user-info').execute(message, args);
    } else if (command == 'josh') {
        client.commands.get('josh').execute(message, args);
    } else if (command == 'hanna') {
        client.commands.get('hanna').execute(message, args);
    } else if (command == 'jake') {
        client.commands.get('jake').execute(message, args);
    } else if (command == 'info') {
        client.commands.get('info').execute(message, args);
    } else if (command == 'cal') {
        client.commands.get('cal').execute(message, args);
    }
});

client.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");
    switch (args[0]) { 
        case 'help':
            message.author.send('Ask Minh');
        break;
    }
});
client.login(process.env.token);