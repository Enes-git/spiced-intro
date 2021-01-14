function Rectangle(width, height) {
    this.width = width;
    this.height = height;
    this.getArea = function () {
        var area = console.log(width * height);
        return area;    //I could not figured out how to return the value except logging it
    }
}

var rect = new Rectangle(4, 5);
rect.getArea();

function Square(number) {
    this.lenght = number;
    this.getArea = function () {
        var area = console.log(number * number);
        return area;    //I could not figured out how to return the value except logging it
    }
}

var square = new Square(4);
square.getArea();

function invertCase(someString) {
    var newString = "";
    for (var i in someString) {
        if (someString[i] === someString[i].toUpperCase()) {
            newString += someString[i].toLowerCase();
        } else if (someString[i] === someString[i].toLowerCase()) {
            newString += someString[i].toUpperCase();
        }
    }
    console.log(newString);
}
invertCase("AdaM12");

function Countdown(seconds) {
    this.seconds = seconds;
    this.start = function () {
        var num = this.seconds;
        for (var i = 0; i <= num; i++) {
            setTimeout(function () {
                console.log(num - i);
            }, 1000);
        }

    }
}

var countdown = new Countdown(5);
countdown.start();