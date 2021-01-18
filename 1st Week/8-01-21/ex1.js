function logType(arg) {
    if (typeof (arg) == "number") {
        if (isNaN(arg)) {
            console.log("not a number!");
        } else {
            console.log("number!");
        }
    }
    else if (typeof (arg) == "object") {
        if (arg === null) {
            console.log("null!");
        }
        else if (Array.isArray(arg)) {
            console.log("array!");
        } else {
            console.log("object!");
        }
    } else if (typeof (arg) == "function") {
        console.log("function!");
    } else if (typeof (arg) == "string") {
        console.log("string!");
    } else if (typeof (arg) == "boolean") {
        console.log("boolean!");
    } else if (typeof (arg) == "bigint") {
        console.log("bigint!");
    } else if (typeof (arg) == "undefined") {
        console.log("undefined!");
    } else {
        console.log("I have no idea!");
    }
}
var a = Math;
logType(a);
console.log(typeof (a));
