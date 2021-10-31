const valorant = require("valorant-fetch");
const { MessageEmbed } = require("discord.js");

module.exports = {
  commands: [
    "valagent",
    "agent",
    "val-agent",
    "valorant-agent",
    "valorantagent",
  ],
  callback: async (message, args) => {
    let agent = args[0];
    agent = agent.toLowerCase();
    if (
      agent === "breach" ||
      agent === "brimstone" ||
      agent === "cypher" ||
      agent === "jett" ||
      agent === "killjoy" ||
      agent === "omen" ||
      agent === "phoenix" ||
      agent === "raze" ||
      agent === "reyna" ||
      agent === "sage" ||
      agent === "sova" ||
      agent === "skye" ||
      agent === "viper" ||
      agent === "yoru"
    ) {
      let data = await valorant.getAgent(agent);

      const array_description = [
        `**Type:** ${data.tags}`,
        `**Story:** ${data.biography.story}`,
        `**About:** ${data.biography.agent_about}`,
        `**Origin:** ${data.biography.region}`,
      ];

      const arrray_stats = [
        `\`Q\`: ${data.stats.Q}`,
        `\`E\`: ${data.stats.E}`,
        `\`C\`: ${data.stats.C}  - **Signature**`,
        `\`X\`: ${data.stats.X} - **Ultimate**`,
      ];

      const embed = new MessageEmbed()
        .setAuthor(
          message.member.displayName,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTitle(`${data.name} Agent Info`)
        .setThumbnail(data.photos.icon)
        .setDescription(array_description.join("\n"))
        .addField("Abilities", arrray_stats.join("\n"));

      message.channel.send(embed);
    } else {
      return message.channel.send("Please enter a valid agent.");
    }
  },
};
