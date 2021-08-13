const Discord = require('discord.js')
const config = require('../../../config.json')
const ownerID = config.ownerID;

module.exports = {
	command: "eval",
	callback: async (client, message, args, eco) => {
 
if (ownerID.includes(message.author.id)) { 
    try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.send(evaled, {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${err}\n\`\`\``);
    }
  } else if(!ownerID.includes(message.author.id)) return;
  
  }
}
