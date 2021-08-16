const mongo = require('@util/mongo')
const commandPrefixSchema = require('@schemas/command-prefix-schema')

// Importing command-base so we have access to the
// "updateCache" function which I forgot to cover in the video
const commandBase = require('@root/commands/command-base')

module.exports = {
  commands: 'setprefix',
  minArgs: 1,
  maxArgs: 1,
  expectedArgs: "<This bot's new command prefix>",
  callback: async (message, arguments, text) => {
    
    if(!message.author.hasPermission('MANAGE_GUILD' || 'ADMINISTRATOR')) {
     return message.channel.send('You must have permissions to use this command! (`Manage guild`, `Administrator`)') 
    }
    
     const prefix = arguments[0]
    if(prefix > 5) {
    return message.channel.send('The prefix cannot be over 5 charecters!')
    }

    await mongo().then(async (mongoose) => {
      try {
        const guildId = message.guild.id
        await commandPrefixSchema.findOneAndUpdate(
          {
            _id: guildId,
          },
          {
            _id: guildId,
            prefix,
          },
          {
            upsert: true,
          }
        )

        message.reply(`The prefix for this bot is now ${prefix}`)

        // Update the cache
        commandBase.updateCache(guildId, prefix)
      } finally {
        mongoose.connection.close()
      }
    })
  },
}
