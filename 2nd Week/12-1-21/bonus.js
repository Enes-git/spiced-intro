function getLessThanZero(numArr) {
    var newArray = [];
    for (var i = 0; i < numArr.lenght; i++) {
        if (numArr[i] < 0) {
            newArray.unshift(numArr[i]);
        }
    }
    return newArray;
}

// OR

function getLessThanZero(a) {
    return a.filter(function (n) {
        return n < 0;
    });
}