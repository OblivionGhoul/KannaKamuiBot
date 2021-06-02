# nekobot-api [![npm](https://img.shields.io/npm/v/nekobot-api)](https://npmjs.com/package/nekobot-api "nekobot-api")
[NekoBot API](https://docs.nekobot.xyz/ "NekoBot API") wrapper for Node.js

## Installing
```sh
# npm
npm i nekobot-api

# yarn
yarn add nekobot-api
```

## Example Usage
```js
const { NekoBot } = require("nekobot-api");
const api = new NekoBot();

// imagegen endpoint
(async () => {
    const image = await api.generate("magik", { image: "image url" });
    console.log(image);
})();

// image endpoint
(async () => {
    const image = await api.get("food");
    console.log(image);
})();
```
[Documentation](https://allvaa.github.io/nekobot-api "Documentaion")