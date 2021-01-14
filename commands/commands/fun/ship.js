const Discord = require('discord.js');
shipverdict = [
    "Not a slightest chance. You should Give up.",
    "The risk of getting yourself a cancer is greater than your ship.",
    "There is a great chance, you two should be considered love-birds",
    "You should be married now!",
    "You may have already found your soulmate with this nearly perfect score",
    "The fate has decided!"];
shiptitle = [
    "God has given up on you. :black_heart::black_heart::black_heart::black_heart::black_heart:",
    "In other words, still no chance. :heart::black_heart::black_heart::black_heart::black_heart:",
    "You make an average pair. :heart::heart::black_heart::black_heart::black_heart:",
    "Hurry! We need a church!. :heart::heart::heart::black_heart::black_heart:",
    "So Sweet!. :heart::heart::heart::heart::black_heart:",
    "PERFECT MATCH!. :heart::heart::heart::heart::heart:"
];
shipcolor = [
    "0xec0e0e",
    "0xf38f09",
    "0xfce405",
    "0xfce405",
    "0x1624da",
    "0x28fa12"
];
shipfooter = [
    "Being loner is better than being desperate.",
    "If you run out of options, just ask someone who is willing to take you.",
    "Your attempt to find a partner at this point will send you to your doom.",
    "Just love, love, love. Yes. Love. I didn't say Ai.",
    "There's nothing more I could say, you're totally the one!",
    "Your lucky meter also goes above 100%."
];

module.exports = {
    commands: ['ship'],
    callback: async (message) => {
        if (message.mentions.members.size <= 1) return message.channel.send(`Please mention 2 users to rate`)
        if (message.mentions.members.size > 2) return message.channel.send(`Please only mention 2 users`)
        let sIndexer;
        let shipmeter = Math.floor(Math.random() * 99) + 1;
        if (shipmeter < 21) {
            sIndexer = 0
        } else if ((shipmeter > 20) && (shipmeter < 41)) {
            sIndexer = 1
        } else if ((shipmeter > 40) && (shipmeter < 61)) {
            sIndexer = 2
        } else if ((shipmeter > 60) && (shipmeter < 81)) {
            sIndexer = 3
        } else if ((shipmeter > 80) && (shipmeter < 100)) {
            sIndexer = 4
        } else sIndexer = 5
        let embed = new Discord.MessageEmbed().setColor(shipcolor[sIndexer]).setFooter(shipfooter[sIndexer])
        if (message.mentions.members.size === 1) {
            embed.setAuthor(`${message.member.displayName} ships ${message.mentions.members.first().displayName}!`)
                .setDescription(`Ship Result: ${shiptitle[sIndexer]}`)
                .addField(`Ship Percentage Meter: ${shipmeter}%`, shipverdict[sIndexer])
        } else if (message.mentions.members.size === 2) {
            let otoko = message.mentions.members.first()
            let otome = message.mentions.members.last()
            embed.setAuthor(`${message.member.displayName} ships ${otoko.displayName} and ${otome.displayName}!`)
                .setDescription(`Ship Result: ${shiptitle[sIndexer]}`)
                .addField(`Ship Percentage Meter: ${shipmeter}%`, shipverdict[sIndexer])
        }
        return message.channel.send(embed).catch(console.error)
    }
}