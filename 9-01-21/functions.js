// Exercise 1
function sum() {
    result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    console.log(result);
}

sum(5, 10);

// Exercise 2
function waitThenRun(anotherFunction) {
    setTimeout(anotherFunction, 1500);
}

waitThenRun(function () {
    console.log("Hello!");
});

// Exercise 3
function numberCheck(number) {
    counter = 0;
    if (number <= 0 || typeof number != "number" || isNaN(number)) {
        return "ERROR";
    } else if (number >= 1000000) {
        return number;
    } else {
        while (number < 1000000) {
            number *= 10;
            counter += 1;
        }
        return counter;
    }
}

console.log(numberCheck(21));

// Bonus Exercise
var result = 0;
function getTotaler(number) {
    result += number;
    return result;
}
