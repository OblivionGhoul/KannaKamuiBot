module.exports = {
    commands: ['pog', 'poggers'],
    callback: async (message) => {
        const gif = [
            'https://tenor.com/boUmz.gif',
            'https://tenor.com/bqzIv.gif',
            'https://tenor.com/boUmw.gif',
            'https://tenor.com/bn56o.gif',
            'https://tenor.com/bo5So.gif',
            'https://tenor.com/bppgK.gif',
            'https://tenor.com/bnTWv.gif',
            'https://tenor.com/bo9uV.gif',
            'https://tenor.com/bq1GW.gif',
            'https://tenor.com/boXZj.gif',
            'https://tenor.com/boUmr.gif',
            'https://tenor.com/bnU3l.gif',
            'https://tenor.com/bo5Sp.gif',
            'https://tenor.com/bkmre.gif',
        ]
        let index = (Math.floor(Math.random() * Math.floor(gif.length)));
        message.channel.send(gif[index])
    }
}