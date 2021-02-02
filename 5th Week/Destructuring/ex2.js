const reverser = function (array1, array2) {
    let newArray = [...array1, ...array2];
    return newArray.reverse();
}
const myArray1 = [1, 2, 3, 4];
const myArray2 = [5, 6, 7, 8];
console.log(reverser(myArray1, myArray2), myArray1, myArray2);