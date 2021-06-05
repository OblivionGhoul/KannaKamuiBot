module.exports = {
    commands: ['cal', 'calc', 'calculate', 'calculator'],
    callback: async (message, args, arguments, client) => {
        const { Calculator } = require('weky')
        await Calculator(message)
    },
}