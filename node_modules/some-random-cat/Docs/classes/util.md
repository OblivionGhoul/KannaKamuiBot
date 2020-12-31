---
description: The class for getting information on the package or testing it.
---

# Util

{% hint style="danger" %}
Please make sure you do not instantiate this class. You can access it though `const something = require('some-random-cat').Random`
{% endhint %}

## Properties

### `.info` `STATIC`

> The general information for the package.

| PARAMETER | TYPE | DESCRIPTION |
| :--- | :--- | :--- |
| author | String | The author\(s\) of the package. |
| description | String | The description of the package. |
| repo | Object | Current repository\(s\) of the package. |
| version | String | The version of the package. |

{% hint style="success" %}
Type: ?[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
{% endhint %}

## Methods

### `.test()` `STATIC`

Random method to generate an advice.

| Type | Description |
| :--- | :--- |
| any | Tests the package and retrieves an error\(if any\). |

{% hint style="success" %}
Returns: [`Promise<Pending>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\`\`
{% endhint %}

