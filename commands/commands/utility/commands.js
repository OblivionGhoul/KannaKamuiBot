const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    commands: ['commands', 'help'],
    callback: async (message) => {
        const moderation = new Discord.MessageEmbed()
            .setTitle('Moderation')
            .setDescription('My default prefix is [-]. Click the arrows at the bottom to change categories.')
            .addField('Ban', 'Bans a user (ex: -ban @usertag)')
            .addField('Kick', 'Kicks a user (ex: -kick @usertag)')
            .addField('Temp Mute', 'Temporarily mutes a user (ex: -tempmute [@usertag][time(s, m, h)])')
            .addField('Poll', 'Creates a poll (ex: -poll [#channelname] [Question])')
            .addField('Rules', 'Sends the list of rules (ex: -rules)')
            .addField('Close', 'Deletes a channel (ex: -close)')
            .addField('Warn', 'Warns a user (ex: -warn [@usertag or user ID][reason for warn])')
            .addField('Warnings', 'Checks user\'s amount of warnings (ex: -close)')
            .addField('DM', 'DMs a user (ex: -dm [@user or user ID][message text])')
            .addField('Mute', 'Mutes a user (ex: -mute [user ID])')
            .addField('Unmute', 'Unmutes a user (ex: -unmute [user ID])')
            .addField('Nickname', 'Changes a user nickname (ex: -nickname [@usertag])')
            .addField('Setprefix', 'Changes the prefix of the bot (ex: -setprefix [new prefix])')
            .setTimestamp()
            .setThumbnail('https://i.imgur.com/Cwea8yj.png?1')

        const fun = new Discord.MessageEmbed()
            .setTitle('Fun')
            .setDescription('My default prefix is [-]. Click the arrows at the bottom to change categories.')
            .addField('Quotes (Enter name to use this command)', 'Sends quotes from Minh, Bryce, Ethan, Hanna, Jake, Josh, Fremont, Matt, Christy, Andrew, Nobel, and Kay (ex: -minh)')
            .addField('Meme', 'Sends a meme in the chat (ex: -meme)')
            .addField('Roast', 'Roasts a user (ex: -roast @usertag)')
            .addField('Ascii', 'Sends cool text (ex: -ascii [text])')
            .addField('Advice', 'Gives user advice (ex: -advice)')
            .addField('Joke', 'Sends user a joke (ex: -joke)')
            .addField('Coin', 'Flips a coin (ex: -coin)')
            .addField('Kpop', 'Sends a random kpop artist picture and name (ex: -kpop)')
            .addField('8Ball', 'Asks the 8ball a question (ex: -8ball [question])')
            .addField('Insta', 'Sends user OblivionGhouls Insta (ex: -insta)')
            .setTimestamp()
            .setThumbnail('https://i.imgur.com/Cwea8yj.png?1')

        const utility = new Discord.MessageEmbed()
            .setTitle('Utility')
            .setDescription('My default prefix is [-]. Click the arrows at the bottom to change categories.')
            .addField('Cal', 'Calculator (ex: -cal 234+23432)')
            .addField('Info', 'Gets the info of a user (ex: -info @usertag)')
            .addField('Avatar', 'Sends avatar of a user (ex: -avatar)')
            .addField('Weather', 'Sends the weather forecast of a city (ex: -weather [city name])')
            .addField('Ticket', 'Creates a ticket for questions (ex: -ticket [question])')
            .addField('Ping', 'Gets the ping of the bot (ex: -ping)')
            .addField('Imdb', 'Sends user info on movie or tv show (ex: -imdb [movie or show name])')
            .addField('Emoji', 'Sends all server emojis (ex: -emoji)')
            .addField('Verse', 'Sends a bible bible verse (ex: -verse)')
            .addField('Docs', 'Sends discord.js documentation (ex: -docs [search query])')
            .setTimestamp()
            .setThumbnail('https://i.imgur.com/Cwea8yj.png?1')

        const economy = new Discord.MessageEmbed()
            .setTitle('Economy')
            .setDescription('More economy commands are going to be added.')
            .addField('Bal', 'Checks user balance (ex: -bal)')
            .addField('Addbal', 'Gives money to a user (ex: -addbal [@usertag] [amount of money])')
            .setTimestamp()
            .setThumbnail('https://i.imgur.com/Cwea8yj.png?1')

        const music = new Discord.MessageEmbed()
            .setTitle('Music')
            .setDescription('My default prefix is [-]. Click the arrows at the bottom to change categories.')
            .addField('Play', 'Searches Youtube and plays a song (ex: -p [song name] {Youtube links do not work yet})')
            .addField('Pause', 'Pauses what is playing (ex: -pause)')
            .addField('Resume', 'Resumes what is playing (ex: -resume)')
            .addField('Stop', 'Stops playing a song (ex: -stop)')
            .addField('Skip', 'Skips a song (ex: -skip)')
            .addField('Queue', 'Sends song queue (ex: -queue)')
            .addField('Volume', 'Sets or views current volume (ex: -vol [number])')
            .addField('Now Playing', 'Shows song that is currently playing (ex: -np)')
            .setTimestamp()
            .setThumbnail('https://i.imgur.com/Cwea8yj.png?1')

        const setUp = new Discord.MessageEmbed()
            .setTitle('Bot Set Up')
            .setDescription('My default prefix is [-]. Click the arrows at the bottom to change categories.')
            .addField('SetWelcome', 'Use this command in the welcome channel to set up welcome messages(ex: -setwelcome [welcome message] (Please note that you can do "<@>" to send the username of the user that just joined))')
            .addField('SetLeave', 'Use this command in the leave channel to set up leave messages(ex: -setleave [welcome message] (Please note that you can do "<@>" to send the username of the user that just joined))')
            .addField('For more support, please join my discord server using this code: VNAQrkQ')
            .setTimestamp()
            .setThumbnail('https://i.imgur.com/Cwea8yj.png?1')

        const pages = [
            fun,
            utility,
            economy,
            moderation,
            music,
            setUp
        ]

        const emojiList = ["⏪", "⏩"];
        pagination(message, pages, emojiList)
    },
}