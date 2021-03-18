# alexflipnote.js [![npm](https://img.shields.io/npm/v/alexflipnote.js.svg)](https://www.npmjs.com/package/alexflipnote.js) [![npm](https://img.shields.io/npm/dt/alexflipnote.js.svg?maxAge=3600)](https://www.npmjs.com/package/alexflipnote.js) [![install size](https://packagephobia.now.sh/badge?p=alexflipnote.js)](https://packagephobia.now.sh/result?p=alexflipnote.js) [![dependencies](https://david-dm.org/harutohiroki/alexflipnote.js.svg)]
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
| Function | Params | Description | Type |
| -------- | ------ | ----------- | ---- |
| `birb()` | none | Sends a random birb image | JSON |
| `cats()` | none | Sends a random cat image | JSON |
| `dogs()` | none | Sends a random dog image | JSON |
| `sadcat()` | none | Sends a random sad cat image | JSON |
| `coffee()` | none | Sends a random Coffee image | JSON |
| `amiajoke()` | `image` | Am I A Joke Meme | Buffer |
| `bad()` | `image` | Show someone how bad they are | Buffer |
| `joke()` | `image` | r/wooosh | Buffer |
| `salty()` | `image` | Sends a salty image filter | Buffer |
| `blur()` | `image` | Sends a blur image filter | Buffer |
| `invert()` | `image` | Sends a inverted color image filter | Buffer |
| `bnw()` | `image` | Sends a black and white image filter | Buffer |
| `flip()` | `image` | Sends a the flipped version of the image | Buffer |
| `mirror()` | `image` | Sends a the mirrored version of the image | Buffer |
| `deepfry()` | `image` | Sends a deep fry image filter | Buffer |
| `pixelate()` | `image` | Sends a pixelated image filter | Buffer |
| `magik()` | `image` | Sends a magik image filter | Buffer |
| `jpegify()` | `image` | Turns image into jpeg | Buffer |
| `snow()` | `image` | Sends a snow image filter | Buffer |
| `gay()` | `image` | Sends a gay image filter | Buffer |
| `wide()` | `image` | Sends a wide Putin image filter | Buffer |
| `sepia()` | `image` | Sends a Sepia image filter | Buffer |
| `communist()` | `image` | Sends a communist image filter | Buffer |
| `what()` | `image` | Sends an Earthbound WHAT meme | Buffer |
| `shame()` | `image` | Sends you to the Dock of Shame | Buffer |
| `colorify()` | `image` `c(optional)` `b(optional)` | Sends a colorify image filter | Buffer |
| `floor()` | `image` `text` | The floor is lava | Buffer |
| `scroll()` | `text` | Sends the Scroll of Truth | Buffer |
| `facts()` | `text` | Sends the facts book | Buffer |
| `calling()` | `text` | Tom&Jerry Tom calling Meme image | Buffer |
| `captcha()` | `text` | Sends a Google Captcha image | Buffer |
| `achievement()` | `text` `icon(optional)` | Sends a Minecraft Achievement image | Buffer |
| `challenge()` | `text` `icon(optional)` | Sends a Minecraft Challenge image | Buffer |
| `supreme()` | `text` `dark(optional)` `light(optional)` | Sends a Supreme image | Buffer |
| `didyoumean()` | `top` `bottom` | Google Did you mean? | Buffer |
| `drake()` | `top` `bottom` | Drake meme image | Buffer |
| `pornhub()` | `text` `text2` | Pornhub Logo image | Buffer |
| `ship()` | `user` `user2` | Ships 2 users | Buffer |
| `trash()` | `face` `trash` | Points out someone is trash | Buffer |

### Others
| Function | Params | Description | Type |
| -------- | ------ | ----------- | ---- |
| `fml()` | none | Sends a random F*** my life quote | JSON |
| `color()` | `hex` | Searches a color from hex code and provide more info | JSON |

Params such as:
`image`,`user`,`user2`,`face`,`trash` requires Discord CDN and MEDIA URLs

`dark`,`light` requires a boolean value formatted as a string (`"true"`,`"false"`)

`icons` requires a number (int) value

`text` requires strings

All endpoints will return a `Buffer` except birb/cats/dogs/sadcat/coffee/fml/color, which will return a `JSON`

`birb/cats/dogs/sadcat/coffee` will return a JSON `{file: "https://api.alexflipnote.dev/cats/zDm8l4maVQg_cats.png"}`

`color` will return a JSON (example: [Color](https://github.com/HarutoHiroki/alexflipnote.js/blob/master/README.md#Color-Example))

`fml` will return a JSON `{"text": "Today, I was running late for school and accidentally ran a red light and got pulled over. I couldn't find the registration and was freaking out, when the cop told me that he wouldn't give me a ticket if he could give me some advice. His advice? Don't wear your shirt inside-out. FML"}`

## Typings
I added a typings file and will be working to perfect it. This allows editors like VSC to use intellisense/autocomplete to suggest functions and help out with parameters and to see what you'll be receiving as a result of function calls.

## Examples
### Cats Example
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
