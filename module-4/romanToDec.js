/**
 * It receives a Roman number (as string)
 * and converts it to its Arabic (decimal) equivalent.
 *
 * @see https://en.wikipedia.org/wiki/Roman_numerals
 * @param {string} roman
 * @returns {number} the Arabic (decimal) equivalent of the parameter
 * @throws Error in case of invalid input
 */

module.exports = function romanToDec(roman){
    const romanValues = {
        'i': 1, 'v': 5, 'x': 10, 'l': 50,
        'c': 100, 'd': 500, 'm': 1000
      };
    if(typeof roman !== "string"){
        console.warn("The given argument is Not a string");
        return false;
    } 
    else if(!isAValidRomanNumber(roman)){
        console.warn("Not a valid roman number");
        return false;
    } 
    else{
        let total = 0;
        for (let i = 0; i < roman.length-1; i++) {
            if (romanValues[roman[i+1]] > romanValues[roman[i]]) {
                total -= romanValues[roman[i]];
            } else total += romanValues[roman[i]];
        }
        total += romanValues[roman[roman.length - 1]];
        return total;
    }
}

function isAValidRomanNumber(roman){
    return /^m{0,3}(cm|cd|d?c{0,3})(xc|xl|l?x{0,3})(ix|iv|v?i{0,3})$/.test(roman);
}