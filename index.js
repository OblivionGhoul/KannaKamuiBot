const Discord = require('discord.js')
const client = new Discord.Client()

require('module-alias/register')
require('discord-buttons')(client);
require('dotenv').config()
require('discord-reply')

const loadCommands = require('@root/commands/load-commands')
const loadFeatures = require('@root/features/load-features')
const { DiscordTogether } = require('discord-together')

client.setMaxListeners(200)
client.queue = new Map()
client.discordTogether = new DiscordTogether(client)

loadCommands(client)
loadFeatures(client)

client.login(process.env.token)