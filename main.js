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
            let status = ['over the Inn', 'Welcome to the Inn', 'Simping for Minh'];
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

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(channel => channel.name === '〚☠〛welcome-to-da-inn')
    if (!channel) return;
    channel.send(`Welcome to the Inn, ${member}! Please react in game roles and read the rules.`)

    const autoRole = member.guild.roles.cache.get('705475155782008936');
    if(!autoRole) return;
    member.roles.add(autoRole.id);
})

client.on('guildMemberRemove', member => {
    const channel = member.guild.channels.cache.find(channel => channel.name === '〚☠〛welcome-to-da-inn')
    if (!channel) return;

    channel.send(`Hope you enjoyed your stay, ${member}! :(`)
})

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
    } else if (command == 'vote') {
        client.commands.get('vote').execute(message, args);
    } else if (command == 'ban') {
        client.commands.get('ban').execute(message, args);
    } else if (command == 'kick') {
        client.commands.get('kick').execute(message, args);
    } else if (command == 'roast') {
        client.commands.get('roast').execute(message, args);
    } else if (command == 'meme') {
        client.commands.get('meme').execute(message, args);
    } else if (command == 'rules') {
        client.commands.get('rules').execute(message, args);
    } else if (command == 'commands') {
        client.commands.get('commands').execute(message, args);
    } else if (command == 'server') {
        client.commands.get('server').execute(message, args);
    } else if (command == 'insta') {
        client.commands.get('insta').execute(message, args);
    } else if (command == 'purge') {
        client.commands.get('purge').execute(message, args);
    } else if (command == 'poll') {
        client.commands.get('poll').execute(message, args);
    } else if (command == 'tempmute') {
        client.commands.get('tempmute').execute(message, args);
    } else if (command == 'ticket') {
        client.commands.get('ticket').execute(message, args);
    } else if (command == 'close') {
        client.commands.get('close').execute(message, args);
    } else if (command == 'fremont') {
        client.commands.get('fremont').execute(message, args);
    }
});

client.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");
    switch (args[0]) { 
        case 'help':
            message.author.send('Do -commands to get the list of commands for this bot.');
        break;
    }
});

client.login(process.env.token);