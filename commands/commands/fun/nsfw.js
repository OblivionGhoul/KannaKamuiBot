const { NekoBot } = require("nekobot-api");
const api = new NekoBot();

module.exports = {
    commands: ['nsfw'],
    callback: async (message, args) => {
        let input = message.content.substring(message.content.indexOf(' ') + 1)
        if (!message.channel.nsfw) {
            return message.channel.send('This command only works in nsfw channels.')
        }
        try {
            const image = await api.get(input);
            message.channel.send(image);
        } catch (err) {
            console.log(err)
            message.channel.send("Please correctly specify the nsfw image:\n`hass, hmidriff, pgif, 4k, hentai, hneko, hkitsune, anal, hanal, gonewild, ass, pussy, thigh, hthigh, paizuri, tentacle, boobs, hboobs`.")
        }
    }
}