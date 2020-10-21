const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const { default_prefix } = require('./config.json');
const db = require('quick.db');
client.queue = new Map();
const { badwords } = require("./data.json")
//giveaways
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
//finding commands
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
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
    let newMember = message.mentions.users.first() || message.author
    let avatar = member.displayAvatarURL()
    let messageEmbed = new Discord.MessageEmbed()
    if (!channel) return;
    let messageEmbed = new Discord.MessageEmbed()
        .setTitle(`Welcome to The Inn, ${newMember}!`)
        .setDescription(`Please react in <#730641738615750739> to get your game roles and please read <#758406457883361330>.`)
        .setColor("RANDOM")
        .setFooter("Bot made by OblivionGhoul#5842")
        .setThumbnail(avatar)
        .setTimestamp()
    channel.send(messageEmbed)

    const autoRole = member.guild.roles.cache.get('705475155782008936'); //can change auto role ID
    if (!autoRole) return;
    member.roles.add(autoRole.id);
    //update server count
    if (member.guild.id !== stats.serverID) return;
    client.channels.cache.get(stats.member).setName(`Members: ${member.guild.members.cache.filter(m => !m.user.bot).size}`);
    client.channels.cache.get(stats.bots).setName(`Bots: ${member.guild.members.cache.filter(m => m.user.bot).size}`);
})
//leave message 
client.on('guildMemberRemove', member => {
    const channel = member.guild.channels.cache.find(channel => channel.name === '〚☠〛welcome-to-da-inn')
    if (!channel) return;

    channel.send(`Hope you enjoyed your stay, ${member}! :(`)
    //update server count
    if (member.guild.id !== stats.serverID) return;
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
            return message.channel.send("Stop fucking cussing bitch.")
        }
    }
});
//command handler
client.on('message', async message => {
    //gets prefix from default
    let prefix = await db.get(`prefix_${message.guild.id}`);
    //sets prefix default
    if (prefix === null) prefix = default_prefix;
    //ignores messages that do not start with prefix
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    //looks for correct commands
    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    try {
        command.execute(client, message, args);
    } catch (error) {
        console.error(error);
    }
});
//Getting bot token
client.login(process.env.token);