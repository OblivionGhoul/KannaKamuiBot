require('module-alias/register')

const Discord = require('discord.js')
const client = new Discord.Client()
client.queue = new Map()

const loadCommands = require('@root/commands/load-commands')
const commandBase = require('@root/commands/command-base')
const loadFeatures = require('@root/features/load-features')
const { badwords } = require('@root/data.json')


client.on('ready', async () => {
  try {
    let serverIn = client.guilds.size;
    console.log('I am ready!');

    function pickStatus() {
      let status = ['over the Inn', 'Welcome to the Inn', 'Simping for Minh']; //change change status
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

//Server stats channel IDs
let stats = {
  serverID: '705454198464053331', //can change channel ID 
  member: "738642924346146817", //can change channel ID 
  bots: "738642927366176905" //can change channel ID 
}

//welcome message
client.on('guildMemberAdd', member => {
  const autoRole = member.guild.roles.cache.get('705475155782008936'); //can change auto role ID
  if (!autoRole) return;
  member.roles.add(autoRole.id);
  //update server count
  if (member.guild.id !== stats.serverID) return;
  client.channels.cache.get(stats.member).setName(`Members: ${member.guild.members.cache.filter(m => !m.user.bot).size}`);
  client.channels.cache.get(stats.bots).setName(`Bots: ${member.guild.members.cache.filter(m => m.user.bot).size}`);
})
//leave message 
client.on('guildMemberRemove', member => {
  //update server count
  if (member.guild.id !== stats.serverID) return;
  client.channels.cache.get(stats.member).setName(`Members: ${member.guild.members.cache.filter(m => !m.user.bot).size}`);
  client.channels.cache.get(stats.bots).setName(`Bots: ${member.guild.members.cache.filter(m => m.user.bot).size}`);
})
//checks for certain words
client.on('message', async message => {
  if (message.author.bot) return;
  if (!message.member.hasPermission("BAN_MEMBERS")) {
    let confirm = false;
    var i;
    for (i = 0; i < badwords.length; i++) {
      if (message.content.toLowerCase().includes(badwords[i].toLowerCase()))
        confirm = true;
    }
    if (confirm) {
      message.delete()
      return message.channel.send("You are not allowed to say that.")
    }
  }
});

client.on('message', message => {
  var { content } = message
  content = content.toLowerCase()
  if (message.author.id !== '298589600132366339') return
  if (content.includes("lol") || content.includes("lmao")) return message.channel.send('minh moment'),
    message.react('<:cute02:783469626779500554>')
})

client.on('message', message => {
  var { content } = message
  content = content.toLowerCase()
  if (message.author.id !== '396850772488355841') return
  if (content.includes("ur mom") || content.includes("your mom")) return message.react('<:wazowski:735907372920209521>')
})

client.on('message', message => {
  var { content } = message
  content = content.toLowerCase()
  if (content.includes("christmas")) return message.react('<:caraputechristmas:785676846716026880>')
})

client.login(process.env.token)