module.exports = {
  name: "sudo",
  description: "Makes a webhook to impersonate someone",
  usage: "sudo <user> <message>",
  category: "utility",
  args: true,
  run: async (client, message, args) => {
     if(!message.guild.me.permissions.has("MANAGE_WEBHOOKS")) return message.channel.send('i dont have the required permission, `MANAGE_WEBHOOKS`')
    let user =
      message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!user) return message.channel.send("you need to mention someone.");
    let msg = args.slice(1).join(" ")
    if (!msg) return message.channel.send("you gotta put a message");
    message.delete();
    const webhook = await message.channel.createWebhook(user.displayName, {
      avatar: user.user.displayAvatarURL(),
      channel: message.channel.id
    });
    await webhook.send({
      content:msg,
      allowedMentions:[{parse:[`users`]}]}).then(() => {
      webhook.delete();
    });
  }
}; 
