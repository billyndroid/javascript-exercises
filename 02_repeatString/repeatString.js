const repeatString = function(string, num) {
    var repeatedString = "";
    while (num > 0) {
        repeatedString += string; 
        num--;
    }
    if(num < 0){
        return "ERROR";
    }
    else {
    return repeatedString; 
    }
};
repeatString("hey", 3);

// Do not edit below this line
module.exports = repeatString;
