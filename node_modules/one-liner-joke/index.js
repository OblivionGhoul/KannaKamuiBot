var jokes = require('./jokes.json');

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


exclude_tags_default = ['racist', 'dirty', 'sex']

function getRandomJoke(options={
    'exclude_tags': exclude_tags_default
}){
    const min = 0;
    const max = jokes.length - 1;
    const exclude_tags = options['exclude_tags'];
    while(true){
        const idx = getRandomInt(min, max);
        let joke = jokes[idx];
        let flagged = 0;
        for(let i = 0; i < exclude_tags.length; i++){
            if(joke.tags.indexOf(exclude_tags[i]) > 0){
                flagged = 1;
            }
        }

        if(flagged === 0){
            return joke;
        }
    }
    return null;
}

function getAllJokesWithTag(tag){
    var jokesWithTag = [];
    jokes.forEach(function(joke) {
        if(joke.tags.indexOf(tag) != -1){
            jokesWithTag.push(joke);
        }
    });
    
    return jokesWithTag;
}

function getRandomJokeWithTag(tag, options={
    'exclude_tags': exclude_tags_default
}){
    var jokesWithTag = getAllJokesWithTag(tag);
    const exclude_tags = options['exclude_tags'];
    
    if(jokesWithTag.length == 0){
        return {'body' : '', 'tags' : []};
    }

    const min = 0;
    const max = jokesWithTag.length - 1;
    while(true){
        const idx = getRandomInt(min, max);
        let joke = jokesWithTag[idx];
        let flagged = 0;
        for(let i = 0; i < exclude_tags.length; i++){
            if(joke.tags.indexOf(exclude_tags[i]) > 0){
                flagged = 1;
            }
        }

        if(flagged === 0){
            return joke;
        }
    }
    return null;
}

module.exports = {
    getRandomJoke : getRandomJoke,
    getAllJokesWithTag: getAllJokesWithTag, 
    getRandomJokeWithTag: getRandomJokeWithTag
};