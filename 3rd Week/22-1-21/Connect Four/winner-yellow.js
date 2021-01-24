var figure = document.getElementById("winner")
var ctx = figure.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "yellow";
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

var canvas = document.getElementById("area");
var context = canvas.getContext("2d");
context.drawImage(figure, 850, 200);


// var myInterval
setInterval(function () {
    moveDown();
}, 500);
setInterval(function () {
    moveUp();
}, 1000);


function moveDown() {
    context.clearRect(850, 215, figure.width, figure.height);
    context.drawImage(figure, 850, 185);
}
function moveUp() {
    context.clearRect(850, 185, figure.width, figure.height);
    context.drawImage(figure, 850, 215);
}

