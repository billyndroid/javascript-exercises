const removeFromArray = function(array, element, elementToo) {
    array = array.filter(item => item !== element);
    array = array.filter(item => item !== elementToo);
    return array;

};
removeFromArray([1, 2, 3, 4], 3, 1);
// Do not edit below this line
module.exports = removeFromArray;
