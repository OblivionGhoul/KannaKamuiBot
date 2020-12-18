const ms = require('ms')

module.exports = {
    commands: ['tempmute'],
    callback: async (message) => {
        let messageArray = message.content.split(" ");
        let args1 = messageArray.slice(1);
        let cmd = messageArray[0];

        if (cmd === '-tempmute') {
            if (message.member.hasPermission('MANAGE_MESSAGES')) {
                var member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args1[0]));
                if (!member) return message.reply('Please Provide a Member to TempMute.')

                let mainrole = message.guild.roles.cache.find(role => role.name === "Inn Noob");
                let role = message.guild.roles.cache.find(role => role.name === "Inn Guest");

                if (!role) return message.reply("Couldn't find the correct role.")

                let time = args1[1];
                if (!time) {
                    return message.reply("Please specify a time.");
                }

                member.roles.remove(mainrole.id)
                member.roles.add(role.id);

                message.channel.send(`@${member.user.tag} has now been muted for ${ms(ms(time))}`)

                setTimeout(function () {
                    member.roles.add(mainrole.id)
                    member.roles.remove(role.id);
                    message.channel.send(`@${member.user.tag} has been unmuted.`)
                }, ms(time));

            } else {
                return message.channel.send('You do not have permissions for this command.')
            }
        }
    }
}