const axios = require("axios")
const userAgents = require("../../tools/user-agents.json")

const getNeko = async () => {
    let json = await axios("https://neko-love.xyz/api/v1/neko", {
      headers: {
        "User-Agent": userAgents[Math.floor(Math.random()*userAgents.length)]
      }
    });

    json = json.data;
    if (json.code !== 200) throw "Error 01: Unable to access the json content of API"

     return {
      embed: {
        color: "#FFC0CB",
        title: "NEKO",
        image: { url: json.url }
      }
    };
    
}

module.exports = getNeko;