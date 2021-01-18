function each(objOrArr, callback) {         //This is the wrong logic-arrays will pass this test-first you must check the arrays!
    if (typeof objOrArr == "object") {
        for (var key in objOrArr) {
            callback(objOrArr.key, key);
        }
    } else if (Array.isArray(objOrArr)) {
        for (var i = 0; i < objOrArr.length; i++) {
            callback(objOrArr[i], i);
        }
    }
}

// OR

function each(objOrArray, callback) {
    if (Array.isArray(objOrArray)) {
        // soln: objOrArray.forEach(callback);
        for (var i = 0; i < objOrArray.length; i++) {
            callback(objOrArray[i], i);
        }
    } else {
        for (var key in objOrArray) {
            callback(objOrArray[key], key);
        }
    }
}