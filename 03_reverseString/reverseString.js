

const reverseString = function(string) {
    
    const splitString = string.split('');
    const reversedArray = splitString.reverse();
    let backwardsString = reversedArray.join('');
    return backwardsString;
};


reverseString('hello');
// Do not edit below this line
module.exports = reverseString;
