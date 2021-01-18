function waitThenRun(anotherFunction) {
    setTimeout(function () {
        anotherFunction();
    }, 1500);
};

waitThenRun(function () {
    console.log('Hello!');
    waitThenRun(function () {
        console.log('Goodbye!');
    });
}); 
