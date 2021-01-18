function Rectangle(width, height) {
    this.width = width;
    this.height = height;
    this.getArea = function () {
        return this.width * this.height;
    }
}

var rect = new Rectangle(4, 5);
rect.getArea(); //20

function Square(lenght) {
    this.width = lenght;
    this.height = lenght;
    this.getArea = new Rectangle().getArea;
}

var square = new Square(4);
square.getArea(); //16

// OR-2

function Rectangle(w, h) {      //not a good way since square & rectangle are same
    this.width = w;
    this.height = h;
    this.getArea = getArea;
}

function Square(n) {
    this.width = n;
    this.height = n;
    this.getArea = getArea;
}

function getArea() {
    return this.width * this.height;
}

// OR-3

function Rectangle(w, h) {
    this.width = w;
    this.height = h;
}

function Square(n) {
    this.width = n;
    this.height = n;
}

Rectangle.prototype.getArea = getArea;

Square.prototype.getArea = getArea;

function getArea() {
    return this.width * this.height;
}

// OR-4

function Rectangle(w, h) {
    this.width = w;
    this.height = h;
    this.getArea = function () {
        return this.width * this.height;
    };
}

function Square(n) {
    this.width = n;
    this.height = n;
}

Square.prototype.getArea = new Rectangle().getArea;

// OR-5

function Rectangle(w, h) {
    this.width = w;
    this.height = h;
}

function Square(n) {
    this.width = n;
    this.height = n;
    this.getArea = function () {
        return Rectangle.prototype.getArea.call(this);
    }
}

Rectangle.prototype.getArea = function () {
    return this.width * this.height;
};

// OR-6

function Rectangle(w, h) {
    this.width = w;
    this.height = h;
    this.getArea = function () {
        return this.width * this.height;
    };
}

function Square(n) {
    Rectangle.call(this, n, n);
}

// OR-7

function Rectangle(w, h) {
    this.width = w;
    this.height = h;
}

function Square(n) {
    Rectangle.call(this, n, n);
}

Rectangle.prototype.getArea = function () {
    return this.width * this.height;
};

Square.prototype.getArea = Rectangle.prototype.getArea;

// OR-8

function Rectangle(w, h) {
    this.width = w;
    this.height = h;
}

function Square(n) {
    Rectangle.call(this, n, n);
}

Rectangle.prototype.getArea = function () {
    return this.width * this.height;
};

Square.prototype = new Rectangle;
Square.prototype.constructor = Square;

// OR-9

function Rectangle(w, h) {
    this.width = w;
    this.height = h;
    this.getArea = function () {
        return this.width * this.height;
    };
}

function Square(n) {
    this.width = this.height = n;
    this.getArea = function () {
        return new Rectangle(n, n).getArea();
    };
}