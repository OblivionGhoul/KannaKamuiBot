const axios = require('axios');
const Discord = require('discord.js')

module.exports = {
  commands: ['dog'],
  callback: async (message) => {
    axios.get('http://shibe.online/api/shibes?count=[1-100]&urls=true&httpsUrls=true')
      .then(function (response) {
        message.channel.send(response.data[0])
      })
      .catch(function (error) {
        console.log(error);
      })
  },
}