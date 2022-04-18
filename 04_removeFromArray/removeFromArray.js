const removeFromArray = function(array, element) {
    array = array.filter(item => item !== element);
    return array;

};
removeFromArray([1, 2, 3, 4], 3);
// Do not edit below this line
module.exports = removeFromArray;
