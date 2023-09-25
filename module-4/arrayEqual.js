/**
 * It determines, whether the given two arrays
 * are equal, by considering the number of elements,
 * those order and value, in all levels.
 * 
 * It prints out a message in case of any
 * difference in an array, using the console.warn!
 * 
 * @param {Array} first The first array
 * @param {Array} second The second array
 * @returns {boolean} true if the two arrays are equal,
 *                    false otherwise
 */

module.exports = function arrayEqual(first, second){
    if(first.length !== second.length){
        console.warn(`The length of the two arrays are different: ${first.length} and ${second.length}`);
        return false;
    }
    else{
        for(let i = 0; i < first.length; i++){
            if(Array.isArray(first[i])){
               return arrayEqual(first[i],second[i]);
            }
            if(first[i] !== second[i]){
                console.warn(`The arrays contain a different value on ${i}.place: ${first[i]} and ${second[i]}`);
                return false;
            }
        }
        return true;
    }
}