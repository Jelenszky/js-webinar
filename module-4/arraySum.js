/**
 * It receives an array of strings, integers and
 * arrays, like itself.
 * Return the summary of all integers in it on
 * any level.
 *
 * @param {Array} elements
 * @returns {number} summary of all integers or 0 in other cases
 */

module.exports = function arraySum(elements){
    let result = 0;
    for(let i = 0; i < elements.length; i++){
        if(Number.isInteger(elements[i])){
            result += elements[i];
        }
        else if(Array.isArray(elements[i])){
            result += arraySum(elements[i]);
        }
    }
    return result;
}