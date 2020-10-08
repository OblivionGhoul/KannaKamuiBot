const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const {default_prefix} = require('./config.json');
const db = require('quick.db');
client.commands = new Discord.Collection();
client.queue = new Map();
//giveaways
const config = require('./config.json');
client.config = config;
const {GiveawaysManager} = require('discord-giveaways');
client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./giveaways.json",
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false,
        exemptPermissions: [],
        embedColor: '#FF0000',
        reaction: '🎉',
    }
});

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
//bot status
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
let stats = {
    serverID: '705454198464053331',
    member: "738642924346146817",
    bots: "738642927366176905"
}

//welcome message
client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(channel => channel.name === '〚☠〛welcome-to-da-inn')
    if (!channel) return;
    channel.send(`Welcome to the Inn, ${member}! Please react in game roles and read the rules.`)

    const autoRole = member.guild.roles.cache.get('705475155782008936');
    if(!autoRole) return;
    member.roles.add(autoRole.id);
//update server count
    if(member.guild.id !== stats.serverID) return;
    client.channels.cache.get(stats.member).setName(`Members: ${member.guild.members.cache.filter(m => !m.user.bot).size}`);
    client.channels.cache.get(stats.bots).setName(`Bots: ${member.guild.members.cache.filter(m => m.user.bot).size}`);
})
//leave message 
client.on('guildMemberRemove', member => {
    const channel = member.guild.channels.cache.find(channel => channel.name === '〚☠〛welcome-to-da-inn')
    if (!channel) return;

    channel.send(`Hope you enjoyed your stay, ${member}! :(`)
//update server count
    if(member.guild.id !== stats.serverID) return;
    client.channels.cache.get(stats.member).setName(`Members: ${member.guild.members.cache.filter(m => !m.user.bot).size}`);
    client.channels.cache.get(stats.bots).setName(`Bots: ${member.guild.members.cache.filter(m => m.user.bot).size}`);
})
//command handler
client.on('message', async message => {
    //gets prefix
    let prefix = await db.get(`prefix_${message.guild.id}`);
    //sets prefix default
    if (prefix === null) prefix = default_prefix;
    //ignores messages that do not start with prefix
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    
    try {
        command.execute(client, message, args);
    } catch (error) {
        console.error(error);
    }
    //help command
    let args1 = message.content.substring(prefix.length).split(" ");
    switch (args1[0]) { 
        case 'help':
            message.author.send('Do -commands to get the list of commands for this bot. You can also do -ticket to get support in Minh\'s Inn.');
        break;
    }
});
client.login(process.env.token);