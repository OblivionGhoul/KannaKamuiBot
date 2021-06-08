require('module-alias/register')
const Discord = require('discord.js')
require('discord-reply')
const client = new Discord.Client()
const loadCommands = require('@root/commands/load-commands')
const commandBase = require('@root/commands/command-base')
const loadFeatures = require('@root/features/load-features')
client.queue = new Map()
require('discord-buttons')(client);

client.on('ready', async () => {
  try {
    console.log('I am ready!');
    function pickStatus() {
      let status = [`over ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} users!`, `over ${client.guilds.cache.size.toLocaleString()} servers!`]; //change change status
      let Status = Math.floor(Math.random() * status.length);

      client.user.setActivity(status[Status], {
        type: "WATCHING"
      });
    };
    setInterval(pickStatus, 5000);
  } catch (err) {
    console.log(error)
  }

  commandBase.loadPrefixes(client)
  loadCommands(client)
  loadFeatures(client)
})

client.on('guildCreate', (guild) => {
  const channel = guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
  const embed = new Discord.MessageEmbed()
  .setTitle('Thanks For Adding Me!')
  .setDescription('Invite Me To Your Server [Here](https://discord.com/api/oauth2/authorize?client_id=757066313406611477&permissions=473427062&scope=bot)\nPlease Consider Donating [Here](https://www.paypal.com/paypalme/kannabot) To Keep It Running\nAny Issues Or Suggestions? Join My Support Server [Here](https://discord.gg/QpMWndNpse)\nMy Default Prefix Is [-]')
  .setColor('RANDOM')
  .addField('Help', 'Use this Command get the full command list\n(usage: -help)')
  .addField('SetPrefix', 'Use this Command to change the default prefix\n(usage: -setprefix [new prefix])')
  .setFooter('Bot Made By OblivionGhoul#5842', 'https://i.imgur.com/Ivtf7GP.png')
  .setThumbnail('https://i.imgur.com/Zmr7TLZ.png')
  .setURL('https://github.com/OblivionGhoul/KannaKamuiBot')

  channel.send(embed)
})

client.login(process.env.token)
