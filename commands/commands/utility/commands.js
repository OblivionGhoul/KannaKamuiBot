const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    commands: ['commands', 'help'],
    callback: async (message) => {
        const vote = new Discord.MessageEmbed()
            .setTitle('Voting help')
            .setDescription('To vote, do -vote. It will then open a voting channel for you. Please state who you want to vote for or who you want to nominate in that channel.')
            .addField('For Admins', 'Using this command in the vote channels will give you options (ex: -vote-info)')

        const inn = new Discord.MessageEmbed()
            .setTitle('Inn Commands')
            .setDescription('These commands will only work in the Inn.')
            .addField('Ticket', 'Creates a ticket for questions (ex: -ticket [question])')
            .addField('Temp Mute', 'Temporarily mutes a user (ex: -tempmute [@usertag][time(s, m, h)])')
            .addField('Rules', 'Sends the list of rules (ex: -rules)')
            .addField('Warn', 'Warns a user (ex: -warn [@usertag or user ID][reason for warn])')
            .addField('Warnings', 'Checks user\'s amount of warnings (ex: -close)')
            .addField('Mute', 'Mutes a user (ex: -mute [user ID])')
            .addField('Unmute', 'Unmutes a user (ex: -unmute [user ID])')
            .addField('Report', 'Reports a user (ex: -report [@usertag] [reason for reporting])')
            .addField('Quotes (Enter name to use this command)', 'Sends quotes from Minh, Bryce, Ethan, Hanna, Jake, Josh, Fremont, Matt, Christy, Andrew, Nobel, Brennan, Andy, Ally, and Kay (ex: -minh)')

        let content = message.content.substring(message.content.indexOf(' ') + 1)
        content = content.toLowerCase()
        if (content.includes("vote")) return message.channel.send(vote)
        if (content.includes("inn")) return message.channel.send(inn)

        const moderation = new Discord.MessageEmbed()
            .setTitle('Moderation')
            .setDescription('My default prefix is [-]. Click the arrows at the bottom to change categories.')
            .addField('Ban', 'Bans a user (ex: -ban @usertag)')
            .addField('Kick', 'Kicks a user (ex: -kick @usertag)')
            .addField('Poll', 'Creates a poll (ex: -poll [#channelname] [Question])')
            .addField('Close', 'Deletes a channel (ex: -close)')
            .addField('DM', 'DMs a user (ex: -dm [@user or user ID][message text])')
            .addField('Nickname', 'Changes a user nickname (ex: -nickname [@usertag])')
            .addField('Setprefix', 'Changes the prefix of the bot (ex: -setprefix [new prefix])')
        if (content.includes("mod")) return message.channel.send(moderation)

        const fun = new Discord.MessageEmbed()
            .setTitle('Fun')
            .setDescription('My default prefix is [-]. Click the arrows at the bottom to change categories.')
            .addField('Meme', 'Sends a meme in the chat (ex: -meme)')
            .addField('Roast', 'Roasts a user (ex: -roast @usertag)')
            .addField('Ascii', 'Sends cool text (ex: -ascii [text])')
            .addField('Advice', 'Gives user advice (ex: -advice)')
            .addField('Joke', 'Sends user a joke (ex: -joke)')
            .addField('Coin', 'Flips a coin (ex: -coin)')
            .addField('Kpop', 'Sends a random kpop artist picture and name (ex: -kpop)')
            .addField('8ball', 'Answers a question (ex: -8ball [question with ?])')
            .addField('PP', 'Sends a user\'s pp size (ex: -pp [@usertag]')
            .addField('RPS', 'Sends a game of rock, paper, scissors (ex: -rps rock')
            .addField('Christmas', 'Sends the amount of days until Christmas (ex: -christmas)')
            .addField('Snake', 'Sends a snake game (ex: -snake)')
            .addField('Dog', 'Sends a picture of a dog (ex: -dog)')
            .addField('Cat', 'Sends a picture of a cat (ex: -cat)')
            .addField('Hug', 'Hugs someone (ex: -hug [@usertag])')
            .addField('Kanna', 'Sends a picture of Kanna Kamui (ex: -kanna)')
            .addField('AnimeQuote', 'Sends a quote from a random anime (ex: -animequote)')
            .addField('Tic-Tac-Toe', 'Sends a Tic-Tac-Toe game (ex: -ttt [@usertag])')
            .addField('Poggers', 'Sends a poggers meme (ex: -poggers) (This command might be nsfw)')
            .addField('ChangeMyMind', 'Creates ChangeMyMind meme (ex: -changemymind [text])')
            .addField('Sign', 'Creates a picture of Hifumi with a sign (ex: -sign [text])')
            .addField('PH', 'Creates a PH comment (ex: -ph [text])')
        if (content.includes("fun")) return message.channel.send(fun)

        const nsfw = new Discord.MessageEmbed()
            .setTitle('NSFW')
            .setDescription('This command will only work in channels with nsfw enabled.')
            .addField('NSFW', 'Sends an nsfw image (ex: -nsfw [category])')
            .addField('NSFW Categories', 'hass, hmidriff, pgif, 4k, hentai, hneko, hkitsune, anal, hanal, gonewild, ass, pussy, thigh, hthigh, paizuri, tentacle, boobs, hboobs')
        if (content.includes("nsfw")) return message.channel.send(nsfw)

        const utility = new Discord.MessageEmbed()
            .setTitle('Utility')
            .setDescription('My default prefix is [-]. Click the arrows at the bottom to change categories.')
            .addField('Cal', 'Calculator (ex: -cal 234+23432)')
            .addField('UserInfo', 'Gets the info of a user (ex: -userinfo @usertag)')
            .addField('Avatar', 'Sends avatar of a user (ex: -avatar [@usertag (optional)])')
            .addField('Weather', 'Sends the weather forecast of a city (ex: -weather [city name])')
            .addField('Server Info', 'Gets the info of the server (ex: -serverinfo)')
            .addField('Bot Info', 'Gets the info of the bot (ex: -botinfo)')
            .addField('Ping', 'Gets the ping of the bot (ex: -ping)')
            .addField('Emoji', 'Sends all server emojis (ex: -emoji)')
            .addField('Verse', 'Sends a bible bible verse (ex: -verse)')
            .addField('Anime', 'Sends info about an anime (ex: -anime [anime name])')
            .addField('Emoji Info', 'Gets the info of an emoji (ex: -emojiinfo [emoji or emoji name])')
        if (content.includes("util")) return message.channel.send(utility)

        const economy = new Discord.MessageEmbed()
            .setTitle('Economy')
            .setDescription('More economy commands are going to be added.')
            .addField('Bal', 'Checks user balance (ex: -bal)')
            .addField('Addbal', 'Gives money to a user (ex: -addbal [@usertag] [amount of money])')
        if (content.includes("economy")) return message.channel.send(economy)

        const music = new Discord.MessageEmbed()
            .setTitle('Music')
            .setDescription('The music commands are currently not stable, so they might not work.')
            .addField('Play', 'Searches Youtube and plays a song (ex: -p [song name] {Youtube links do not work yet})')
            .addField('Pause', 'Pauses what is playing (ex: -pause)')
            .addField('Resume', 'Resumes what is playing (ex: -resume)')
            .addField('Stop', 'Stops playing a song (ex: -stop)')
            .addField('Skip', 'Skips a song (ex: -skip)')
            .addField('Queue', 'Sends song queue (ex: -queue)')
            .addField('Volume', 'Sets or views current volume (ex: -vol [number])')
            .addField('Now Playing', 'Shows song that is currently playing (ex: -np)')
            .addField('Leave', 'Bot will leave the vc (ex: -leave)')
        if (content.includes("music")) return message.channel.send(music)

        const setUp = new Discord.MessageEmbed()
            .setTitle('Bot Set Up')
            .setDescription('My default prefix is [-]. Click the arrows at the bottom to change categories.')
            .addField('SetWelcome', 'Use this command in the welcome channel to set up welcome messages(ex: -setwelcome [welcome message] (Please note that you can do "<@>" to send the username of the user that just joined))')
            .addField('SetLeave', 'Use this command in the leave channel to set up leave messages(ex: -setleave [welcome message] (Please note that you can do "<@>" to send the username of the user that just joined))')
            .addField('For more support, please join my discord server by using this command:', '(-discord)')
        if (content.includes("setup")) return message.channel.send(setUp)

        const dev = new Discord.MessageEmbed()
            .setTitle('Developer Tools')
            .setDescription('For the support discord server, use the command -discord.')
            .addField('Docs', 'Sends discord.js documentation (ex: -docs [search query])')
            .addField('Channel', 'Sends ID of channel command is used in (ex: -channel)')
            .addField('Execute', 'Use terminal commands in Discord (ex: -execute [command])')
        if (content.includes("dev")) return message.channel.send(dev)

        const pages = [
            fun,
            utility,
            moderation,
            music,
            dev,
            nsfw,
            setUp
        ]

        const emojiList = ["⏪", "⏩"];
        pagination(message, pages, emojiList)
    },
}