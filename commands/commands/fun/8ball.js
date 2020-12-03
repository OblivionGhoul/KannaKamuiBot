const answers = [
    'Maybe.',
    'Certainly not.',
    'I hope so.',
    'Not in your wildest dreams.',
    'There is a good chance.',
    'Quite likely.',
    'I think so.',
    'I hope not.',
    'I hope so.',
    'Never!',
    'Ahaha! Really?!?',
    'Pfft.',
    'Sorry, bucko.',
    'Hell, yes.',
    'Hell to the no.',
    'The future is bleak.',
    'The future is uncertain.',
    'I would rather not say.',
    'Who cares?',
    'Possibly.',
    'Never, ever, ever.',
    'There is a small chance.',
    'Yes!',
    'Don\'t ask me this ever again.',
    'Don\'t worry about it.',
    'I gotta go pet my fish...'
];

module.exports = {
    commands: ['8ball'],
    callback: async (message, question) => {
        return message.reply(question.join(' ').endsWith('?') ?
            `🎱 ${answers[Math.floor(Math.random() * answers.length)]}` :
            '🎱 That doesn\'t seem to be a question, please try again! (Remember to add a question mark after the question.)');
    },
}