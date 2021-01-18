var figure = document.getElementById("figure")
var ctx = figure.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 3;

// the head
ctx.beginPath();
ctx.arc(100, 50, 50, 0, Math.PI * 2);
ctx.stroke();

// the torso
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(100, 250);
ctx.stroke();
ctx.closePath();

// the left arm
ctx.beginPath();
ctx.moveTo(100, 150);
ctx.lineTo(0, 100);
ctx.stroke();
ctx.closePath();

// the right arm
ctx.beginPath();
ctx.moveTo(100, 150);
ctx.lineTo(200, 100);
ctx.stroke();
ctx.closePath();

// the left leg
ctx.beginPath();
ctx.moveTo(100, 250);
ctx.lineTo(0, 350);
ctx.stroke();
ctx.closePath();

// the right leg
ctx.beginPath();
ctx.moveTo(100, 250);
ctx.lineTo(200, 350);
ctx.stroke();
ctx.closePath();

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
context.drawImage(figure, 0, 0);


document.addEventListener("keydown", function (event) {     // Stickman moves only once in every direction, not more!?
    var width = figure.width;
    var height = figure.height;
    var x = 0;
    var y = 0;
    if (event.keyCode === 37) {
        context.clearRect(x, y, width, height);
        x--;
        context.drawImage(figure, x, y);
    }
    if (event.keyCode === 38) {
        context.clearRect(x, y, width, height);
        y--;
        context.drawImage(figure, x, y);
    }
    if (event.keyCode === 39) {
        context.clearRect(x, y, width, height);
        x++;
        context.drawImage(figure, x, y);
    }
    if (event.keyCode === 40) {
        context.clearRect(x, y, width, height);
        y++;
        context.drawImage(figure, x, y);
    }
});

