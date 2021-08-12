const commandBase = require('@root/commands/command-base')
const { AutoPoster } = require('topgg-autoposter')

module.exports = (client) => {
  client.on('ready', async () => {
    try {
      console.log(`I am watching over ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} users and ${client.guilds.cache.size.toLocaleString()} servers!`);
      function pickStatus() {
        let status = ['over Kobayashi', 'over Tohru', 'over Ilulu', 'over Makoto Takiya', 'over Quetzalcoatl', 'over Elma', 'over Shouta Magatsuchi', 'over Fafnir'];
        let Status = Math.floor(Math.random() * status.length);

        client.user.setActivity(status[Status], {
          type: "WATCHING"
        });
      };
      setInterval(pickStatus, 13000);
    } catch (err) {
      console.log(error)
    }

    const poster = AutoPoster(process.env.topggtoken, client)

    poster.on('posted', (stats) => {
      console.log(`Posted stats to Top.gg!`)
    })

    commandBase.loadPrefixes(client)

  })
}
