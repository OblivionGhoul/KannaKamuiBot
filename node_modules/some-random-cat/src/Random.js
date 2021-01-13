const axios = require('axios').default
class Random {
    /**
     * ⚠ Please do not intantiate this class.
     */
    constructor() {
        throw new Error('SomeRandomCat > You may not instantiate this class!')
    }


    /**
     * @returns {Promise<Pending>} Returns the URL for the cat img.
     */
    static async getCat() {
        const res = await axios.get('https://api.thecatapi.com/v1/images/search?format=json')
        if (!res) throw new Error('SomeRandomCat > Error fetching a random image from API.')
        let data = res.data[0].url
        return data
    }

    /**
     * @returns {Promise<Pending>} Returns a URL of the picture.
     */
    static async getDog() {
        const res = await axios.get('https://dog.ceo/api/breeds/image/random')
        if (!res) throw new Error('SomeRandomCat > Error fetching a random image from API.')
        let data = res.data.message
        return data
    }

    /**
     *  
     * @returns {Promise<Pending>} Returns an object with a promise.
     */
    static async getJoke() {
        // https://apis.duncte123.me/joke
        const res = await axios.get('https://apis.duncte123.me/joke')
        if (!res) throw new Error('SomeRandomCat > Error fetching a random joke from API.')
        else return res.data.data
    }

    /**
     * @param {String} sub The subreddit's name.
     * @returns {Promise<Pending>} Returns an object with a promise.
     */

    static async getMeme(sub) {
        if (!sub) Promise.reject("SomeRandomCat > Error, you did not specify a subreddit!");
        const start = Date.now()
        const response = await axios.get(
          `https://imageapi.fionn.live/reddit/${sub.toLowerCase()}`
        )
        const responseTime = Date.now() - start;
        if (response.error || response.err)
          Promise.reject("SomeRandomCat > Error, probably due to an invalid subreddit!");
      
        return {
          img: response.data.img,
          res: responseTime,
          title: response.data.title,
          upvotes: response.data.upvotes,
          author: response.data.author,
          upvoteRatio: response.data.upvoteRatio,
          comments: response.data.comments,
          downvotes: response.data.downvotes,
        };
    }

    /**
     * @param {Number} number The length of the string
     * @returns {Promise<Pending>} Returns a string.
     */
    static async getString(number) {
        const res = await axios.get(`https://apis.duncte123.me/random-string/${number}`)
        if (!number) throw new TypeError('SomeRandomCat > No number specified. Please specify a number!')
        if (!res) throw new Error('SomeRandomCat > Error fetching a random string from API.')
        else return res.data.data
    }
    // https://apis.duncte123.me/random-string/

    /**
     * @returns {Promise<Pending>} Returns a string with advice.
     */
    static async getAdvice() {
        const main = await axios.get("https://api.adviceslip.com/advice");
        const mat = await main.data
    
        if (!mat) {
          return console.log("SomeRandomCat > Unable to access the json content of API");
        }
    
        let content = mat.slip.advice
    
        return content;
    }

    /**
     * @returns {Promise<Pending>} Returns a string with the fact.
     */

    static async getFact() {
        const main = await axios.get('https://bruhapi.xyz/fact')
        let content = main.data.res
        return content;
    }

    /**
     * @returns {Promise<Pending>} Returns a string with the topic.
     */

    static async getTopic() {
        const main = await axios.get('http://bruhapi.xyz/topic')
        let content = main.data.res
        return content;
    }
}

module.exports = Random