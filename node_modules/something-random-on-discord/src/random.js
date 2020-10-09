const fetch = require("node-fetch");

class Random {
  async getMeme() {
    const main = await fetch("https://apis.duncte123.me/meme");
    const mat = await main.json();

    if (!mat.success) {
      return console.log("Error 01: Unable to access the json content of API");
    }

    let content = {
      embed: {
        color: "RANDOM",
        title: mat.data.title,
        image: { url: mat.data.image }
      }
    };

    return content;
  }

  async getJoke() {
    const main = await fetch("https://apis.duncte123.me/joke");
    const mat = await main.json();

    if (!mat.success) {
      return console.log("Error 01: Unable to access the json content of API");
    }

    let content = { embed: { title: mat.data.title, color: "RANDOM" } };

    if (mat.data.body) {
      content.embed.description = mat.data.body;
    }

    return content;
  }

  async getString(number) {
    const main = await fetch(
      "https://apis.duncte123.me/random-string/" + number
    );
    const mat = await main.json();

    if (!mat.success) {
      return console.log("Error 01: Unable to access the json content of API");
    }

    return mat.data;
  }

  async getNeko() {
    const main = await fetch("https://neko-love.xyz/api/v1/neko");
    const mat = await main.json();

    if (mat.code !== 200) {
      return console.log("Error 01: Unable to access the json content of API");
    }

    let content = {
      embed: {
        color: "#FFC0CB",
        title: "NEKO",
        image: { url: mat.url }
      }
    };

    return content;
  }

  async getKpop() {
    const main = await fetch("https://apis.duncte123.me/kpop");
    const mat = await main.json();

    if (!mat.success) {
      return console.log("Error 01: Unable to access the json content of API");
    }

    let content = {
      embed: {
        color: "RANDOM",
        title: mat.data.name,
        image: { url: mat.data.img }
      }
    };

    return content;
  }

  async getAnimeImgURL(action) {
    let array = ["pat", "hug", "waifu", "cry", "kiss", "slap", "smug", "punch"];

    if (!array.find(x => x === action.toLowerCase())) {
      return console.log(
        "Unknown Action name, options of action are - " + array.join(", ")
      );
    }

    const main = await fetch(
      "https://neko-love.xyz/api/v1/" + action.toLowerCase()
    );
    const mat = await main.json();

    if (mat.code !== 200) {
      return console.log("Error 01: Unable to access the json content of API");
    }

    return mat.url;
  }

  async getAdvice() {
    const main = await fetch("https://api.adviceslip.com/advice");
    const mat = await main.json();

    if (!mat) {
      return console.log("Error 01: Unable to access the json content of API");
    }

    let content = { embed: { description: mat.slip.advice, color: "RANDOM" } };

    return content;
  }
}
module.exports = Random;
