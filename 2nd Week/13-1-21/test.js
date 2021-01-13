var x, doubleX;
x = 500;

function timesTwo(number) {
    return number * 2;
}

doubleX = timesTwo(x);

var numbers = [x, doubleX];

for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

numbers = {};

numbers.y = doubleX;
