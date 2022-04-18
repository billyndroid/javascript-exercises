

const reverseString = function() {
    let string = '';
    const splitString = string.split();
    const reversed = splitString.reverse();
    let backwardsString = reversed.join('');
    return backwardsString;
};
reverseString('hello');
// Do not edit below this line
module.exports = reverseString;
