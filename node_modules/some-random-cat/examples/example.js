const SomeRandomCat = require('../index').Random
SomeRandomCat.getCat()
.then(res => {
    console.log(res)
    return
})
.catch(e => {
    console.error(e)
    return
})