function reverse(array) {
    var reversedArray = [];
    for (var i = 0; i < array.lenght; i++) {
        newArray.unshift(array[i]);
    }
    return reversedArray;
}

//OR

function reverseArray(arr) {
    // soln1: return arr.slice().reverse();
    var myArr = arr.slice();
    console.log(myArr.reverse());
}

// OR

function reverse(a) {
    var reversed = [];
    for (var i = a.length - 1; i >= 0; i--) {
        reversed.push(a[i]);
    }
    return reversed;
}