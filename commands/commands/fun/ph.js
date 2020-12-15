const Discord = require("discord.js");
const Random = require("srod-v2");
const Fetch = require("node-fetch")
const client = require('alexflipnote.js');
const alexclient = new client('Your-API-Token-Here');

module.exports = {
    commands: ['ph'],
    callback: async (message) => {
        let member = message.member;
        if (!message.content.includes(" ")) {
            return message.channel.send("Please specify what you want to say.")
        }
        message.channel.send('Creating image...')
        let input = message.content.substring(message.content.indexOf(' ') + 1)
        let name = member.user.username
        let image = member.user.displayAvatarURL({ dynamic: true })
        let res = await Fetch(`https://nekobot.xyz/api/imagegen?type=phcomment&username=${name}&image=${image}&text=${input}`);

        let json = await res.json();

        if (!json.message) throw new Error("Something Went Wrong, Try Again Later!");

        let Data = {
            embed: {
                color: "RANDOM",
                image: {
                    url: json.message
                },
            }
        };
        message.channel.send(Data);
    },
}