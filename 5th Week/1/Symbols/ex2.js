function* genFunc(array) {
    for (let i = array.length; i > 0; i--) {
        yield i;
    }
}

const arr = [1, 2, 3];
const iterator = genFunc(arr);

var it1 = iterator.next();
console.log('it1 :>> ', it1);
var it2 = iterator.next();
console.log('it2 :>> ', it2);



// ANSWER **************

function* reverse(original) {
    const clone = [...original];
    while (clone.length) {
        yield clone.pop();
    }
}