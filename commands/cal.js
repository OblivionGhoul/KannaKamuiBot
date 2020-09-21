module.exports = {
    name: 'cal',
    description: "cal",
    execute(message, args) {
        let method = args[0];
        let firstNumber = Number(args[1]);
        let secondNumber = Number(args[2]);
        const operations = ['add', 'subtract', 'multiply', 'divide'];

        if (!method) return message.reply('Please state an operation');

        if (!operations.includes(method)) return message.reply('When choosing an operation, please select add, subtract, multiply, or divide');

        if (!args[1]) return message.reply('Please state 2 numbers for calculation');

        if (!args[2]) return message.reply('Please state number for calculation');

        if (isNaN(firstNumber)) return message.reply('The first number selected is not a number.');

        if (isNaN(secondNumber)) return message.reply('The second number selected is not a number.');

        if (method === 'add') {
            let doMath = firstNumber + secondNumber
            message.channel.send(`${firstNumber} + ${secondNumber} = ${doMath}`);
        }

        if (method === 'subtract') {
            let doMath = firstNumber - secondNumber
            message.channel.send(`${firstNumber} - ${secondNumber} = ${doMath}`);
        }

        if (method === 'multiply') {
            let doMath = firstNumber * secondNumber
            message.channel.send(`${firstNumber} x ${secondNumber} = ${doMath}`);
        }

        if (method === 'divide') {
            let doMath = firstNumber / secondNumber
            message.channel.send(`${firstNumber} / ${secondNumber} = ${doMath}`);
        }
    }
  }