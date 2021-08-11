const Discord = require('discord.js')

module.exports = {
    commands: ['mute'],
    callback: async (message, args, arguments, client) => {
      
        if(!message.guild.me.permissions.has("MANAGE_ROLES")) {
           return message.channel.send("Sorry, but I must have permission **Manage roles** to add the user a muted role.")
        }

        if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("You don\'t have permission to run this command. (**Manage Roles**)");

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!user) message.channel.send("This user can't be found anywhere in this server");

        if(user.id === message.author.id) return message.channel.send("You cannot mute yourself dude, ask someone else to do that.");

        let role = message.guild.roles.cache.find(x => x.name === "Muted");

        if(!role) return message.channel.send("Cannot find the muted role. (To set the role, please use **(prefix)setmute**))");

        let reason = args.slice(1).join(" ");
        if(reason === null) reason = "Unspecified"

        user.roles.add(role);

        await message.channel.send(`${user} has been muted for the following reason: ${reason}`)
        user.send(`Hello there. You have been muted from ${message.guild.name} for the following reason: ${reason}`);

        const logs = message.guild.channels.cache.find(channel => channel.name === "logs")

        if(!logs) { return; }
        if(logs) { /*
        const linkE = new Discord.MessageEmbed()
        .setTitle('Missing Permission')
        .setDescription('Don\'t worry! The user WAS MUTED. Just us can\'t log it into the logs channel.')
        .addField('Missing permission to **send embeds**.', 'We need this to make the channel look better, and because the embeds have more customobility.')
        .setTimestamp()

        if(!logs.me.permissions.has('LINK_EMBEDS')) {
           return  message.channel.send(linkE)
        }

        const messageE = new Discord.MessageEmbed()
        .setTitle('Missing Permission')
        .setDescription('Don\'t worry! The user WAS MUTED. Just us can\'t log it into the logs channel.')
        .addField('Missing permission to **send messages**.', 'We need this to be able to log what happend, and if you don\'t wan\'t us to log, please re-name the channel or make it invisible for the bot.')
        .setTimestamp()

        if(!logs.me.permissions.has('SEND_MESSAGES')) {
           return message.channel.send(messageE)
        } */
        if(message.guild.channels.cache.find(channel => channel.name === "logs")) {
        
        const muteLogs = new Discord.MessageEmbed()
        .setTitle('Mute Case')
        .setDescription('A user was muted.')
        .addField('Muted:', user)
        .addField('Muted By:', message.author)
        .addField('Reason:', reason) 
        logs.send(muteLogs)
        .setTimestamp()
        } else if(!message.guild.channels.cache.find(channel => channel.name === "logs")) return;
    }
    }
}
