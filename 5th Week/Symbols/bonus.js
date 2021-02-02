const makeWeirdArray = function () {
    argArray = [];
    for (let i = 0; i < arguments.length; i++) {
        argArray.push(arguments[i]);
    }
    return argArray;
}

var a = makeWeirdArray(1, 2, 3);
console.log([...a]);        // not accomplished yet!