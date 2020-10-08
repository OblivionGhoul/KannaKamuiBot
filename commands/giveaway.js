const ms = require('ms');

module.exports = {
    name: "giveaway",
    description: "Starts a giveaway",
    aliases: [''],
    async execute(client, message, args) {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You are not allowed to start giveaways');

        let channel = message.mentions.channels.first();

        if (!channel) return message.channel.send('Please provide a channel (ex: -giveaway [#channelname][time{s,m,h}][# of winners][giveaway prize]');

        let giveawayDuration = args[1];

        if (!giveawayDuration || isNaN(ms(giveawayDuration))) return message.channel.send('Pleae provide a valid duration (ex: -giveaway [#channelname][time{s,m,h}][# of winners][giveaway prize]');

        let giveawayWinners = args[2];

        if (isNaN(giveawayWinners) || (parseInt(giveawayWinners) <= 0)) return message.channel.send('Please provide a valid number of winners! (ex: -giveaway [#channelname][time{s,m,h}][# of winners][giveaway prize]');

        let giveawayPrize = args.slice(3).join(" ");

        if (!giveawayPrize) return message.channel.send('Please enter the giveaway prize (ex: -giveaway [#channelname][time{s,m,h}][# of winners][giveaway prize]');

        client.giveawaysManager.start(channel, {
            time: ms(giveawayDuration),
            prize: giveawayPrize,
            winnerCount: giveawayWinners,
            hostedBy: client.config.hostedBy ? message.author : null,

            messages: {
                giveaway: (client.config.everyoneMention ? "@everyone\n\n" : "") + "🎊 NEW GIVEAWAY 🎊",
                giveawayEnded: (client.config.everyoneMention ? "@everyone\n\n" : "") + "🎊 GIVEAWAY ENDED 🎊",
                timeRemaining: "Time remaining: **{duration}**",
                inviteToParticipate: "React with 🎉 to enter",
                winMessage: "Congratulations {winners}, you won **{prize}**! Please wait for a dm from OblivionGhoul.",
                embedFooter: "Weekly giveaway!",
                noWinner: "Couldn't determine a winner",
                hostedBy: "Hosted by {user}",
                winners: "winner(s)",
                endedAt: "Ends at",
                units: {
                    seconds: "seconds",
                    minutes: "minutes",
                    hours: "hours",
                    days: "days",
                    pluralS: false
                }
            }
        })

        message.channel.send(`Giveaway starting in ${channel}`);
    }
}