module.exports = {
    commands: ['fight', 'battle'],
    callback: async (message, args, arguments, client) => {
        const opponent = message.mentions.users.first();
        if (!opponent) return message.channel.send(`Please mention who you want to fight`);
        const { fight } = require('weky');
        const battle = new fight({
            client: client,
            message: message,
            acceptMessage: 'Click to fight with <@' + message.author + '>', //message sent to see if opponent accepts
            challenger: message.author, // NOT CHANGEABLE
            opponent: opponent,  // NOT CHANGEABLE
            hitButtonText: 'HIT', // Hit button text (Custom)
            hitButtonColor: 'red', // Hit button color (Custom)
            healButtonText: 'HEAL', // Heal button text (Custom)
            healButtonColor: 'green', // Heal button color (Custom)
            cancelButtonText: 'CANCEL', // Cancel button text (Custom)
            cancelButtonColor: 'blurple', // Cancel button color (Custom)
        });
        battle.start(); // start da battle
    },
}