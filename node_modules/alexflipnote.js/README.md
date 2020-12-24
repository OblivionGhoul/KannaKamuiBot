# alexflipnote.js [![npm](https://img.shields.io/npm/v/alexflipnote.js.svg)](https://www.npmjs.com/package/alexflipnote.js) [![npm](https://img.shields.io/npm/dt/alexflipnote.js.svg?maxAge=3600)](https://www.npmjs.com/package/alexflipnote.js) [![install size](https://packagephobia.now.sh/badge?p=alexflipnote.js)](https://packagephobia.now.sh/result?p=alexflipnote.js)
A simple AlexFlipnote API Wrapper

[![NPM](https://nodei.co/npm/alexflipnote.js.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/alexflipnote.js/)

## Installation
```
npm i alexflipnote.js
```

## Tokens
Since AlexFlipnote recently added an Authorization feature to the API, ALL previous versions of this wrapper will no longer work and are considered to be deprecated!

Wondering how to get an Auth token to use your API ye? Well head on to https://discord.gg/DpxkY3x to request one.

## Endpoints

### Image
| Function | Params | Description |
| -------- | ------ | ----------- |
| `birb()` | none | Sends a birb image |
| `cats()` | none | Sends a cat image |
| `dogs()` | none | Sends a dog image |
| `sadcat()` | none | Sends a sad cat image |
| `amiajoke()` | `image` | Am I A Joke Meme |
| `bad()` | `image` | Show someone how bad they are |
| `joke()` | `image` | r/wooosh |
| `salty()` | `image` | Sends a salty image filter |
| `blur()` | `image` | Sends a blur image filter |
| `invert()` | `image` | Sends a inverted color image filter |
| `bnw()` | `image` | Sends a black and white image filter |
| `deepfry()` | `image` | Sends a deep fry image filter |
| `pixelate()` | `image` | Sends a pixelated image filter |
| `magik()` | `image` | Sends a magik image filter |
| `jpegify()` | `image` | Turns image into jpeg |
| `snow()` | `image` | Sends a snow image filter |
| `gay()` | `image` | Sends a gay image filter |
| `wide()` | `image` | Sends a wide Putin image filter |
| `sepia()` | `image` | Sends a Sepia image filter |
| `communist()` | `image` | Sends a communist image filter |
| `what()` | `image` | Sends an Earthbound WHAT meme |
| `colorify()` | `image` `c(optional)` `b(optional)` | Sends a colorify image filter |
| `floor()` | `image` `text` | The floor is lava |
| `scroll()` | `text` | Sends the Scroll of Truth |
| `facts()` | `text` | Sends the facts book |
| `calling()` | `text` | Tom&Jerry Tom calling Meme image |
| `captcha()` | `text` | Sends a Google Captcha image |
| `fml()` | `text` | Sends a F*** my life quote |
| `achievement()` | `text` `icon(optional)` | Sends a Minecraft Achievement image |
| `challenge()` | `text` `icon(optional)` | Sends a Minecraft Challenge image |
| `supreme()` | `text` `dark(optional)` `light(optional)` | Sends a Supreme image |
| `didyoumean()` | `top` `bottom` | Google Did you mean? |
| `drake()` | `top` `bottom` | Drake meme image |
| `pornhub()` | `text` `text2` | Pornhub Logo image |
| `ship()` | `user` `user2` | Ships 2 users |
| `trash()` | `face` `trash` | Points out someone is trash |

### Others
| Function | Params | Description |
| -------- | ------ | ----------- |
| `color()` | `hex` | Searches a Color |

Params such as:
`image`,`user`,`user2`,`face`,`trash` requires Discord CDN and MEDIA URLs

`dark`,`light` requires a boolean value formatted as a string (`"true"`,`"false"`)

`icons` requires a number (int) value

`text` requires strings

All endpoints will return a `Buffer` except birb/cats/dogs/sadcat/color/fml

`birb/cats/dogs/sadcat` will return a JSON `{file: "https://api.alexflipnote.dev/cats/zDm8l4maVQg_cats.png"}`

`color` will return a JSON (example: [Color](https://github.com/HarutoHiroki/alexflipnote.js/blob/master/README.md#Color-Example))

`fml` will return a JSON `{"text": "Today, I was running late for school and accidentally ran a red light and got pulled over. I couldn't find the registration and was freaking out, when the cop told me that he wouldn't give me a ticket if he could give me some advice. His advice? Don't wear your shirt inside-out. FML"}`

## Typings
I added a typings file and will be working to perfect it. This allows editors like VSC to use intellisense/autocomplete to suggest functions and help out with parameters and to see what you'll be receiving as a result of function calls.

## Examples
### Await/Async example
```js
const client = require('alexflipnote.js');
const alexclient = new client('Your-API-Token-Here');

let link = await alexclient.image.cats();
message.channel.send({files: [{ attachment: link.file }]});

```

### Colorify Example
```js
const client = require('alexflipnote.js');
const alexclient = new client('Your-API-Token-Here');

let url = "https://cdn.discordapp.com/avatars/242263403001937920/37050aab01de8806e4bc1e2b83983439.webp?size=1024";

let link = await alexclient.image.colorify({image: url, c: "00ffd9", b: "000000"});
message.channel.send({files: [{ attachment: link }]});

```

### Color Example
```js
const client = require('alexflipnote.js');
const alexclient = new client('Your-API-Token-Here');
let body = await alexclient.others.color('00ffd9');
message.channel.send(body);

``` 
returns:
```cmd
{
  "blackorwhite_text": "#ffffff", 
  "brightness": 157, 
  "hex": "#00ffd9", 
  "image": "https://api.alexflipnote.dev/color/image/00ffd9", 
  "image_gradient": "https://api.alexflipnote.dev/color/image/gradient/00ffd9", 
  "int": 65497, 
  "name": "Bright Teal", 
  "rgb": "rgb(0, 255, 217)", 
  "rgb_values": {"r": 0, "g": 255, "b": 217}, 
  "shade": ["00ffd9", "00e5c3", "00ccad", "00b297", "009982", "007f6c", "006556", "004c41", "00322b", "001915", "000000"], 
  "tint": ["00ffd9", "19ffdc", "33ffe0", "4cffe4", "66ffe8", "7fffec", "99ffef", "b2fff3", "ccfff7", "e5fffb", "FFFFFF"]
}
```

# Made By
This wrapper is made by HarutoHiroki#4000 on Discord.

For questions and bug reports you can join [my server](https://discord.gg/sjtcnRb) or [AlexFlipnote's server](https://discord.gg/alexflipnote)

Suggestions are welcomed!
