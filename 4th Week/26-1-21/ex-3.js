// console.log($);
var area = $("textarea");
area.on("input", function (event) {
    var userInput = $(event.currentTarget).val();
    // console.log('userInput :>> ', userInput);
    try {
        var savedInput = JSON.stringify(userInput);
        localStorage.setItem("lastInput", savedInput);
        // console.log('localStorage.getItem(lastInput) :>> ', localStorage.getItem('lastInput'));
    } catch (error) {
        console.log('Something is wrong! :>> ', error);
    }
})

var returnedUser = $("html");
returnedUser.on("load", function () {
    try {
        var recalledInput = JSON.parse(localStorage.getItem("lastInput"));
        area.val(recalledInput);
    } catch (error) {
        console.log('Something is wrong! :>> ', error);
    }
})