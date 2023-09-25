/**
 * It wait for the given seconds, but at most 10 seconds.
 *
 * @param {number} sec the seconds to wait
 * @returns {Promise} the promise which resolves when wait if over
 *                    or rejects if parameter is not correct
 */

module.exports = async function sleep(sec) {
    return new Promise (
        function(resolve, reject) {
        if (!isNaN(sec)) {
            if (sec > 10) sec = 10;
            setTimeout(() => {
                resolve("Succesfully executed")
            }, sec * 1000);
        } else reject("Wrong parameter");
    });
}