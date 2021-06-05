module.exports = {
    commands: ['cw', 'chaoswords'],
    callback: async (message, args, arguments, client) => {
        const { ChaosWords } = require("weky")
        var randomWords = require('random-words');
        const words = randomWords(2) // generating 2 words
        await new ChaosWords({
            message: message,
            maxTries: 8, //max number  of user's tries (ends when reach limit)
            charGenerated: 20, //length of sentence (small length might throw error)
            words: words, //words (array) => ['word']
            embedTitle: 'Chaos Words!', //understable
            embedFooter: 'Find the words in the sentence!',
            embedColor: 'RANDOM'
        }).start()
    },
}