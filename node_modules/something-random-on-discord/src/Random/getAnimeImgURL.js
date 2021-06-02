const axios = require("axios")
const userAgents = require("../../tools/user-agents.json")

const getAnimeImgURL = async (action) => {

  if(!action) throw "action is not given in getAnimeImgURL()"

  let array = ["pat", "hug", "waifu", "cry", "kiss", "slap", "smug", "punch"];

  if (!array.find(x => x === action.toLowerCase())) {
    throw "Unknown Action name, options of action are - " + array.join(", ")
  }

  let json = await axios("https://neko-love.xyz/api/v1/" + action.toLowerCase(), {
    headers: {
      "User-Agent": userAgents[Math.floor(Math.random() * userAgents.length)]
    }
  });

  json = json.data;
  if (json.code !== 200) throw "Error 01: Unable to access the json content of API"

  return json.url
}

module.exports = getAnimeImgURL;