module.exports = (client) => {
    const express = require('express');
    const app = express();
    const { version } = require('@root/package.json')
    const { version: djsversion } = require('discord.js')
    const port = 80

    app.set('json spaces', 1);

    app.get('/info', function (req, res) {
        res.json({
            name: client.user.tag,
            guilds: client.guilds.cache.size,
            users: client.users.cache.size,
            channels: client.channels.cache.size.toLocaleString(),
            dateCreated: client.user.createdAt,
            nodeVersion: process.version,
            botVersion: version,
            discordJSVersion: djsversion,
        })
    })

    app.listen(port, () => {
        console.log(`Server Started On Port ${port}`);
    });
}