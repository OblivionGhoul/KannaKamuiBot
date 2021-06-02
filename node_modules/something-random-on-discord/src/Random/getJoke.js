const axios = require("axios")
const userAgents = require("../../tools/user-agents.json")

const getJoke = async (options) => {
  if (!options) options = {}
  let embed;
  if (options.name) {
    let json = await axios(`http://api.icndb.com/jokes/random?firstName=${options.name.first}&lastName=${options.name.last}`, {
      headers: {
        "User-Agent": userAgents[Math.floor(Math.random() * userAgents.length)]
      }
    })

    json = json.data;
    if (!json.type || json.type !== "success") throw "Error 01: Unable to access the json content of API"

     embed = {
      embed: {
        "description": json.value.joke,
        "color": "RANDOM",
        "footer": {
          "text": "Random Jokes | srod"
        }
      }
    }
  } else {

    let json = await axios(`https://official-joke-api.appspot.com/random_joke`, {
      headers: {
        "User-Agent": userAgents[Math.floor(Math.random() * userAgents.length)]
      }
    })

    json = json.data;

    if (!json) throw "Error 01: Unable to access the json content of API"

    embed = {
      embed: {
        "title": json.setup,
        "description": json.punchline,
        "color": "RANDOM",
        "footer": {
          "text": "Random Jokes | srod"
        }
      }
    }

  }
 
 return embed;
  
}

module.exports = getJoke;