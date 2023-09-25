/**
 * It receives an array of strings and returns
 * the first longest string from it.
 * Also, in the alphabetically first in case of more.
 *
 * @param {string[]} strings
 * @returns {string} longest string or empty string in other cases
 */

module.exports = function longestString(strings){
    let arrayOfLongestStrings;
    let lengthOfLongestStrings = 0;
    if(!Array.isArray(strings)) return "";
    arrayOfLongestStrings = strings.filter(string => typeof string === "string");
    if(arrayOfLongestStrings.length == 0) return "";
    strings.forEach(string => {
        if (string.length > lengthOfLongestStrings) {
            lengthOfLongestStrings = string.length;
        }
    });
    arrayOfLongestStrings = strings.filter(string => string.length === lengthOfLongestStrings);
    return arrayOfLongestStrings.sort()[0];
}