const { exec } = require('child_process')

module.exports = {
    commands: ['execute'],
    callback: async (message, args) => {
        if (message.author.id !== '298589600132366339') return message.channel.send('You cannot use this command.')
        exec(args.join(' '), (error, stdout) => {
            const response = stdout || error;
            message.channel.send(response, {split: true, code: true});
        });
    }
}