const Discord = require('discord.js');
const client = new Discord.Client({
    partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});
const fs = require('fs');
client.queue = new Map();
const { badwords } = require("./data.json")
require('dotenv').config();
const { loadCommands } = require('./utils/loadCommands');
const mongoose = require('mongoose');
//Make sure to require this model in your message event or index.js if you use message event on there. in this case im going to require it here
const prefix = require('./models/prefix');

const config = require('./config.json');
client.config = config;
const { GiveawaysManager } = require('discord-giveaways');
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

mongoose.connect(process.env.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

loadCommands(client);

//bot status
client.once('ready', async () => {
    try {
        let serverIn = client.guilds.size;
        console.log('I am ready!');

        function pickStatus() {
            let status = ['over the Inn', 'Welcome to the Inn', 'Simping for Minh']; //change change status
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

//Server stats channel IDs
let stats = {
    serverID: '705454198464053331', //can change channel ID 
    member: "738642924346146817", //can change channel ID 
    bots: "738642927366176905" //can change channel ID 
}

//welcome message
client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(channel => channel.name === '〚☠〛welcome-to-da-inn')
    if (!channel) return;
    channel.send(`Welcome to the Inn, ${member}! Please react in <#730641738615750739> and read <#758406457883361330>.`) //can change channel ID for welcome messages

    const autoRole = member.guild.roles.cache.get('705475155782008936'); //can change auto role ID
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
//checks for certain words
client.on('message', async message => {
    if (message.author.bot) return;
    if (!message.member.hasPermission("BAN_MEMBERS")) {
        let confirm = false;
        var i;
        for (i = 0; i < badwords.length; i++) {
            if (message.content.toLowerCase().includes(badwords[i].toLowerCase()))
                confirm = true;
        }
        if (confirm) {
            message.delete()
            return message.channel.send("You are not allowed to say that.")
        }
    }
});

client.on('message', async (message) => {
    if (message.author.bot) return;

    //Getting the data from the model
    const data = await prefix.findOne({
        GuildID: message.guild.id,
    });

    const messageArray = message.content.split(' ');
    const cmd = messageArray[0];
    const args = messageArray.slice(1);

    //If there was a data, use the database prefix BUT if there is no data, use the default prefix which you have to set!
    if (data) {
        const prefix = data.Prefix;

        if (!message.content.startsWith(prefix)) return;
        const commandfile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)));
        commandfile.run(client, message, args);
    } else if (!data) {
        //set the default prefix here
        const prefix = "-";

        if (!message.content.startsWith(prefix)) return;
        const commandfile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)));
        commandfile.run(client, message, args);
    }
})

client.login(process.env.token);