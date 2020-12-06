const Discord = require('discord.js');
const weather = require('weather-js');

module.exports = {
    commands: 'weather',
    callback: (message, args) => {
        weather.find({ search: args.join(" "), degreeType: 'F' }, function (error, result) {
            if (error) return message.channel.send(error);
            if (!args[0]) return message.channel.send('Please specify a location')

            if (result === undefined || result.length === 0) return message.channel.send('**Invalid** location');

            var current = result[0].current;
            var location = result[0].location;

            const weatherinfo = new Discord.MessageEmbed()
                .setDescription(`**${current.skytext}**`)
                .setAuthor(`Weather forecast for ${current.observationpoint}`)
                .setThumbnail(current.imageUrl)
                .setColor(0x111111)
                .addField('Timezone', `UTC${location.timezone}`, true)
                .addField('Degree Type', 'Fahrenheit', true)
                .addField('Temperature', `${current.temperature}°`, true)
                .addField('Wind', current.winddisplay, true)
                .addField('Feels like', `${current.feelslike}°`, true)
                .addField('Humidity', `${current.humidity}%`, true)
                .setFooter("Bot Made By OblivionGhoul#5842", "https://i.imgur.com/Ivtf7GP.png")
            message.channel.send(weatherinfo)
        })
    },
}
