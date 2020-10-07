# node-canvas-with-twemoji-and-discord-emoji

A fork of node-canvas-with-twemoji with Discord emoji support.

## Installation
```shell
$ npm install node-canvas-with-twemoji-and-discord-emoji
```
[npm](https://www.npmjs.com/package/node-canvas-with-twemoji-and-discord-emoji)

## Quick Example
```javascript
const { createCanvas } = require('canvas');
const { fillTextWithTwemoji } = require('node-canvas-with-twemoji-and-discord-emoji');

async function main () {
    const canvas = createCanvas(200, 200);
    const context = canvas.getContext('2d');

    context.fillStyle = '#000000';
    context.font = '30px Arial';
    await fillTextWithTwemoji(context, '😉', 100, 100);
}

main();
```

## Dependencies

- node-canvas [GitHub](https://github.com/Automattic/node-canvas)
- twemoji-parser [GitHub](https://github.com/twitter/twemoji-parser)

## Licence

### node-canvas-with-twemoji

Copyright (c) 2020 cagpie <cagpie@gmail.com>

Code licensed under the MIT License: http://opensource.org/licenses/MIT
