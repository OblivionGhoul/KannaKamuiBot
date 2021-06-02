---
description: 'The class for generating secure IDs, formatting time and much more...'
---

# Generation

{% hint style="danger" %}
Please make sure you do not instantiate this class. You can access it through`const somethingRandom = require('some-random-cat').Generation`
{% endhint %}

## Methods                                                                                                     [&lt;/ &gt;](https://github.com/Aktindo/some-random-cat/blob/dev/src/Generation.js)

### `.formatTime(time)` `STATIC`                                                                                [ &lt;/ &gt;](https://github.com/Aktindo/some-random-cat/blob/dev/src/Generation.js#L47)

> Generation method to format time to 00:00

| PARAMETER | TYPE | OPTIONAL | DEFAULT | DESCRIPTION |
| :---: | :---: | :---: | :---: | :---: |
| time | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | ❌ | none | The time to format. |

{% hint style="success" %}
Returns: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)&gt;
{% endhint %}

### `.generateId(options)` `STATIC`                                                                         [ &lt;/ &gt;](https://github.com/Aktindo/some-random-cat/blob/dev/src/Generation.js#L11)

> Generation method to secure a well secure UUID.

| PARAMETER | TYPE | OPTIONAL | DEFAULT | DESCRIPTION |
| :---: | :---: | :---: | :---: | :---: |
| options | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | ✅ | none | The options for the ID. |
| options.putDash | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | ✅ | true | Whether or not to put a `-` |

{% hint style="success" %}
Returns: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)&gt;
{% endhint %}

### `.getAcronym(name)` `STATIC`                                                                                [ &lt;/ &gt;](https://github.com/Aktindo/some-random-cat/blob/dev/src/Generation.js#L61)

> Generation method to get acronym for a string.

| PARAMETER | TYPE | OPTIONAL | DEFAULT | DESCRIPTION |
| :---: | :---: | :---: | :---: | :---: |
| name | String | ❌ | none | The string to get acronym for. |

{% hint style="success" %}
Returns: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)&gt;
{% endhint %}

### `.shorten(text, length)` `STATIC`                                                                    [ &lt;/ &gt;](https://github.com/Aktindo/some-random-cat/blob/dev/src/Generation.js#L36)

> Generation method to shorten a string by length.

| PARAMETER | TYPE | OPTIONAL | DEFAULT | DESCRIPTION |
| :---: | :---: | :---: | :---: | :---: |
| text | String | ❌ | none | The string to shorten. |
| length | Number | ❌ | none | The length to shorten. |

{% hint style="success" %}
Returns: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)&gt;
{% endhint %}

