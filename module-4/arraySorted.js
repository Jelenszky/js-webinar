/**
 * It determines whether the given array is sorted in
 * alphabetically ascending order.
 * 
 * It ignores
 *  - case of the character
 *  - given special characters (nothing by default)
 *  - whitespaces
 * 
 * @param {string[]} items the subject items
 * @param {string} ignore characters to ignore
 * @returns {boolean} true if the array is properly sorted,
 *                    false otherwise
 */

module.exports = function arraySorted(items, ignore){
    let copy = [... items];
    for(let i = 0; i < copy.length; i++){
        if(typeof copy[i] === "string"){
            copy[i] = copy[i].toLowerCase();
            if(ignore !== undefined){
                for(let char of ignore){
                    if(copy[i].includes(char)){
                        copy[i] = copy[i].replaceAll(char, '');
                    }
                }
            }
            copy[i] = copy[i].replace(/\s/g, '');
        }
    }
    sortedArray = [... copy];
    sortedArray.sort();
    for(let i = 0; i < copy.length; i++){
        if(sortedArray[i] !== copy[i]){
            return false;
        }
    }
    return true;
}