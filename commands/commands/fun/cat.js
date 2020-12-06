const axios = require('axios');
const Discord = require('discord.js')

module.exports = {
  commands: ['cat'],
  callback: async (message) => {
    axios.get('https://api.thecatapi.com/v1/images/search')
      .then(function (response) {
        message.channel.send(response.data[0].url)
      })
      .catch(function (error) {
        console.log(error);
      })
  },
}