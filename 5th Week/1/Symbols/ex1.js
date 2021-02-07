function* numGenerator() {
    let i = 0;
    while (i <= 100) {
        if (i % 3 == 0 && i % 5 == 0) {
            yield "fizzbuzz";
        } else if (i % 5 == 0) {
            yield "buzz";
        } else if (i % 3 == 0) {
            yield "fizz"
        } else {
            yield i;
        }
        i++;
    }
}

for (let num of numGenerator()) {
    console.log(num);
}

// ANSWER **************
for (const n of fizzbuzz()) {
    console.log(n);
}

function* fizzbuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0) {
            if (i % 5 == 0) {
                yield 'fizzbuzz';
            } else {
                yield 'fizz';
            }
        } else if (i % 5 == 0) {
            yield 'buzz';
        } else {
            yield i;
        }
    }
}