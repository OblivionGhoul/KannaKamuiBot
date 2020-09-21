const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}
client.once('ready', async() => {
    try {
        let serverIn = client.guilds.size;
        console.log('I am ready!');

        function pickStatus() {
            let status = ['Simping for Minh', 'Why is Minh so cute?', 'Welcome to the Inn', 'Minh is taken', 'YEET', 'Minh has a GF'];
            let Status = Math.floor(Math.random() * status.length);

            client.user.setActivity(status[Status], {
                type: "WATCHING"
            });
        };
        setInterval(pickStatus, 5000);
    } catch (err) {
        console.log(error)
    }
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLocaleLowerCase();

    if(command === 'ping') {
        client.commands.get('ping').execute(message, args);
    } else if (command == 'minh') {
        client.commands.get('minh').execute(message, args);
    } else if (command == 'kay') {
        client.commands.get('kay').execute(message, args);
    } else if (command == 'bryce') {
        client.commands.get('bryce').execute(message, args);
    } else if (command == 'ethan') {
        client.commands.get('ethan').execute(message, args);
    } else if (command == 'say') {
        client.commands.get('say').execute(message, args);
    } else if (command == 'user-info') {
        client.commands.get('user-info').execute(message, args);
    } else if (command == 'josh') {
        client.commands.get('josh').execute(message, args);
    }
});

var queue = new Map();

const ytdl = require('ytdl-core');

client.on('ready', () => console.log("ready"));

client.on('message', async (message) => {
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(command == "play") {
        if(!args[0]) return;
        let url = args.join(" ");
        if(!url.match(/(youtube.com|youtu.be)\/(watch)?(\?v=)?(\S+)?/)) return message.channel.send("Please provide a valid Youtube link!");

        let serverQueue = queue.get(message.guild.id);
        let vc = message.member.voice;

        if(!vc) return message.channel.send("You are not in a voice channel!");

        if(!vc.channel.permissionsFor(client.user).has('CONNECT') || !vc.channel.permissionsFor(client.user).has('SPEAK')) return message.channel.send("I do not have permission!");

        let songinfo = await ytdl.getInfo(url);
        let song = {
            title: songinfo.title,
            url: songinfo.video_url
        }

        if(!serverQueue) {
            let queueConst = {
                textChannel: message.channel,
                voiceChannel: vc.channel,
                connection: null,
                songs: [],
                volume: 5,
                playing: true
            };

            queue.set(message.guild.id, queueConst);
            queueConst.songs.push(song);

            try {
                let connection = await vc.channel.join();
                queueConst.connection = connection
                playSong(message.guild, queueConst.songs[0])
            } catch (error) {
                console.log(error);
                queue.delete(message.guild.id);
                return message.channel.send("There was an error playing the song! Error: " + error);
            }
        } else {
            serverQueue.songs.push(song);
            return message.channel.send(`${song.title} has been added to the queue!`)
        }
    }
})

/**
 * 
 * @param {Discord.Guild} guild 
 * @param {Object} song 
 */
async function playSong(guild, song) {
    let serverQueue = queue.get(guild.id);

    if(!song){
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }

    const dispatcher = serverQueue.connection.play(ytdl(song.url)).on('end', () => {
        serverQueue.songs.shift();
        playSong(guild, serverQueue.songs[0]);
    })
    .on('error', () => {
        console.log(error)
    })

    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
}

client.login(process.env.token);