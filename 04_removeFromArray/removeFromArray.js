const removeFromArray = function(array, element, elementToo, element3, element4) {
    array = array.filter(item => item !== element);
    array = array.filter(item => item !== elementToo);
    array = array.filter(item => item !== element3);
    array = array.filter(item => item !== element4);
    return array;

};
removeFromArray([1, 2, 3, 4], 3, 1, 2, 4);
// Do not edit below this line
module.exports = removeFromArray;
