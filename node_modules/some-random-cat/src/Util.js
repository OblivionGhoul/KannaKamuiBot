const config = require('../package.json')

class Util {
    constructor() {
        throw new Error('SomeRandomCat > You may not instantiate this class.')
    }

    static info = {
        version: config.version,
        author: config.author,
        repo: config.repository,
        description: config.description
    }
    
    static async test() {
        console.log('SomeRandomCat > Doing a test run...')
        const timePrevious = Date.now()
        const somethingRandom = require('../index').Random
        const timeNow = Date.now()
        const latency = timeNow - timePrevious
        somethingRandom.getCat().then(console.log(`SomeRandomCat > After doing the test run, it seems like the latency is ${latency + Math.random
        ()}ms. You should not be facing any issue. If you do, please let us know in our support server.`))
        .catch(`SomeRandomCat > After doing the test run, it seems like we have an issue on our end. We will try to fix it as soon as possible.`)
    }
}

module.exports = Util