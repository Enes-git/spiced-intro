// Exercise 1
function each(param, callback) {
    if (typeof param == "object") {
        for (var key in param) {
            callback(param[key], key);
        }
    } else if (Array.isArray(param)) {
        for (var i = 0; i < param.length; i++) {
            callback(param[i], i);
        }
    }
}

each(
    {
        a: 1,
        b: 2,
    },
    function (val, name) {
        console.log("The value of " + name + " is " + val);
    }
); // logs 'the value of a is 1' and 'the value of b is 2'

each(["a", "b"], function (val, idx) {
    console.log("The value of item " + idx + " is " + val);
}); // logs 'the value of item 0 is a' and 'the value of item 1 is b'

// Exercise 2
function reversive(someArray) {
    var anotherArray = [];
    for (var i = 0; i < someArray.length; i++) {
        anotherArray.unshift(someArray[i]);
    }
    console.log(someArray, anotherArray);
}

reversive([1, 2, 3]);

// Exercise 3
function getLessThanZero(numArray) {
    var newArray = [];
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] < 0) {
            newArray.push(numArray[i]);
        }
    }
    return newArray;
}

console.log(getLessThanZero([-1, 5, 45, -10, 0]));
