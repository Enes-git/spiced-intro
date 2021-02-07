const reverser = function (array) {
    const newArray = [...array];
    return newArray.reverse();
}
const myArray = [1, 2, 3, 4];
console.log(reverser(myArray), myArray);

// ANSWER **************
function reverse(a) {
    return [...a].reverse();
}