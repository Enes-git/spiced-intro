function getTotaler() {
    var result = 0;
    return function (number) {
        result += number;
        return result;
    };
}
var totaler = getTotaler();
totaler(1); //1
totaler(2); //3
totaler(5); //8