const { MessageEmbed } = require('discord.js');
const { inspect } = require('util');
const fs = require('fs')
const config = require('../../config/config.json');
const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: ['eval'],
    callback: async (message, args, client) => {
      if (!config.owners.includes(message.author.id)) {
            return message.channel.send(`You Are Not a bot dev`)
        }
    const args = message.content.split(' ');
  const command = args.shift().toLowerCase();

    try {
      evaled = await eval(args.join(' '));
      message.channel.send(inspect(evaled));
      console.log(inspect(evaled));
  }
    
catch (err) {
      console.log(err);
      message.reply(`There was an error during evaluation, \n\n**${err.stack}**`);
      
    }
}};
