const axios = require("axios");
const userAgents = require("../../tools/user-agents.json")

async function getMeme() {

  let tag = ["memes", "me_irl", "dankmemes", "comedyheaven", "Animemes"]
  tag = tag[Math.floor(Math.random() * tag.length)]

  let json = await axios(`https://www.reddit.com/r/${tag}/random/.json`, {
    headers: {
      "User-Agent": userAgents[Math.floor(Math.random() * userAgents.length)]
    }
  });

  json = json.data;
  if (!json) throw new "Error 01: Unable to access the json content of API"
  json = json[0].data.children[0].data;

  let content = {
    embed: {
      color: "RANDOM",
      image: { url: json.is_video ? "https://freepikpsd.com/wp-content/uploads/2019/10/no-image-png-5-Transparent-Images.png" : json.url },
      title: json.title
    }
  }

  return content;
}


module.exports = getMeme;