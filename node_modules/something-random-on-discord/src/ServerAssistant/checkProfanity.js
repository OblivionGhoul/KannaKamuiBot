const axios = require("axios")
const userAgents = require("../../tools/user-agents.json")

const checkProfanity = async (string) => {
  if(!string) return { profanity: false };

    let json = await axios("https://www.purgomalum.com/service/json?text=" + encodeURI(string), {
    headers: {
      "User-Agent": userAgents[Math.floor(Math.random() * userAgents.length)]
    }
  });

  json = json.data;
  if(!json) return { profanity: false };

  let object = {
    profanity: json.result === string ? false : true, 
    text: string,
    result: json.result
  }

  return object;
}

module.exports = checkProfanity;