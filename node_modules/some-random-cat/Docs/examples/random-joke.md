---
description: An example of how to generate a random joke!
---

# Random Joke

## Code

```javascript
// This snippet uses some-random-cat version 2.0

const somethingRandom = require('some-random-cat').Random
somethingRandom.getJoke()
.then(res => {
    console.log(res)
    return
}) // Get the result
.catch(e => {
    console.error(e)
    return
}) // Catch the error
```

## Output

![Note: This returns a default JavaScript Object.](../.gitbook/assets/joke.png)

