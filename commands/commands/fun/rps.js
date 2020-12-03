const Discord = require("discord.js")

module.exports = {
    commands: 'rps',
    callback: (message, args, client, user) => {
        const rps = ['scissors', 'rock', 'paper'];
        const res = ['Scissors :scissors:', 'Rock :rock:', 'Paper :newspaper:'];
        let userChoice;
        if (args.length) userChoice = args[0].toLowerCase();
        if (!rps.includes(userChoice)) 
            return message.channel.send('Please enter rock, paper, or scissors (ex: -rps rock)');
        userChoice = rps.indexOf(userChoice);
        const botChoice = Math.floor(Math.random() * 3);
        let result;
        if (userChoice === botChoice) result = 'It\'s a draw!';
        else if (botChoice > userChoice || botChoice === 0 && userChoice === 2) result = `**The Bot** wins!`;
        else result = `**${message.member.displayName}** wins!`;
        const embed = new Discord.MessageEmbed()
            .setTitle(`${message.member.displayName} vs. The Bot`)
            .addField('Your Choice:', res[userChoice], true)
            .addField(`The Bot\'s Choice`, res[botChoice], true)
            .addField('Result', result, true)
            .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor(message.guild.me.displayHexColor);
        message.channel.send(embed);
    },
}