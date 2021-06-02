const moment = require('moment')
const momentDurationFormatSetup = require("moment-duration-format");
momentDurationFormatSetup(moment);
class Generation {
    /**
     * 
     * @param {Object} ops The options for generating a secure ID.
     * @param {Boolean} [ops.putDash] Whether the ID should contain a "-" 
     * @returns {String}
     */
    static generateId(ops = {putDash: true}) {
        var dt = new Date().getTime();
        if (ops.putDash === false) {
            var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = (dt + Math.random()*16)%16 | 0;
                dt = Math.floor(dt/16);
                return (c=='x' ? r :(r&0x3|0x8)).toString(16);
            });
        }
        else {
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = (dt + Math.random()*16)%16 | 0;
                dt = Math.floor(dt/16);
                return (c=='x' ? r :(r&0x3|0x8)).toString(16);
            });
        }
        return uuid;
    }

    /**
     * Shorten text.
     * @param {String} text Text to shorten 
     * @param {Number} length Max Length
     * @returns {String}
     */
    static shorten(text, length) {
        if (typeof text !== "string") return "";
        if (text.length <= length) return text;
        return text.substr(0, length).trim() + "...";
    }

    /**
     * Formats time to x::y
     * @param {Number} time Time to format
     * @returns {String}
     */
    static formatTime(time) {
        if (!time) return "00:00";
        const fmt = moment.duration(time).format("dd:hh:mm:ss")

        const chunk = fmt.split(":");
        if (chunk.length < 2) chunk.unshift("00");
        return chunk.join(":");
    }

    /**
     * Returns acronym
     * @param {string} name Name to parse acronym
     * @returns {string}
     */
    static getAcronym(name) {
        if (!name || typeof name !== "string") return "";
        return name
            .replace(/'s /g, " ")
            .replace(/\w+/g, e => e[0])
            .replace(/\s/g, "");
    }
}

module.exports = Generation