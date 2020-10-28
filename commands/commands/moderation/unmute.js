module.exports = {
    commands: ['unmute'],
    callback: async (message) => {
        if (!message.member.permissions.has("BAN_MEMBERS")) {
            return message.channel.send('You do not have permissions for this command.');
        } else {
            let memberId = message.content.substring(message.content.indexOf(' ') + 1);
            let member = message.guild.members.cache.get(memberId);
            if (member) {
                if (member.hasPermission('BAN_MEMBERS') && !message.member.hasPermission('ADMINISTRATOR')) {
                    message.channel.send("You cannot mute that user.")
                } else {
                    let mutedRole = message.guild.roles.cache.get('757111236415586305');
                    let mainRole = message.guild.roles.cache.get('705475155782008936');
                    if (mutedRole) {
                        member.roles.remove(mutedRole)
                        member.roles.add(mainRole)
                        message.channel.send(`${member} has been successfully unmuted.`)
                    } else {
                        message.channel.send('Cannot find the correct role.')
                    }
                }
            } else {
                message.channel.send("Member not found, please enter a user ID.")
            }
        }
    }
}