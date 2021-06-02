const isURL = (link) => {
if(!link) return;
return link.match(/(https|http)(:\/\/)(\S)+/g) ? true : false
}

module.exports = isURL;