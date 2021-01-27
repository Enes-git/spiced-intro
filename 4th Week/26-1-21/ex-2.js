(function () {
    // console.log($);
    function translateNumberToGerman() {
        var numsInGerman = {
            1: "eins",
            2: "zwei",
            3: "drei",
            4: "vier",
            5: "fünf",
            6: "sechs",
            7: "sieben",
            8: "acht",
            9: "neun",
            10: "zehn"
        }
        try {
            askForNumber()
            return numsInGerman.num;

        }
        catch (error) {
            console.log('Something is wrong! :>> ', error);
            return translateNumberToGerman();
        }
    }


    function askForNumber() {
        var num = prompt('Please enter a number between 1 and 10');
        if (num >= 1 && num <= 10 && num == parseInt(num)) {
            return num;
        }
        throw new Error('Bad number');
    }
})();

