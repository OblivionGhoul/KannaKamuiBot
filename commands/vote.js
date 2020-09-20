const { DiscordAPIError } = require("discord.js");

module.exports = {
    name: 'vote',
    description: "says a message",
    execute(message, args) {
        message.channel.send('Would u like to create a poll?');

        const filter = m => m.author.id === message.author.id;

        try {
            let msg = await message.channel.awaitMessages(filter, {
                maxMatches: 1,
                time: '15000',
                error: ['Time'],
            })
            if (msg.first().content === 'yes') {
                message.channel.send('What question do you want to ask?')
                try {
                    let msg = await message.channel.awaitMessages(filter, {
                        maxMatches: 1,
                        time: '15000',
                        error: ['Time'],
                    })     
                    let firstTopic = msg.first().content
                    message.channel.send('Enter your first point.')
                    try {
                        let msg = await message.channel.awaitMessages(filter, {
                            maxMatches: 1,
                            time: '15000',
                            error: ['Time'],
                        })
                        let secondTopic = msg.first().content;
                        message.channel.send('Enter your second point.');
                        try {
                            let msg = await message.channel.awaitMessages(filter, {
                                maxMatches: 1,
                                time: '15000',
                                error: ['Time'],
                            })
                            let secondTopic = msg.first().content;
                            const voteEmbed = new Discord.RichEmbed()
                                .setTitle(embedTopic)
                                .addField(embedTopic, `\:red_circle: ${firstTopic}`)
                                .addField(embedTopic, `\:green_circle: ${secondTopic}`)
                            
                            message.channel.send(voteEmbed).then(msg => msg.react('🔴').then(reaction => reaction.message.react('🟢')).catch(err => console.log(err)));
                        } catch (ERROR) {
                            message.channel.send('You did not respond fast enough.');
                            console.log(ERROR);
                        } 
                    } catch (ERROR) {
                        message.channel.send('You did not respond fast enough.');
                        console.log(ERROR);
                    }
                } catch (ERROR) {
                    message.channel.send('You did not respond fast enough.');
                    console.log(ERROR);
                }
            }
        } catch {
            message.channel.send('You did not respond fast enough.');
            console.log(ERROR);
            
        }
    }
}