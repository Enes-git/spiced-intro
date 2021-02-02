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