function numberCheck(number) {
    if (number <= 0 || isNaN(number)) {
        return "ERROR";
    } else if (number >= 1000000) {
        return number;
    } else {
        while (number < 1000000) {
            number *= 10;
        }
        return number;
    }
}

console.log(numberCheck(21));

// EX3 solutions -> shorter code!
// v1
/*
function increaseOrderOfMagnitude(n) {
    if (n >= 1) {
        while (n < 1000000) {
            n *= 10;
        }
    } else {
        n = 'ERROR';
    }
    return n;
}
// v2: using Recursion
function increaseOrderOfMagnitude(n) {
    if (n >= 1) {
        if (n < 1000000) {
            n = increaseOrderOfMagnitude(n * 10);
        }
    } else {
        n = 'ERROR';
    }
    return n;
}
*/