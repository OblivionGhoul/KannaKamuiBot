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
            .addField('Ticket', 'Creates a ticket for questions (usage: -ticket [question])')
            .addField('Temp Mute', 'Temporarily mutes a user (usage: -tempmute [@usertag][time(s, m, h)])')
            .addField('Rules', 'Sends the list of rules (usage: -rules)')
            .addField('Warn', 'Warns a user (usage: -warn [@usertag or user ID][reason for warn])')
            .addField('Warnings', 'Checks user\'s amount of warnings (usage: -close)')
            .addField('Mute', 'Mutes a user (usage: -mute [user ID])')
            .addField('Unmute', 'Unmutes a user (usage: -unmute [user ID])')
            .addField('Report', 'Reports a user (usage: -report [@usertag] [reason for reporting])')
            .addField('Quotes (Enter name to use this command)', 'Sends quotes from Minh, Bryce, Ethan, Hanna, Jake, Josh, Fremont, Matt, Christy, Andrew, Nobel, Brennan, Andy, Ally, and Kay (usage: -minh)')

        let content = message.content.substring(message.content.indexOf(' ') + 1)
        content = content.toLowerCase()
        if (content.includes("vote")) return message.channel.send(vote)
        if (content.includes("inn")) return message.channel.send(inn)

        const moderation = new Discord.MessageEmbed()
            .setTitle('Moderation')
            .setDescription(
                'Invite Me To Your Server [Here](https://discord.com/api/oauth2/authorize?client_id=757066313406611477&permissions=473427062&scope=bot)\nPlease Consider Donating [Here](https://www.paypal.com/paypalme/kannabot) To Keep It Running\nAny Issues Or Suggestions? Join My Support Server [Here](https://discord.gg/QpMWndNpse)\nMy Default Prefix Is [-]'
            )
            .addField('Ban', 'Bans a user (usage: -ban @usertag)')
            .addField('Kick', 'Kicks a user (usage: -kick @usertag)')
            .addField('Poll', 'Creates a poll (usage: -poll [#channelname] [Question])')
            .addField('Close', 'Deletes a channel (usage: -close)')
            .addField('DM', 'DMs a user (usage: -dm [@user or user ID][message text])')
            .addField('Nickname', 'Changes a user nickname (usage: -nickname [@usertag])')
            .addField('Setprefix', 'Changes the prefix of the bot (usage: -setprefix [new prefix])')
        if (content.includes("mod")) return message.channel.send(moderation)

        const fun = new Discord.MessageEmbed()
            .setTitle('Fun')
            .setDescription(
                'Invite Me To Your Server [Here](https://discord.com/api/oauth2/authorize?client_id=757066313406611477&permissions=473427062&scope=bot)\nPlease Consider Donating [Here](https://www.paypal.com/paypalme/kannabot) To Keep It Running\nAny Issues Or Suggestions? Join My Support Server [Here](https://discord.gg/QpMWndNpse)\nMy Default Prefix Is [-]'
            )
            .addField('Anime Trivia', 'Sends an anime trivia question (usage: -animetrivia)')
            .addField('Meme', 'Sends a meme in the chat (usage: -meme)')
            .addField('Roast', 'Roasts a user (usage: -roast @usertag)')
            .addField('Ascii', 'Sends cool text (usage: -ascii [text])')
            .addField('Advice', 'Gives user advice (usage: -advice)')
            .addField('Joke', 'Sends user a joke (usage: -joke)')
            .addField('Coin', 'Flips a coin (usage: -coin)')
            .addField('Kpop', 'Sends a random kpop artist picture and name (usage: -kpop)')
            .addField('8ball', 'Answers a question (usage: -8ball [question with ?])')
            .addField('PP', 'Sends a user\'s pp size (usage: -pp [@usertag]')
            .addField('RPS', 'Sends a game of rock, paper, scissors (usage: -rps rock')
            .addField('Christmas', 'Sends the amount of days until Christmas (usage: -christmas)')
            .addField('Dog', 'Sends a picture of a dog (usage: -dog)')
            .addField('Ship', 'Ships 2 users (usage: -ship [@usertag] [@usertag])')
            .addField('Pat', 'Pats a user (usage: -pat [@usertag])')
            .addField('Cat', 'Sends a picture of a cat (usage: -cat)')
            .addField('Hug', 'Hugs someone (usage: -hug [@usertag])')
            .addField('Kanna', 'Sends a picture of Kanna Kamui (usage: -kanna)')
            .addField('AnimeQuote', 'Sends a quote from a random anime (usage: -animequote)')
            .addField('Tic-Tac-Toe', 'Sends a Tic-Tac-Toe game (usage: -ttt [@usertag])')
            .addField('Fast Type', 'Sends a fast type game (usage: -fasttype)')
            .addField('Spank', 'Spanks a User (usage: -spank [@usertag])')
            .addField('Aki', 'Sends an Akinator Game (usage: -aki)')
            .addField('Sign', 'Creates a picture of Hifumi with a sign (usage: -sign [text])')
            .addField('PH', 'Creates a PH comment (usage: -ph [text])')
        if (content.includes("fun")) return message.channel.send(fun)

        const nsfw = new Discord.MessageEmbed()
            .setTitle('NSFW')
            .setDescription('This command will only work in channels with nsfw enabled.')
            .addField('NSFW', 'Sends an nsfw image (usage: -nsfw [category])')
            .addField('NSFW Categories', 'hass, hmidriff, pgif, 4k, hentai, hneko, hkitsune, anal, hanal, gonewild, ass, pussy, thigh, hthigh, paizuri, tentacle, boobs, hboobs')
        if (content.includes("nsfw")) return message.channel.send(nsfw)

        const utility = new Discord.MessageEmbed()
            .setTitle('Utility')
            .setDescription(
                'Invite Me To Your Server [Here](https://discord.com/api/oauth2/authorize?client_id=757066313406611477&permissions=473427062&scope=bot)\nPlease Consider Donating [Here](https://www.paypal.com/paypalme/kannabot) To Keep It Running\nAny Issues Or Suggestions? Join My Support Server [Here](https://discord.gg/QpMWndNpse)\nMy Default Prefix Is [-]'
            )
            .addField('Cal', 'Calculator (ex: -cal 234+23432)')
            .addField('UserInfo', 'Gets the info of a user (usage: -userinfo @usertag)')
            .addField('Avatar', 'Sends avatar of a user (usage: -avatar [@usertag (optional)])')
            .addField('Weather', 'Sends the weather forecast of a city (usage: -weather [city name])')
            .addField('Server Info', 'Gets the info of the server (usage: -serverinfo)')
            .addField('Bot Info', 'Gets the info of the bot (usage: -botinfo)')
            .addField('Ping', 'Gets the ping of the bot (usage: -ping)')
            .addField('Emoji', 'Sends all server emojis (usage: -emoji)')
            .addField('Verse', 'Sends a bible bible verse (usage: -verse)')
            .addField('Anime', 'Sends info about an anime (usage: -anime [anime name])')
            .addField('Emoji Info', 'Gets the info of an emoji (usage: -emojiinfo [emoji or emoji name])')
            .addField('Server Picture', 'Sends the pfp of the server (usage: -serverpicture)')
        if (content.includes("util")) return message.channel.send(utility)

        const economy = new Discord.MessageEmbed()
            .setTitle('Economy')
            .setDescription('More economy commands are going to be added.')
            .addField('Bal', 'Checks user balance (usage: -bal)')
            .addField('Addbal', 'Gives money to a user (usage: -addbal [@usertag] [amount of money])')
        if (content.includes("economy")) return message.channel.send(economy)

        const music = new Discord.MessageEmbed()
            .setTitle('Music')
            .setDescription(
                'Invite Me To Your Server [Here](https://discord.com/api/oauth2/authorize?client_id=757066313406611477&permissions=473427062&scope=bot)\nPlease Consider Donating [Here](https://www.paypal.com/paypalme/kannabot) To Keep It Running\nAny Issues Or Suggestions? Join My Support Server [Here](https://discord.gg/QpMWndNpse)\nMy Default Prefix Is [-]'
            )
            .addField('Play', 'Searches Youtube and plays a song (usage: -p [song name] {Youtube links might not work})')
            .addField('Pause', 'Pauses what is playing (usage: -pause)')
            .addField('Resume', 'Resumes what is playing (usage: -resume)')
            .addField('Stop', 'Stops playing a song (usage: -stop)')
            .addField('Skip', 'Skips a song (usage: -skip)')
            .addField('Queue', 'Sends song queue (usage: -queue)')
            .addField('Volume', 'Sets or views current volume (usage: -vol [number])')
            .addField('Now Playing', 'Shows song that is currently playing (usage: -np)')
            .addField('Leave', 'Bot will leave the vc (usage: -leave)')
        if (content.includes("music")) return message.channel.send(music)

        const setUp = new Discord.MessageEmbed()
            .setTitle('Bot Set Up')
            .setDescription(
                'Invite Me To Your Server [Here](https://discord.com/api/oauth2/authorize?client_id=757066313406611477&permissions=473427062&scope=bot)\nPlease Consider Donating [Here](https://www.paypal.com/paypalme/kannabot) To Keep It Running\nAny Issues Or Suggestions? Join My Support Server [Here](https://discord.gg/QpMWndNpse)\nMy Default Prefix Is [-]'
            )
            .addField('SetWelcome', 'Use this command in the welcome channel to set up welcome messages(usage: -setwelcome [welcome message] (Please note that you can do "<@>" to send the username of the user that just joined))')
            .addField('SetLeave', 'Use this command in the leave channel to set up leave messages(usage: -setleave [welcome message] (Please note that you can do "<@>" to send the username of the user that just joined))')
            .addField('For more support, please join the support discord server above', 'Thanks for inviting the bot!')
        if (content.includes("setup")) return message.channel.send(setUp)

        const dev = new Discord.MessageEmbed()
            .setTitle('Developer Tools')
            .setDescription(
                'Invite Me To Your Server [Here](https://discord.com/api/oauth2/authorize?client_id=757066313406611477&permissions=473427062&scope=bot)\nPlease Consider Donating [Here](https://www.paypal.com/paypalme/kannabot) To Keep It Running\nAny Issues Or Suggestions? Join My Support Server [Here](https://discord.gg/QpMWndNpse)\nMy Default Prefix Is [-]'
            )
            .addField('Docs', 'Sends discord.js documentation (usage: -docs [search query])')
            .addField('Channel', 'Sends ID of channel command is used in (usage: -channel)')
            .addField('Execute', 'Use terminal commands in Discord (usage: -execute [command])')
        if (content.includes("dev")) return message.channel.send(dev)

        const val = new Discord.MessageEmbed()
        .setTitle('Valorant Commands')
        .setDescription(
            'Invite Me To Your Server [Here](https://discord.com/api/oauth2/authorize?client_id=757066313406611477&permissions=473427062&scope=bot)\nPlease Consider Donating [Here](https://www.paypal.com/paypalme/kannabot) To Keep It Running\nAny Issues Or Suggestions? Join My Support Server [Here](https://discord.gg/QpMWndNpse)\nMy Default Prefix Is [-]'
        )
        .addField('Val Stats', 'Sends a player\'s Valorant Stats (usage: -valstats [name] [tag])')
        .addField('Val Matches', 'Sends a player\'s Last 3 Matches (usage: -valmatches [name] [tag])')
        .addField('Val Maps', 'Sends a Valorant Map (usage: -valmap [map name])')
        if (content.includes("val")) return message.channel.send(val)

        const pages = [
            fun,
            utility,
            moderation,
            music,
            val,
            dev,
            nsfw,
            setUp
        ]

        const emojiList = ["⏪", "⏩"];
        pagination(message, pages, emojiList)
    },
}