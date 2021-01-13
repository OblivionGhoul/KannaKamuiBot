---
description: >-
  The class for generating random things such as cat images, dog images, jokes
  and much more!
---

# Random

{% hint style="danger" %}
Please make sure you do not instantiate this class. You can access it though `const something = require('some-random-cat').Random`
{% endhint %}

##  Methods                                                                                                     [&lt;/ &gt;](https://github.com/Aktindo/some-random-cat/blob/main/src/Random.js)

### `.getAdvice()` `STATIC`                                                                                            [ &lt;/ &gt;](https://github.com/Aktindo/some-random-cat/blob/35cb1df940d8939da1c246cb1b68f1c06610242f/src/Random.js#L84)

> Random method to generate an advice.

| Type | Description |
| :--- | :--- |
| any | The string with the advice. |

{% hint style="success" %}
Returns: [`Promise<Pending>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\`\`
{% endhint %}

### `.getCat()` `STATIC`                                                                                                     [&lt;/ &gt;](https://github.com/Aktindo/some-random-cat/blob/35cb1df940d8939da1c246cb1b68f1c06610242f/src/Random.js#L14)

> Random method to generate a random cat image.

| Type | Description |
| :--- | :--- |
| any | URL for the image. |

{% hint style="success" %}
Returns: [`Promise<Pending>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
{% endhint %}

### `.getDog()` `STATIC`                                                                                                     [&lt;/ &gt;](https://github.com/Aktindo/some-random-cat/blob/35cb1df940d8939da1c246cb1b68f1c06610242f/src/Random.js#L24)

> Random method to generate a random dog image.

| Type | Description |
| :--- | :--- |
| any | URL for the image. |

{% hint style="success" %}
Returns: [`Promise<Pending>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
{% endhint %}

### `.getFact()` `STATIC`                                                                                                  [&lt;/ &gt;](https://github.com/Aktindo/some-random-cat/blob/35cb1df940d8939da1c246cb1b68f1c06610242f/src/Random.js#L101)

> Random method to generate a random fact.

| Type | Description |
| :--- | :--- |
| any | The string for the fact. |

{% hint style="success" %}
Returns: [`Promise<Pending>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\`\`
{% endhint %}

### `.getJoke()` `STATIC`                                                                                                  [&lt;/ &gt;](https://github.com/Aktindo/some-random-cat/blob/35cb1df940d8939da1c246cb1b68f1c06610242f/src/Random.js#L35)

> Random method to generate a random joke.

| Type | Description |
| :--- | :--- |
| any | An object with the title, description and URL |

{% hint style="success" %}
Returns: [`Promise<Pending>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
{% endhint %}

### `.getMeme(sub)` `STATIC`                                                                                           [&lt;/ &gt;](https://github.com/Aktindo/some-random-cat/blob/35cb1df940d8939da1c246cb1b68f1c06610242f/src/Random.js#L47)

> Random method to generate a meme.

| Parameters | Type | Optional | Description |
| :--- | :--- | :--- | :--- |
| sub | String |       ❌ | The subreddit to get the meme from. |

{% hint style="success" %}
Returns: [`Promise<Pending>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\`\`
{% endhint %}

### `.getString(number)` `STATIC`                                                                               [&lt;/ &gt;](https://github.com/Aktindo/some-random-cat/blob/35cb1df940d8939da1c246cb1b68f1c06610242f/src/Random.js#L73)

> Gets a random string of a length.

| Parameters | Type | Optional | Description |
| :--- | :--- | :--- | :--- |
| number | Number |       ❌ | The length of the string. |

{% hint style="success" %}
Returns: [`Promise<Pending>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\`\`
{% endhint %}

### `.getTopic()` `STATIC`                                                                                                [&lt;/ &gt;](https://github.com/Aktindo/some-random-cat/blob/35cb1df940d8939da1c246cb1b68f1c06610242f/src/Random.js#L111)

> Random method to generate a topic.

| Type | Description |
| :--- | :--- |
| any | The string with the topic. |

{% hint style="success" %}
Returns:[`Promise<Pending>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\`\`
{% endhint %}

