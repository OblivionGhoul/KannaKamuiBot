# one-liner-joke
[![Build Status](https://api.travis-ci.org/faiyaz26/one-liner-joke.svg?branch=master)](https://travis-ci.org/faiyaz26/one-liner-joke)


A simple Node Module which can provide one line joke randomly or from specific tag


This module contains more than 2200 one line jokes.



### Installation
```
npm install one-liner-joke --save
```


### Usage

```
var oneLinerJoke = require('one-liner-joke');

/*
The variable getRandomJoke will contain a random joke with a format:
{"body":"Artificial intelligence is no match for natural stupidity.","tags":["intelligence","stupid"]}
*/
var getRandomJoke = oneLinerJoke.getRandomJoke();
console.log(getRandomJoke)

/*
One can add exclusion filter for the jokes tags
default is ['racist', 'dirty', 'sex']
*/
var getRandomJoke = oneLinerJoke.getRandomJoke({
    'exclude_tags': ['dirty', 'racist', 'marriage']
  });
console.log(getRandomJoke)


/*
The variable getRandomJoke will contain a random joke with a tag and with a format:
{"body":"Artificial intelligence is no match for natural stupidity.","tags":["intelligence","stupid"]}
*/

var getRandomJokeWithTag = oneLinerJoke.getRandomJokeWithTag('stupid');
console.log(getRandomJokeWithTag)

/*
One can add exclusion filter for the jokes tags
default is ['racist', 'dirty', 'sex']
*/
var getRandomJoke = oneLinerJoke.getRandomJokeWithTag('stupid', {
  'exclude_tags': ['dirty', 'racist', 'marriage']
});
console.log(getRandomJoke)

```

## Tests
```
npm test
```
