/**
 * It returns the camel-case version of string.
 * E.g.: simple lowercase string => SimpleLowercaseString
 *
 * @param {string} toConvert
 * @returns {string} camel-case string or empty string in other cases
 */

module.exports = function toCamelCase(toConvert){
    if(typeof toConvert !== "string"){
        return "";
    }
    let arrayOfStrings;
    arrayOfStrings = toConvert.replace(/\s/g, ' ').split(" ");
    arrayOfStrings = arrayOfStrings.filter(element =>  element !== "");
    arrayOfStrings = arrayOfStrings.map(string => removeNonAlphanumeric(string));
    let resultString = "";
    for(let i = 0; i < arrayOfStrings.length; i++){
        if(i == 0){
            resultString += arrayOfStrings[i].toLowerCase();
        }
        else{
            resultString += arrayOfStrings[i].toUpperCase().charAt(0) + arrayOfStrings[i].toLowerCase().substring(1);

        }
    }
    return resultString;
}

function removeNonAlphanumeric(inputString) {
    return inputString.replace(/[^a-zA-Z0-9]/g, '');
  }