const axios = require("axios");

const getNPM = async (name) => {
  if (!name) throw "name of the package is required."
  const { data } = await axios("https://registry.npmjs.org/" + name)
  if (!data) throw "Error 01: Unable to access the json content of API"
  if (data.error) return {
    embed: {
      color: "RED",
      description: "I can not find any package with this name, make sure you give valid name."
    }
  }

  const downloads = await axios("https://api.npmjs.org/downloads/point/last-week/" + name)

  let package = data.versions[data['dist-tags'].latest]

  let content = {
    embed: {
      title: package.name,
      url: "https://www.npmjs.com/package/" + data.name,
      color: "#d50000",
      thumbnail: { url: "https://img.icons8.com/color/452/npm.png" },
      description: package.description,
      footer: { text: "latest version: " + package.version },
      "fields": [
        {
          "name": "License",
          "value": package.license,
          "inline": true
        },
        {
          "name": "Downloads",
          "value": downloads.data ? downloads.data.downloads : "0",
          "inline": true
        },
        {
          "name": "Maintainers",
          "value": data.maintainers.map(m => m = m.name).join(", ")
        },
        {
          "name": "Source code",
          "value": `[Download](${package.dist.tarball}) [${package.dist.fileCount} files]`
        }
      ]
    }
  }

  return content;
}

module.exports = getNPM;