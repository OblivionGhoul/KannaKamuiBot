const { exec } = require('child_process')

module.exports = {
    commands: ['execute'],
    callback: async (message, args) => {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You need Admin perms to use this command.')
        exec(args.join(' '), (error, stdout) => {
            const response = stdout || error;
            message.channel.send(response, {split: true, code: true});
        });
    }
}