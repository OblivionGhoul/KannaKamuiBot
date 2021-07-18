const { NekoBot } = require("nekobot-api");
const api = new NekoBot();

module.exports = {
    commands: ['kanna'],
    callback: async (message, args) => {
        try {
            const image = await api.get("kanna");
            message.channel.send(image);
        } catch (err) {
            console.log(err)
        }
    }
}