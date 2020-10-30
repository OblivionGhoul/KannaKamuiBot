### SOMETHING RANDOM

Below are the things that this package offers you.

  - GET RANDOM ADVICE
  - GET RANDOM NEKO IMAGE
  - GET RANDOM ANIME IMAGE(BASED ON ACTION)
  - GET RANDOM MEME
  - GET RANDOM JOKES
  - GET RANDOM STING(BASED ON GIVEN NUMBER)
  - GET RANDOM KPOP SINGER
  
  
  
# SETUP
```js
const discord = require("discord.js")
const client = new discord.Client()
const { Random } = require("something-random-on-discord")
const random = new Random();


client.on("ready", () => {
  console.log("Ready to go")
})

client.on("message", async message => {
  if(message.content === "!meme") {
    let data = await random.getMeme()
    message.channel.send(data)
  }
})


client.login("TOKEN")

```
![](https://cdn.discordapp.com/attachments/636154061724450826/735083464994455593/unknown.png)


## DOCUMENTATION

**getMeme()**: Provieds You the JSON embed with meme image and title.
```js
  let data = await random.getMeme()
    message.channel.send(data)
```

**getAdvice()**: Provieds You a random advice.
```js
  let data = await random.getAdvice()
    message.channel.send(data)
```

**getString(number)**: Provieds You a random string, length will be based on the number you gave.
```js
 let data = await random.getString(6)
    message.channel.send(data)
```

**getNeko()**: Provieds You a random neko image.
```js
 let data = await random.getNeko()
    message.channel.send(data)
```

**getJoke()**: Provieds You a Random Funny Joke.
```js
 let data = await random.getJoke()
    message.channel.send(data)
```

**getAnimeImgURL(type)**: Provied you a random image url of anime(based on action), availabe actions are "pat", "hug", "waifu", "cry", "kiss", "slap", "smug", "punch"
```js
 let data = await random.getAnimeImgURL("cry")
    message.channel.send(data)
```

**getKpop()**: Provide you a Random Kpop singer image and name.
```js
let data = await random.getKpop()
    message.channel.send(data)
```




# FEEL FREE TO JOIN OUR SERVER

CTK'S SERVER => [JOIN OR DIE](https://withwin.in/dbd)