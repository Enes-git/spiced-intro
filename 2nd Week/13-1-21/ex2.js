function invertCase(someString) {
    var newString = "";
    for (var i in someString) {
        if (someString[i] == someString[i].toUpperCase()) {
            newString += someString[i].toLowerCase();
        } else if (someString[i] == someString[i].toLowerCase()) {
            newString += someString[i].toUpperCase();
        }
    }
    return newString;
}

invertCase("asdGRE12");